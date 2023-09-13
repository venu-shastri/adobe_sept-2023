# web-spider-callback-iterator-pattern

To show an example of sequential iteration, let's introduce a new feature to the web
spider application. We now want to download all the links contained in a web page
recursively. To do that, we are going to extract all the links from the page and then
trigger our web spider on each one of them recursively and in sequence.

Web spider example to demonstrate sequential callbacks

## Run

Install the necessary dependencies with `npm install` and then run:

```bash
node spider-cli.js https://loige.co
```

You can optionally specify the maximum depth of crawling by passing a second parameter:

```bash
node spider-cli.js https://loige.co 5
```
