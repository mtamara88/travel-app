import { validate } from "../src/client/js/formValidation";

describe("Testing validation fucntion: checking if destination, start and end date are set", () => {
    test("Test validate()", async() => {

        window.alert = () => {}; // provide an empty implementation for window.alert

        const city = "";
        const startDate = "";
        const endDate = "";

        expect(validate(city)).toBe(false);
        expect(validate(startDate)).toBe(false);
        expect(validate(endDate)).toBe(false);


    });
});