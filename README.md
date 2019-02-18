# Feed Reader Testing project

## Project overview

In this project is given a web-based application that reads RSS feeds. There is included [Jasmine](http://jasmine.github.io/) for feed reader testing.

## What test suites are included in `feedreader.js`?

1. Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty
2. Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty
3. Test that ensures the menu element is hidden by default
4. Test that ensures the menu changes visibility when the menu icon is clicked
5. Test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container
6. Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes

## How to run the application?

- Clone or download _Feed-Reader-Testing-project_
(To clone Project you can use this link: https://github.com/dmitriyeff/Feed-Reader-Testing-project.git)
- Open index.html in your browser


