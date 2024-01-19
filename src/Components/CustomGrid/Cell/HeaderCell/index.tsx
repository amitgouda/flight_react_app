import React, { ReactElement } from "react";

interface HeaderCellProps extends React.PropsWithChildren {
  children?: ReactElement | string;
  name?: string;
}

const HeaderCell: React.FC<HeaderCellProps> = ({ children, name }) => (
  <th>{children ? children : name ? name : null}</th>
);

export default HeaderCell;
