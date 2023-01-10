import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import DataTable from "./DataTable";

const TableView = ({ data }) => {
  const [header, setHeader] = useState([]);
  const [allData, setAllData] = useState([]);
  const [rows, setRows] = useState([]);
  const [startDate, setStartDate] = useState("2000-01-01");
  const [endDate, setEndDate] = useState("2023-01-09");
  const [hasMore, setHasMore] = useState(true);

  const fetchData = (startDate, endDate) => {
    setHeader(data[0]);
    setAllData(data); // store all the data in the allData state variable
    const filteredData = data
      .filter((row) => {
        const date = row[0];
        return date >= startDate && date <= endDate;
      })
      .slice(0, 100); // only return the first 100 rows
    if (filteredData.length < 100) {
      setHasMore(false);
    }
    console.log(filteredData);
    setRows(filteredData);
  };

  useEffect(() => {
    setHasMore(true);
    fetchData(startDate, endDate);
  }, [startDate, endDate]);

  const fetchMoreData = () => {
    // get the next 100 rows of data
    setTimeout(() => {
      const filteredData = allData
        .filter((row) => {
          const date = row[0];
          return date >= startDate && date <= endDate;
        })
        .slice(rows.length, rows.length + 100);

      // update the data state variable with the additional rows
      setRows([...rows, ...filteredData]);
      if (filteredData.length < 100) {
        setHasMore(false);
      }
    }, 1500);
  };

  return (
    <>
      <label style={{ padding: "8px" }}>
        Start date:
        <input
          type="date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </label>
      <label style={{ padding: "8px" }}>
        End date:
        <input
          type="date"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </label>
      <button
        onClick={() => {
          setStartDate("2000-01-01");
          setEndDate("2023-01-09");
        }}
      >
        View All
      </button>
      <InfiniteScroll
        dataLength={rows.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <DataTable header={header} rows={rows} />
      </InfiniteScroll>
    </>
  );
};

export default TableView;
