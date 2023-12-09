const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const server = require('../../../data/env');

describe("Get Single User", () => {
  it("should return the one user by id", function (done) {
    this.timeout(5000);
    request(server)
      .get("api/users/2")
      .then((response) => {
        console.log(response.status);
        console.log(response.body);
        expect(response.status).to.equal(200);
        
        done();
      })
      .catch((error) => done(error));
  });
});
