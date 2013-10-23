var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Models.user = Alloy.createModel("user", {
    name: "blah"
});

Alloy.createController("index");