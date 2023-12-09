const request = require("supertest");
const { expect } = require("chai");
const server = require("../../../data/env");

describe("Delete User By Id", () => {
  it("should return the deleted user data", function (done) {
    this.timeout(5000);

    request(server)
      .delete("api/users/2")
      .then((response) => {
        console.log(response.status);
        console.log(response.body);
        expect(response.status).to.equal(204);

        done();
      })
      .catch((error) => done(error));
  });
});
