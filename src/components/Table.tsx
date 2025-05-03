// interface Columns {
// header: string;
// accessor: string;
// className?: string;
// }

import React from "react";

// interface RenderRow {
//   id: number;
//   teacherId: string;
//   name: string;
//   email?: string;
//   photo: string;
//   phone: string;
//   subjects: string[];
//   classes: string[];
//   address: string;
// }

// interface Data {}

// interface TableProps {
//   columns: Columns[];
//   renderRow: RenderRow;
//   data: Data;
// }

const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <table className="w-full mt-4 ">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th className={col.className} key={col.accessor}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
