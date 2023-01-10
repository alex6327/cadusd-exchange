In the table view, users should be able to see data for the following columns: Date, Open Price, High Price, Low Price, Closing Price, and Adjusted Closing Price. Additionally, the table view should support infinite scrolling and a date range filter, allowing users to view a specific date range or all of the data.

In the charting view, the application should display the Open Price data and allow users to choose between two different chart types: Line chart and Area chart. The application should be compatible with Chrome, Edge, and Firefox browsers.

Loading and parsing the CSV file:
Used Papaparse to parse the CSV file

Displaying the data in a table:
1.infinite scrolling: used react-infinite-scroll-component.
2.date range filter:

Displaying the data in a chart: Used chart.js and chartjs wrapper for reactjs:react-chartjs-2 .Tried to use hook to change fill varialbe to toggle between line chart and area chart.

Create the Filter option for user to pick the date range: Create a component that allows user to select date range or choose the view all data. On changing the date range , update the data that is being displayed in the table.

Make the application browser compatible: Make sure to test the application on Chrome, Edge, and Firefox, and make any necessary adjustments to ensure that it works correctly on all three browsers.

npm install papaparse react-infinite-scroll-component react-bootstrap bootstrap chart.js react-chartjs-2
