import React from "react";
import Row from "./Row";
import HeaderCell from "./Cell/HeaderCell";
import DataCell from "./Cell/RowCell";
import { HANDLE_ON_ROW_CLICK } from "./interface";
import "./grid.css";
interface COLUMN {
  name: string;
  key: string;
  helperFunc?: (argument: any) => string;
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
    const target = e.target as HTMLElement;
    if (target.tagName === "TH") {
    } else if (target.tagName === "TD" && !isHeaderCell) {
      const id: number = rowData.id;
      handleOnClickRow(id);
    }
  };
  return (
    <table className="table-container">
      <thead>
        <Row handleOnRowClick={handleOnRowClick} isHeaderCell={true}>
          {columns.map((column, index) => (
            <HeaderCell
              key={column.key}
              name={column.name}
              customClassName={`column-cell-${index + 1}`}
            />
          ))}
        </Row>
      </thead>
      <tbody data-testid="table-body">
        {dataProvider.map((rowData, index) => (
          <Row
            key={rowData[rowKey]}
            rowData={rowData}
            handleOnRowClick={handleOnRowClick}
            isEven={(index + 1) % 2 === 0}
          >
            {columns.map((column, index) => (
              <DataCell
                key={rowData[rowKey] + "_" + column.name + index}
                name={
                  typeof column.helperFunc === "function"
                    ? column.helperFunc(rowData[column.key])
                    : rowData[column.key]
                }
                customClassName={`column-cell-${index + 1}`}
              />
            ))}
          </Row>
        ))}
      </tbody>
    </table>
  );
};

export default CustomGrid;
