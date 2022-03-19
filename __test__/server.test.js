const request = require('supertest');

describe("Checking post endpoint", () => {
    test("Testing endpoint", async() => {
        const response = await request('http://localhost:8080').get('/');
        expect(response.statusCode).toBe(200);
    });
});