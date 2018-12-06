var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var index = require("./routes/index");
var tasks = require("./routes/tasks");

const cors = require("cors");

var port = 5000;

var app = express();
//http://localhost:3000/
//https://todolistbrincel.herokuapp.com/
app.use(
  cors({
    origin: "https://brincellopeztodolist.herokuapp.com",
    credentials: true
  })
);



//View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, "client/build")));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);

app.use("/api", tasks);




app.listen(process.env.PORT ||port, function() {
  console.log("Server started on port " + port);
});
