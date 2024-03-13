import { useState } from "react";
import Table from "../../components/Table/Table";
import { Button } from "@material-tailwind/react";

const App = () => {
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

    return (
        <div>
            <h1>Dynamic Table</h1>
            <Table
                columns={columns}
                data={data}
                onAddRow={handleAddRow}
                onDeleteRow={handleDeleteRow}
                onUpdateData={handleUpdateData}
            />
            <Button onClick={() => console.log(data)}>Log Data</Button>
        </div>
    );
};

export default App;
