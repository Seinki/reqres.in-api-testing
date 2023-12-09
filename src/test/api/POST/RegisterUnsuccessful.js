const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const server = require("../../../data/env");

describe("Post Register With No Password", () => {
  it("should return an error message because there is no pswd data", function (done) {
    this.timeout(5000);
    request(server)
      .post("api/register")
      .send({
        email: "eve.holt@reqres.in",
      })
      .then((response) => {
        console.log(response.status);
        console.log(response.body);
        expect(response.status).to.equal(400);

        done();
      })
      .catch((error) => done(error));
  });
});
