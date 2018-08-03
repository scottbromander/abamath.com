# Google Sheet Worksheet ID

In order to add a new spreadsheet API, you will need to follow these steps:

1. Go here to retrieve all XML data for the site https://spreadsheets.google.com/feeds/worksheets/1DLAVN3q758sPohCFeZlVSVRZKXzEser1SIsQnH2mvrw/private/full
2. Format the data and look for the current tab you are pursuing (use browser find and the name of the tab): https://www.freeformatter.com/xml-formatter.html#ad-output
3. Find the name of the specific tab you are looking for, and pull out the id in front of `/private/full` https://spreadsheets.google.com/feeds/list/1DLAVN3q758sPohCFeZlVSVRZKXzEser1SIsQnH2mvrw/oy3lbcl/private/full
4. In this case that is `oy3lbcl`
5. Place that in the http URL: https://spreadsheets.google.com/feeds/list/1DLAVN3q758sPohCFeZlVSVRZKXzEser1SIsQnH2mvrw/oy3lbcl/public/basic?hl=en_US&alt=json