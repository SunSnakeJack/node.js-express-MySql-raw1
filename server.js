const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080 

app.get("/", (req, res) =>{
    res.json({message: "welcome to itd102 aplication"})
});

require("./app/routes/tutorial.routes.js")(app);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});