import React, { ReactElement } from "react";
import "./dataCell.css";
interface DataCellProps extends React.PropsWithChildren {
  children?: ReactElement | string;
  name?: string;
  customClassName?: string;
}

const DataCell: React.FC<DataCellProps> = ({
  children,
  name,
  customClassName = "",
}) => {
  return (
    <td className={`data-cell  ${customClassName}`}>
      {children ? children : name ? name : null}
    </td>
  );
};

export default DataCell;
