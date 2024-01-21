import React, { ReactElement } from "react";
import { HANDLE_ON_ROW_CLICK } from "../interface";
interface RowProps extends React.PropsWithChildren {
  children: ReactElement | ReactElement[];
  handleOnRowClick: (arg0: HANDLE_ON_ROW_CLICK) => void;
  isHeaderCell?: HANDLE_ON_ROW_CLICK["isHeaderCell"];
  rowData?: any;
}

const Row: React.FC<RowProps> = ({
  children,
  handleOnRowClick,
  isHeaderCell = false,
  rowData,
}) => {
  return (
    <tr onClick={(e) => handleOnRowClick({ e, isHeaderCell, rowData })}>
      {children ? children : null}
    </tr>
  );
};

export default Row;
