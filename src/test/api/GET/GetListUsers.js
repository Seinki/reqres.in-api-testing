const request = require("supertest");
const { expect } = require("chai");
const server = require("../../../data/env");

describe("Get All Users", () => {
  it("should return list of all users", function (done) {
    this.timeout(5000);
    request(server).get("api/users?page=2")
    .then((response) => {
        console.log((response.status));
        console.log((response.body));
        expect(response.status).to.equal(200);

        done()
    })
    .catch((error) => done(error));
  });
});
