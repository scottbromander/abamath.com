
```
Lukes-MacBook-Pro:abamath.com lukeschlangen$ gatsby develop
success delete html and css files from previous builds — 0.058 s
success open and validate gatsby-config — 0.022 s
info One or more of your plugins have changed since the last time you ran Gatsby. As
a precaution, we're deleting your site's cache to ensure there's not any stale
data
success copy gatsby files — 0.029 s
success onPreBootstrap — 0.918 s
success source and transform nodes — 2.192 s
success building schema — 0.238 s
success createLayouts — 0.008 s
error Cannot read property 'allMarkdownRemark' of undefined


  TypeError: Cannot read property 'allMarkdownRemark' of undefined
  
  - gatsby-node.js:169 graphql.then.result
    /Users/lukeschlangen/Documents/side/abamath/abamath.com/gatsby-node.js:169:2    1
  
  - util.js:16 tryCatcher
    [lib]/[gatsby-cli]/[bluebird]/js/release/util.js:16:23
  
  - promise.js:512 Promise._settlePromiseFromHandler
    [lib]/[gatsby-cli]/[bluebird]/js/release/promise.js:512:31
  
  - promise.js:569 Promise._settlePromise
    [lib]/[gatsby-cli]/[bluebird]/js/release/promise.js:569:18
  
  - promise.js:606 Promise._settlePromiseCtx
    [lib]/[gatsby-cli]/[bluebird]/js/release/promise.js:606:10
  
  - async.js:138 Async._drainQueue
    [lib]/[gatsby-cli]/[bluebird]/js/release/async.js:138:12
  
  - async.js:143 Async._drainQueues
    [lib]/[gatsby-cli]/[bluebird]/js/release/async.js:143:10
  
  - async.js:17 Immediate.Async.drainQueues [as _onImmediate]
    [lib]/[gatsby-cli]/[bluebird]/js/release/async.js:17:14
  

error UNHANDLED REJECTION
```

1. Delete everything in the `.then` and the GraphQL query of `gatsby-node.js` (you will undo this later)
2. Run `gatsby develop` in the terminal again.
3. Look for new error and set a breakpoint where the error is occurring

If you are seeing the links like it's running (even if you are getting React errors) you can test the queries here: http://localhost:8000/___graphql

Slowly add pieces back
