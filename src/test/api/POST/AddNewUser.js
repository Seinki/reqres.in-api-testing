const request = require("supertest");
const { expect } = require("chai");
const server = require('../../../data/env');

describe("Post New User", () => {
  it("should add the new user data by returning its data value", function (done) {
    this.timeout(5000);

    request(server)
      .post("api/users")
      .send({
        name: "morpheus",
        job: "zion resident",
      })
      .then((response) => {
        console.log(response.status);
        console.log(response.body);
        expect(response.status).to.equal(201);

        done();
      })
      .catch((error) => done(error));
  });
});
