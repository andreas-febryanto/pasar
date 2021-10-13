const express = require("express");
const { connect } = require("./config/config");
const router = require("./routes");

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connect().catch(console.dir);

app.use(router);

app.listen(PORT, () => {
  console.log(`running in port:${PORT}`);
});
