import { isFeedRole } from "../src/isFeedRole";

describe("isFeedRole", () => {
  it("should return true for feed role", () => {
    expect(isFeedRole("feed")).toBe(true);
  });

  it("should return false for non-feed roles", () => {
    expect(isFeedRole("article")).toBe(false);
    expect(isFeedRole("dialog")).toBe(false);
    expect(isFeedRole("button")).toBe(false);
    expect(isFeedRole("")).toBe(false);
  });

  it("should return false for undefined role", () => {
    expect(isFeedRole(undefined)).toBe(false);
  });
});
