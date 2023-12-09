const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const server = require("../../../data/env");

describe("Post Register", () => {
  it("should return the new id and token data", function (done) {
    this.timeout(5000);
    request(server)
      .post("api/register")
      .send({
        email: "eve.holt@reqres.in",
        password: "pistol",
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
