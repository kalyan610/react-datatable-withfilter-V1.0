/// <reference types="react" />
interface IPagination {
    colSpan: number;
    totalItems: number;
    onPaginationUpdate: (pageNo: number, pageSize: number) => void;
    pageSize: number;
    classNamePage: string;
}
export declare function PaginationCustom(props: IPagination): JSX.Element;
export {};
//# sourceMappingURL=PaginationCustom.d.ts.map