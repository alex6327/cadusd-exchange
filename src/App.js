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
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // if (result.length === 0) {
  //   console.log("Error: result length is 0");
  //   return null;
  // }
  if (loading) {
    return <div>Loading...</div>;
  } else {
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
  }
};

export default App;
