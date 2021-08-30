import { IFilePickerResult } from "../FilePicker.types";
import { IRecentFile } from "../../../../services/FilesSearchService.types";
export interface IRecentFilesTabState {
    results: IRecentFile[];
    isLoading: boolean;
    filePickerResult: IFilePickerResult;
}
//# sourceMappingURL=IRecentFilesTabState.d.ts.map