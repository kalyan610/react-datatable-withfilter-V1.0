/// <reference types="react" />
interface IPagination {
    colSpan: number;
    totalItems: number;
    onPaginationUpdate: (pageNo: number, pageSize: number) => void;
    pageSize: number;
}
export declare function Pagination(props: IPagination): JSX.Element;
export {};
//# sourceMappingURL=Pagination.d.ts.map