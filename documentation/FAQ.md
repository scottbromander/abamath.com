# Frequently Asked Questions

## What should I do when I have a question/get stuck?

Because we're dealing with some tough material at this point, you're going to have harder and harder questions to answer. Here's the process I'd like to try (very much a work in progress)

1. Check google and the FAQ.md in the documentation folder for an answer
1. Ask the other instructors if they know the answer.
1. If you figure out the answer, and if it seems like a question others might have in the future, add it to the FAQ.md in the documentation folder
1. If no instructors know the answer, add a Trello task to the top of the To Do and put my face on it.
1. If it seems like a one-off thing, I'll answer in Trello, if it seems like a question others might have in the future, I'll add it to the FAQ.md in the documentation folder

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
