import React, { ReactElement } from "react";
import "./headerCell.css";
interface HeaderCellProps extends React.PropsWithChildren {
  children?: ReactElement | string;
  name?: string;
  customClassName?: string;
}

const HeaderCell: React.FC<HeaderCellProps> = ({
  children,
  name,
  customClassName = "",
}) => (
  <th className={`header-column ${customClassName}`}>
    {children ? children : name ? name : null}
  </th>
);

export default HeaderCell;
