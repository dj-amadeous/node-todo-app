// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');

  const db = client.db('TodoApp');

  //queries data insnide nodejs
  //toArray returns a promise
  // db.collection('Todos').find({
  //     // id: new ObjectID('5a5b10011ff6e307c47ad4c6')
  //     _id: new ObjectID('5a5b10011ff6e307c47ad4c6')
  //   }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // })
  //   .catch((err) => {
  //       console.log('This is catching an error!', err);
  //   });

  db.collection('Users').find({
    name: 'Evan'
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to fetchs users', err);
  });



  // client.close();
});
