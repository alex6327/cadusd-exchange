Loading and parsing the CSV file:
Used Papaparse to parse the CSV file.

Displaying the data in a table:
Used react-infinite-scroll-component.
1.infinite scrolling:
1.Load the first 100 data
2.When scroll to the bottom the page, fetch the next 100 rows of data(there is 1500 milliseconds delay)
2.date range filter:

Displaying the data in a chart:
Used chart.js and react-chartjs-2.

Create the Filter option for user to pick the date range:
1.When changing the date range , update the data that is being displayed in the table.
2.View all button set start date and end date to default value and update the data displayed in the table.

Make the application browser compatible:
Make sure to test the application on Chrome, Edge, and Firefox.

npm install papaparse react-infinite-scroll-component react-bootstrap bootstrap chart.js react-chartjs-2

Test this app
git clone https://github.com/alex6327/cadusd-exchange.git
npm install
npm start
