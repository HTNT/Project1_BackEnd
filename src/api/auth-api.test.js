// auth-api.test.js
import authAPI from "./auth-api";
// import { axiosClient } from "./axios-client";

// Mock axiosClient
// jest.mock("./axios-client", () => ({
//     axiosClient: {
//         post: jest.fn(),
//     },
// }));

describe("authAPI", () => {
    afterEach(() => {
        jest.clearAllMocks(); // Reset tất cả mock sau mỗi test
    });

    describe("login", () => {
        it("should call axiosClient.post with the correct URL and user data", async () => {
            const user = {
                email: "viettuekk123@gmail.com",
                password: "Viettuekk123",
            };
            const result = await authAPI.login(user);
            // console.log("response: " + JSON.stringify(result.data.message));
            expect(result.status).toBe(200); // hoặc status mà server trả về
            expect(result.data).toHaveProperty("message", "Login successfully"); // Kiểm tra phản hồi API
        });
    });

    describe("register", () => {
        it("should call axiosClient.post with the correct URL and user data", async () => {
            const user = {
                first_name: "dvt test fn",
                last_name: "dvt ln",
                email: "viettuekk123+test1@gmail.com",
                password: "Viettuekk123",
            };

            const result = await authAPI.register(user);
            // console.log(result);
            expect(result.status).toBe(201); // hoặc status mà server trả về
            expect(result.data).toHaveProperty("message", "User created successfully"); // Kiểm tra phản hồi API
        });
    });
});
