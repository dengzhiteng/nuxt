const Mock = require("mockjs");
const userData = Mock.mock({
  "list|1-10": [
    {
      "id|+1": 1,
      name: "@cname"
    }
  ]
});
Mock.mock("/user", /get/, userData);
