import { handleSubmit } from "../src/client/js/handleSubmit";

describe('Given handleSubmit(), expect it to be defined', () => {
    test('It should be defined', async() => {
        expect(handleSubmit).toBeDefined();
    });
});

describe('Given handleSubmit(), expect it to be a function', () => {
    test('It should be a function', async() => {
        expect(typeof handleSubmit).toBe("function");
    });
});