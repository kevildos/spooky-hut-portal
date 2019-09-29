var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var Datastore = require("nedb");

//var indexRouter = require("./routes/index");
//var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//const dev = app.get("env") !== "production";
//if (dev) {
//app.use(express.static(path.join(__dirname, "client", "build")));
//} else {
//app.use(express.static(path.join(__dirname, "client", "build")));
////app.use(express.static(path.join(__dirname, "public")));
//}

//app.use("/", indexRouter);
//app.use("/users", usersRouter);

const database = new Datastore({ filename: "database.db", autoload: true });

app.get("/api/:name", function(req, res, next) {
  console.log("In GET route accessing name:" + req.params.name);
  database.find({ name: req.params.name }, (err, docs) => {
    console.error("Error:" + err);
    //console.log("Index:" + docs[0].index);
    //console.log("RowValues:" + docs[0].rowValues);
    res.status(200).send(docs[0].rowValues);
  });
});

//app.get("/:index", function(req, res, next) {
//console.log("In GET route accessing id:" + req.params.index);
//database.find({ index: req.params.index }, (err, docs) => {
//console.error("Error:" + err);
//console.log("RowValues:" + docs[0].rowValues);
//res.status(200).send(docs[0].rowValues);
//});
//});

app.put("/api/:name", function(req, res, next) {
  const newRow = req.body;
  console.log("In PUT route accessing name:" + req.params.name);
  console.log("req.body:" + newRow);
  res.send(newRow);
  database.update(
    { name: req.params.name },
    { $set: { rowValues: newRow } },
    { multi: false },
    function(err, numReplaced) {}
  );
  database.persistence.compactDatafile();
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
