const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const server = require('../../../data/env');

describe("Get Resource List Not Found", () => {
  it("should return missing resource data with status code 404", function (done) {
    this.timeout(5000);
    request(server)
      .get("api/users/23")
      .then((response) => {
        console.log(response.status);
        console.log(response.body);
        expect(response.status).to.equal(404);
        
        done();
      })
      .catch((error) => done(error));
  });
});
