import Table from "react-bootstrap/Table";

const DataTable = ({ header, rows }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          {header.slice(0, -1).map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.slice(0, -1).map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
