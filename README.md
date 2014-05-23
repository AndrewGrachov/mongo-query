mongo-query
===========

mongo-db compatible query engine to work with POJO collections. A part of [mongomock](https://github.com/AndrewGrachov/mongomock)


Work with collections like you're doing on mongodb, everywhere - client, backend, anything;

**Usage**

a wrapper use '_' prefix like taht lodash and undescore.js do. You dont actually need them if you are 
using mongo-like query syntax,so..
```
_(myCollection).update({id:1},{$set:{name:"Andrew"}})
```

You can see a live demo [here](http://andrewgrachov.github.io/mongo-query/)

Complete list of supported operations and tests are  [here](https://github.com/AndrewGrachov/mongomock)
