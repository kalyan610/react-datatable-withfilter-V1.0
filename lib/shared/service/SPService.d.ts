import { WebPartContext } from "@microsoft/sp-webpart-base";
export declare class SPService {
    private context;
    constructor(context: WebPartContext);
    getCurrentUserId(): Promise<number>;
    getListItems(selectedList: string, selectedFields: any[], selectedCondition: string): Promise<any[]>;
    getFields(selectedList: string): Promise<any>;
}
//# sourceMappingURL=SPService.d.ts.map