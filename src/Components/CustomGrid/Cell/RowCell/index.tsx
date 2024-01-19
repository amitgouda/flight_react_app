import React, { ReactElement } from "react";

interface DataCellProps extends React.PropsWithChildren {
  children?: ReactElement | string;
  name?: string;
}

const DataCell: React.FC<DataCellProps> = ({ children, name }) => {
  return <td>{children ? children : name ? name : null}</td>;
};

export default DataCell;
