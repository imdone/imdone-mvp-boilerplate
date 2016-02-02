var config = {
  prod: {
    keen: {
      projectId: "56b04f0fd2eaaa6e4cf6dbc8",
      writeKey: "78c6cf9e0b9b7c7f38feca8d6afb3f86692f6cf1a066dc6297f375b1b7adae5fc46712b2a1371f647e32c7d665fe097c953a0f169c40abc94f03c0c06934c2c18b4066c5e6a50e94e2d4a9456970ce2d6be3f08423c15784f9454f56d02a9aa9"
    }
  },

  dev: {
      keen: {
        projectId: "56b04f5b46f9a76bfe19bfdf",
        writeKey: "cba0560768bcde72d164cded35fb0518bc98b9fbb768a6d7b4df88576c96d3be59f786bb43e42b379af571669f5813970c5a6d2dc0af5c51c910315020b499d887370fcdf4d6289e451c02bec81056e1a7d80b965dbce9219e6fec4c2abaa555"
      }
  }
};

module.exports = /prod/i.test(process.env.NODE_ENV) ? config.prod : config.dev;
