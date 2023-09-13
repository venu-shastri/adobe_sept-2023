# 06-web-spider-parallel-execution

Web spider example to demonstrate unlimited parallel execution.
So far, Web Spider application is executing the recursive download of the linked pages in a sequential fashion. We can easily improve the performance of this process by downloading all the linked pages in parallel.

## Run

Install the necessary dependencies with `npm install` and then run:

```bash
node spider-cli.js https://loige.co
```

You can optionally specify the maximum depth of crawling by passing a second parameter:

```bash
node spider-cli.js https://loige.co 5
```
