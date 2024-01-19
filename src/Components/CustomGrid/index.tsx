import React, { Key } from "react";
import Row from "./Row";
import HeaderCell from "./Cell/HeaderCell";
import DataCell from "./Cell/RowCell";

interface COLUMN {
  name: string;
  key: string;
}

interface RowProps extends React.PropsWithChildren {
  columns: COLUMN[];
  dataProvider: any[];
  rowKey: string;
}

const CustomGrid: React.FC<RowProps> = ({ columns, dataProvider, rowKey }) => {
  return (
    <table>
      <Row>
        {columns.map((column) => (
          <HeaderCell key={column.key} name={column.name} />
        ))}
      </Row>

      {dataProvider.map((rowData) => (
        <Row key={rowData[rowKey]}>
          {columns.map((column, index) => (
            <DataCell
              key={rowData[rowKey] + "_" + column.name + index}
              name={rowData[column.key]}
            />
          ))}
        </Row>
      ))}
    </table>
  );
};

export default CustomGrid;
