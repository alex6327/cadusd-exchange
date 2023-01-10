In the table view, users should be able to see data for the following columns: Date, Open Price, High Price, Low Price, Closing Price, and Adjusted Closing Price. Additionally, the table view should support infinite scrolling and a date range filter, allowing users to view a specific date range or all of the data.

In the charting view, the application should display the Open Price data and allow users to choose between two different chart types: Line chart and Area chart. The application should be compatible with Chrome, Edge, and Firefox browsers.

It sounds like a challenging task but can be achievable by breaking it into smaller chunks. I can guide you through these chunks for the best approach for this.

Loading and parsing the CSV file: Since the data is provided in a CSV file, the first step in building the application would be to load and parse the file. You can use a library like Papa Parse or d3.js to help with this.

Displaying the data in a table: Once the data is loaded and parsed, you can use React's component architecture to display the data in a table. You can create a separate component for each column, and another component to handle the infinite scrolling and date range filter functionality.

Displaying the data in a chart: For charting the data, you can use a library like Chart.js or Recharts. You can create a separate component for the chart, and use the state of your application to switch between the Line chart and Area chart types.

Create the Filter option for user to pick the date range: Create a component that allows user to select date range or choose the view all data. On changing the date range , update the data that is being displayed in the table.

Make the application browser compatible: Make sure to test the application on Chrome, Edge, and Firefox, and make any necessary adjustments to ensure that it works correctly on all three browsers.

npm install papaparse react-infinite-scroll-component react-bootstrap bootstrap chart.js react-chartjs-2
