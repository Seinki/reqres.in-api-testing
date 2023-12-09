const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const server = require("../../../data/env");

describe("Post Login", () => {
  it("should return the token of a valid user", function (done) {
    this.timeout(5000);
    request(server)
      .post("api/login")
      .send({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then((response) => {
        console.log(response.status);
        console.log(response.body);
        expect(response.status).to.equal(200);

        done();
      })
      .catch((error) => done(error));
  });
});
