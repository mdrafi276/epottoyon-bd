/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTable } from "react-table";

const Table = () => {
    const [data, setData] = useState([
        { firstName: "", lastName: "" }, // Default row
    ]);

    const columns = [
        {
            Header: "First Name",
            accessor: "firstName",
            Cell: ({ cell }) => <input {...cell.getCellProps().inputProps} />,
        },
        {
            Header: "Last Name",
            accessor: "lastName",
            Cell: ({ cell }) => <input {...cell.getCellProps().inputProps} />,
        },
    ];

    const handleAddRow = () => {
        setData([...data, { firstName: "", lastName: "" }]);
    };

    const handleDeleteRow = (index) => {
        setData(data.filter((row, i) => i !== index));
    };

    const handleUpdateData = (newData) => {
        setData(newData);
    };

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data,
        }
    );

    const handleInputChange = (e, rowIndex, accessor) => {
        const newData = [...data];
        newData[rowIndex][accessor] = e.target.value;
        onUpdateData(newData);
    };

    return (
        <div>
            <button onClick={onAddRow}>Add Row</button>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th key={column.id} {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr key={row.id} {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            key={cell.getCellProps().key}
                                            {...cell.getCellProps()}
                                        >
                                            <input
                                                className="border-2 border-black "
                                                {...cell.getCellProps().inputProps}
                                                value={cell.value}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        e,
                                                        row.index,
                                                        cell.column.id
                                                    )
                                                }
                                            />
                                        </td>
                                    );
                                })}
                                <td>
                                    <button onClick={() => onDeleteRow(row.index)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
