const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectToMongo = require("./db");
const User = require("./models/User");
const Contact = require("./models/Contact");

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectToMongo();

app.listen(5000, () => {
  console.log("server started");
});

app.post("/test", async (req, res) => {
  const user = new User();
  user.fname = req.body.fname;
  user.lname = req.body.lname;
  user.email = req.body.email;
  user.phone = req.body.phone;
  user.course = req.body.course;
  user.password = req.body.password;
  const doc = await user.save();
  console.log(req.body);
  console.log(doc);
  if (doc.fname !== "" && doc.email !== "" && doc.password !== "") {
    res.json({ Status: true });
  } else {
    res.json({ Status: false });
  }
});

app.post("/cont", async (req, res) => {
  const contact = new Contact();
  contact.fname = req.body.fname;
  contact.lname = req.body.lname;
  contact.email = req.body.email;
  contact.phone = req.body.phone;
  contact.message = req.body.message;
  const doc = await contact.save();
  console.log(req.body);
  console.log(doc);
  if (doc.fname !== "" && doc.email !== "" && doc.message !== "") {
    res.json({ Status: true });
  } else {
    res.json({ Status: false });
  }
});

app.post("/auth", async (req, res) => {
  const UserEmail = req.body.email;
  const UserPassword = req.body.password;

  if (UserEmail === "admin123@gmail.com" && UserPassword === "admin123") {
    res.json({ status: "true", fname: "Admin", user: "Admin" });
  } else {
    const user = await User.findOne({
      $and: [{ email: UserEmail }, { password: UserPassword }],
    });
    console.log(user);
    if (user !== null) {
      res.status(200).json({
        status: "true",
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        phone: user.phone,
        course: user.course,
        user: "Student",
        id: user.UserEmail,
      });
    } else {
      console.log("sended false");
      res.send(false);
    }
  }
});

app.post("/student_profile", async (req, res) => {
  const UserEmail = req.body.email;
  const data = await User.findOne({
    email: UserEmail,
  });
  res.send(data);
});

// Update Employee API
app.post("/update", async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({ email: email });
  if (user !== null) {
    const data = await user.updateOne({
      fname: req.body.fname,
      lname: req.body.lname,
      course: req.body.course,
      phone: req.body.phone,
    });
    console.log(data);
    if (data !== null) {
      res.json({ status: true });
    } else {
      res.json({ status: false, reason: "Something went wrong" });
    }
  } else {
    res.json({ status: false, reason: "Student does not exist" });
  }
});

// password forgot by user API
app.post("/forgot", async (req, res) => {
  const email = req.body.email;
  const phone = req.body.phone;
  const user = await User.findOne({ email: email, phone: phone });
  if (user !== null) {
    const data = await user.updateOne({
      password: req.body.password,
    });
    console.log(data);
    if (data !== null) {
      res.json({ status: true });
    } else {
      res.json({ status: false, reason: "Something went wrong" });
    }
  } else {
    res.json({ status: false, reason: "Student does not exist" });
  }
});

// for find all students  data
app.get("/getUser", async (req, res) => {
  User.find()
    .sort({ _id: -1 })
    .then((user) => res.json(user))
    .catch((err) => res.json("Backend has some problem", err));
});
// for find all students  data
app.get("/getBcaUser", async (req, res) => {
  User.find({ course: "BCA" })
    .then((user) => res.json(user))
    .catch((err) => res.json("Backend has some problem", err));
});
// for find all students  data
app.get("/getBcomUser", async (req, res) => {
  User.find({ course: "B.COM" })
    .then((user) => res.json(user))
    .catch((err) => res.json("Backend has some problem", err));
});
// for find all students  data
app.get("/getBbaUser", async (req, res) => {
  User.find({ course: "BBA" })
    .then((user) => res.json(user))
    .catch((err) => res.json("Backend has some problem", err));
});

// for find all messages  data
app.get("/getUserMsg", async (req, res) => {
  Contact.find()
    .sort({ _id: -1 })
    .then((user) => res.json(user))
    .catch((err) => res.json("Backend has some problem", err));
});
// for find all messages  data
app.get("/getUserMsgNoti", async (req, res) => {
  Contact.find()
    .sort({ _id: -1 })
    .limit(7)
    .then((user) => res.json(user))
    .catch((err) => res.json("Backend has some problem", err));
});

// Delete Students API
app.post("/delete", async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({ email: email });
  const data = await user.deleteOne();
  if (data.email !== "") {
    res.json({ status: true, data: "Student Deleted" });
  } else {
    res.json({ status: false, reason: "No such Student found!" });
  }
});

// Delete All Message API

app.post("/msgdeleteall", async (req, res) => {
  const data = await Contact.deleteMany({});
  if (data !== "") {
    res.json({ status: true, data: "All Message Deleted" });
  } else {
    res.json({ status: false, reason: "No Message found!" });
  }
});

// Delete Message API
app.post("/msgdelete", async (req, res) => {
  const email = req.body.email;
  const user = await Contact.findOne({ email: email });
  const data = await user.deleteOne();
  if (data.email !== "") {
    res.json({ status: true, data: "Message Deleted" });
  } else {
    res.json({ status: false, reason: "No such Message found!" });
  }
});
