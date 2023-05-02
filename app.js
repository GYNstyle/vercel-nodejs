const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "https://vercel-react-gyn.vercel.app",
  })
);
app.get("/", (req, res) => {
  res.send("Hello from GYN");
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
