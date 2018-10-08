const express = require("express"),
    path = require("path");


application = express();




application.use(express.static(__dirname + "/dist/frontend"));





// PathLocationStategy

application.get("*", function(request, response) {
    response.sendFile(path.join(__dirname + "/dist/frontend/index.html"));
});


application.listen(process.env.PORT || 8080);

console.log("Server listening");
