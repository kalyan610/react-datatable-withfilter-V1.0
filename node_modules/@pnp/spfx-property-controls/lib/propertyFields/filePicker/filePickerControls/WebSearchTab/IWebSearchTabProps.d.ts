import { IFilePickerTab } from "..";
import { ISearchSuggestion } from ".";
import { FilesSearchService } from "../../../../services/FilesSearchService";
export interface IWebSearchTabProps extends IFilePickerTab {
    bingSearchService: FilesSearchService;
    suggestions?: ISearchSuggestion[];
}
//# sourceMappingURL=IWebSearchTabProps.d.ts.map