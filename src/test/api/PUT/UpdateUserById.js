const request = require("supertest");
const { expect } = require("chai");
const server = require("../../../data/env");

describe("Update User By Id", () => {
  it("should change user data by id", function (done) {
    this.timeout(5000);

    request(server)
      .put("api/users/2")
      .send({
        name: "morpheus",
        job: "leader",
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
