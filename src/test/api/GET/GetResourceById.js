const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const server = require('../../../data/env');

describe("Get Resources List By Id", () => {
  it("should return a list of resource data by id", function (done) {
    this.timeout(5000);
    request(server)
      .get("api/unknown/2")
      .then((response) => {
        console.log(response.status);
        console.log(response.body);
        expect(response.status).to.equal(200);
        
        done();
      })
      .catch((error) => done(error));
  });
});
