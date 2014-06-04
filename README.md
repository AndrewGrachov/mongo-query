mongo-query
===========

mongo-db compatible query engine to work with POJO collections. A part of [mongomock](https://github.com/AndrewGrachov/mongomock)


Work with collections like you're doing on mongodb, everywhere - client, backend, anything;

**Install**

```
bower install mongo-query
```

**Usage**

supports most of mongodb native query operators.

http://docs.mongodb.org/manual/reference/operator/query/

wrap your collection in
```
var collection = _q([]) // returns you a wrapped object;
collection.find({...})
//etc
```


```

_q(myCollection).update({id:1},{$set:{name:"Andrew"}})
```

You can see a live demo [here](http://andrewgrachov.github.io/mongo-query/)

Complete list of supported operations and tests are  [here](https://github.com/AndrewGrachov/mongomock)
