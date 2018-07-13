# Frequently Asked Questions


## What is glamourous and how do we use it?
## What are keys, and why does Gatsby get mad when I use `<ul>` and `<li>` tags

## How do I add a new page?

## How are we automatically generating pages from a Google spreadsheet?

1. The `WebsiteData` tab on the `Community Education` spreadsheet is public to view.
    1. This tab pulls select columns from the `Summer 2018` tab that are ok for the public to view.
1. The `gatsby-source-apiserver` in `gatsby-config.js` makes a request to the google sheets API and converts them to nodes.
    1. This plugin reaches out to https://spreadsheets.google.com/feeds/list/1DLAVN3q758sPohCFeZlVSVRZKXzEser1SIsQnH2mvrw/ogwtdyp/public/basic?hl=en_US&alt=json to retrieve the unformatted JSON data from the google sheet
    1. The plugin creates nodes with the type `community_education__classes` which come from the `feed.entry` property from the JSON data response.
1. The `onCreateNode` method in `gatsby-node.js` formats and validates the information from google
    1. The `utils/class-corrector.js` file converts the response from google into something usable with the `correctClass` function.
    1. The `utils/class-corrector.js` file checks if the class has all of the expected properties, a valid URL, and if it is in the future with the `validateClass` function.
     1. Use the district and class name to create a title for the class (will end up looking like `Eden Prairie Computer Coders`)
    1. Use the title to create a `slug` for routing (will end up looking like `/eden-prairie-computer-coders`)
1. The `createPages` method in `gatsby-node.js` creates a page for each class from the spreadsheet.

If you would like to learn more, following an axios tutorial would help with understanding http requests. Understanding http requests will help for conceptually understanding how the data is retrieved.

The more challenging part for this might be the Gatsby setup and filtering. Following the gatsby tutorial could help with that.

If this is still confusing, that's ok, this was a really complicated task.

