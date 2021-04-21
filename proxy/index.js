const { getJobs } = require("./services");
const express = require("express");

const server = express();
server.listen(3000);
server.get("/jobs", (req, res) => {
  console.log("success");
});

server.get("/", (req, res) => {
  console.log("home route");
});

// getJobs("Python").then((PythonJobs) => console.log(PythonJobs[0]));
// getJobs("Java").then((JavaJobs) => console.log(JavaJobs[0]));

// const pythonJobs = await getJobs;
// const javaJobs = getJobs("Java");
