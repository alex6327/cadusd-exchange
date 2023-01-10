import Header from "./components/Header";
import Papa from "papaparse";
import React, { useState, useEffect } from "react";
import csvFile from "./CADUSD=X.csv";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import TableView from "./components/TableView";
import ChartView from "./components/ChartView";

const App = () => {
  const [result, setResult] = useState([]);

  const parseCsv = () => {
    return new Promise((resolve, reject) => {
      Papa.parse(csvFile, {
        download: true,
        complete: function (parsedResult) {
          resolve(parsedResult.data);
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  };

  useEffect(() => {
    parseCsv()
      .then((data) => {
        setResult(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (result.length === 0) {
    return null;
    console.log("Error: result length is 0");
  }
  return (
    <div className="container">
      <Header />
      <Tabs
        defaultActiveKey="tableView"
        id="fill-tab-example"
        className="mb-2"
        fill
      >
        <Tab eventKey="tableView" title="Table View">
          <TableView data={result} />
        </Tab>
        <Tab eventKey="chartView" title="Chart View">
          <ChartView data={result} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
