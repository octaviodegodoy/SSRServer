import express from 'express';
const app = express();
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

app.use(express.static('public'));

app.get('*',(req,res) => {
      const store = createStore();
      // Some logic to initialize some data
      // into the store
     res.send(renderer(req,store));
});

app.listen(3000,() => {
  console.log('Listening on port 3000');
});
