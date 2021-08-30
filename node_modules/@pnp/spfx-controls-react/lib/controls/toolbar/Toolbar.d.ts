/// <reference types="react" />
import { PropsOfElement } from "@fluentui/react-northstar";
import "./toolbar.css";
import { TActionGroups, TFilters } from "./ToolbarActionsUtils";
/**
 * Toolbar props
 */
export interface IToolbarProps extends PropsOfElement<"div"> {
    /**
     * Toolbar action groups
     */
    actionGroups: TActionGroups;
    /**
     * Toolbar filters
     */
    filters?: TFilters;
    /**
     * Specifies if searchbox should be displayed
     */
    find?: boolean;
    /**
     * Specifies if a user can select only one filter at a time
     */
    filtersSingleSelect?: boolean;
    /**
     * Filter changed handler
     */
    onSelectedFiltersChange?: (selectedFilters: string[]) => string[];
    /**
     * Search query changed handler
     */
    onFindQueryChange?: (findQuery: string) => string;
}
export declare const Toolbar: (props: IToolbarProps) => JSX.Element;
//# sourceMappingURL=Toolbar.d.ts.map