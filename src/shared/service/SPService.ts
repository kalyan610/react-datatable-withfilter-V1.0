import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp } from '@pnp/sp/presets/all';

export class SPService {
    constructor(private context: WebPartContext) {
        sp.setup({
            spfxContext: this.context
        });
    }

    //call to get user Id
    public async getCurrentUserId():Promise<number>{
        try{
            return await sp.web.currentUser.get().then(result => {
                return result.Id;
            });
        } catch (error) {
            console.log(error);
        }
    }

    public async getListItems(selectedList: string, selectedFields: any[], selectedCondition: string) {
        try {
            let selectQuery: any[] = ['Id'];
            let expandQuery: any[] = [];
            let listItems = [];
            let currectUserId = this.getCurrentUserId();
            let items: any;
            for (var i = 0; i < selectedFields.length; i++) {
                switch (selectedFields[i].fieldType) {
                    case 'SP.FieldUser':
                    case 'SP.FieldLookup':
                        selectQuery.push(`${selectedFields[i].key}/Title`);
                        expandQuery.push(selectedFields[i].key);
                        break;
                    case 'SP.Field':
                        selectQuery.push('Attachments,AttachmentFiles');
                        expandQuery.push('AttachmentFiles');
                        break;
                    default:
                        selectQuery.push(selectedFields[i].key);
                        break;
                }
            }
            
            if(selectedCondition != "" && selectedCondition != null)
            {
                if(selectedCondition.trim().indexOf("[ME]")>0)
                {
                    selectedCondition = selectedCondition.replace(/\[ME\]/g,(await currectUserId).toString());
                }
                items = await sp.web.lists.getById(selectedList).items
                .filter(selectedCondition)
                .select(selectQuery.join())
                .expand(expandQuery.join())
                .top(4999)
                .getPaged();

            }else{
                items = await sp.web.lists.getById(selectedList).items
                .select(selectQuery.join())
                .expand(expandQuery.join())
                .top(4999)
                .getPaged();
            }
            
            listItems = items.results;
            while (items.hasNext) {
                items = await items.getNext();
                listItems = [...listItems, ...items.results];
            }
            return listItems;
        } catch (err) {
            Promise.reject(err);
        }
    }

    public async getFields(selectedList: string): Promise<any> {
        try {
            const allFields: any[] = await sp.web.lists
                .getById(selectedList)
                .fields
                .filter("Hidden eq false and ReadOnlyField eq false and Title ne 'Content Type' and Title ne 'Attachments'")
                .get();
            return allFields;
        }
        catch (err) {
            Promise.reject(err);
        }
    }
}
