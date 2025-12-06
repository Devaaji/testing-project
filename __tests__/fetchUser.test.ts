import { fetchUser } from "@/app/services/fetchUser";


global.fetch = jest.fn() as jest.Mock;

test("CASE 1: returns parsed user data", async () => {
  (fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve({ name: "John" })
  });

  const user = await fetchUser(1);
  expect(user.name).toBe("John");
});

test("CASE 2: throws error on bad response", async () => {
  (fetch as jest.Mock).mockResolvedValueOnce({
    ok: false,
    json: () => Promise.resolve({})
  });

  await expect(fetchUser(1)).rejects.toThrow("Failed to fetch user");
});

test("CASE 3: handles JSON parsing error", async () => {
  (fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: () => Promise.reject(new Error("Invalid JSON"))
  });

  await expect(fetchUser(1)).rejects.toThrow("Invalid JSON");
});
