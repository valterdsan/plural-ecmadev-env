/*  importing = es6 + babel  */

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;       // now lets create an instance of express;
const app  = express();  // now I'm integrating Webpack with Express
const compiler = webpack(config);

// now I'm telling Express other things that I'd like to use
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if(err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
