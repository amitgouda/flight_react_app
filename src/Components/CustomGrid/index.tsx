import React from "react";
import Row from "./Row";
import HeaderCell from "./Cell/HeaderCell";
import DataCell from "./Cell/RowCell";
import { HANDLE_ON_ROW_CLICK } from "./interface";
interface COLUMN {
  name: string;
  key: string;
}

interface RowProps extends React.PropsWithChildren {
  columns: COLUMN[];
  dataProvider: any[];
  rowKey: string;
  handleOnClickRow: (id: number) => void;
}

const CustomGrid: React.FC<RowProps> = ({
  columns,
  dataProvider,
  rowKey,
  handleOnClickRow,
}) => {
  const handleOnRowClick = ({
    e,
    isHeaderCell,
    rowData,
  }: HANDLE_ON_ROW_CLICK) => {
    console.log(e, isHeaderCell);

    const target = e.target as HTMLElement;
    if (target.tagName === "TH") {
      console.log("header cell clicked");
    } else if (target.tagName === "TD" && !isHeaderCell) {
      console.log(rowData);
      const id: number = rowData.id;
      handleOnClickRow(id);
    }
  };
  return (
    <table>
      <Row handleOnRowClick={handleOnRowClick} isHeaderCell={true}>
        {columns.map((column) => (
          <HeaderCell key={column.key} name={column.name} />
        ))}
      </Row>

      {dataProvider.map((rowData) => (
        <Row
          key={rowData[rowKey]}
          rowData={rowData}
          handleOnRowClick={handleOnRowClick}
        >
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
