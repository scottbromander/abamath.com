# Google Sheet Worksheet ID

In order to add a new spreadsheet API, you will need to follow these steps:

1. Go here to retrieve all XML data for the site https://spreadsheets.google.com/feeds/worksheets/1DLAVN3q758sPohCFeZlVSVRZKXzEser1SIsQnH2mvrw/private/full
2. Format the data and look for the current tab you are pursuing (use browser find and the name of the tab): https://www.freeformatter.com/xml-formatter.html#ad-output
3. Find the name of the specific tab you are looking for, and pull out the id in front of `/private/full` https://spreadsheets.google.com/feeds/list/1DLAVN3q758sPohCFeZlVSVRZKXzEser1SIsQnH2mvrw/oy3lbcl/private/full
4. In this case that is `oy3lbcl`
5. Place that in the http URL: https://spreadsheets.google.com/feeds/list/1DLAVN3q758sPohCFeZlVSVRZKXzEser1SIsQnH2mvrw/oy3lbcl/public/basic?hl=en_US&alt=json
6. Make sure to change the name attribute

On gatsby-node.js (in order that they appear on the document)

1  Copy and change the const functions for correct_______ and validate_________
2. Copy and change the const checks at the top of the page
3. Copy and change the else if statements to include the canst you made in step 1
4. Copy and change the graphql query
5. Copy and change the return template statement

Create a -corrector.js file in utils