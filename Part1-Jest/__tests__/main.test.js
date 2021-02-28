const formatVolumeIconPath = require("../assets/scripts/main")

describe("Volume: ", () => {
    test("> 66", () => {
        expect(formatVolumeIconPath(67)).toMatch(/3/);
    })
    test("> 33", () => {
        expect(formatVolumeIconPath(34)).toMatch(/2/);
    })
    test("> 0", () => {
        expect(formatVolumeIconPath(1)).toMatch(/1/);
    })
    test("== 0", () => {
        expect(formatVolumeIconPath(0)).toMatch(/0/);
    })
});