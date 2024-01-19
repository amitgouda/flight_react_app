import React, { ReactElement } from "react";

interface RowProps extends React.PropsWithChildren {
  children: ReactElement | ReactElement[];
}

const Row: React.FC<RowProps> = ({ children }) => {
  return <tr>{children ? children : null}</tr>;
};

export default Row;
