require("dotenv").config();
const hostingName = process.env.HOST_NAME;
const port = process.env.PORT || 8888;

const express = require("express");
const configViewEngine = require('./config/viewEngine')

const webRouter =  require('./routes/web')
 
const app = express();
configViewEngine(app);

app.use('/', webRouter)

app.listen(port, hostingName, () => {
  console.log(`Example app listening on port ${port}`);
});
