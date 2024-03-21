/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

const TableThree = ({ rows, setRows }) => {
    const handleAddRow = () => {
        const newRow = {};
        if (rows.length > 0) {
            Object.keys(rows[0]).forEach((key) => {
                newRow[key] = "";
            });
        }
        setRows([...rows, newRow]);
    };

    const handleRemoveRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };

    const handleInputChange = (index, key, value) => {
        const updatedRows = rows.map((row, i) =>
            i === index ? { ...row, [key]: value } : row
        );
        setRows(updatedRows);
    };

    return (
        <div className="overflow-x-auto mx-3">
            <Button className="my-4" onClick={handleAddRow} color="blue">
                Add Row
            </Button>
            <table className="w-full border-collapse">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        {rows.length > 0 &&
                            Object.keys(rows[0]).map((key) => (
                                <th key={key} className="px-4 py-2">
                                    {key}
                                </th>
                            ))}
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100 text-gray-700">
                    {rows.map((row, index) => (
                        <tr key={index}>
                            {Object.keys(row).map((key) => (
                                <td key={key} className="px-4 py-2 border border-gray-600">
                                    <input
                                        type="text"
                                        value={row[key]}
                                        onChange={(e) =>
                                            handleInputChange(index, key, e.target.value)
                                        }
                                        className="w-full bg-transparent focus:outline-none text-center"
                                    />
                                </td>
                            ))}

                            <td className="px-4 py-2 border border-black">
                                {rows?.length > 1 && (
                                    <Button
                                        onClick={() => handleRemoveRow(index)}
                                        color="red"
                                    >
                                        Remove
                                    </Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableThree;
