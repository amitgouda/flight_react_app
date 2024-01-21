export interface HANDLE_ON_ROW_CLICK {
  e: React.MouseEvent<HTMLTableRowElement, MouseEvent>;
  isHeaderCell: boolean;
  rowData?: any;
}
