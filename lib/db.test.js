import { afterEach, describe, expect, it } from "vitest";
import { hasDatabaseConfig } from "./db";

function setEnv(overrides) {
  process.env.DB_HOST = overrides.DB_HOST;
  process.env.DB_USER = overrides.DB_USER;
  process.env.DB_NAME = overrides.DB_NAME;
}

describe("hasDatabaseConfig", () => {
  afterEach(() => {
    delete process.env.DB_HOST;
    delete process.env.DB_USER;
    delete process.env.DB_NAME;
  });

  it("returns false when required values are missing", () => {
    setEnv({ DB_HOST: "localhost", DB_USER: "", DB_NAME: "skyserve_autopage" });
    expect(hasDatabaseConfig()).toBe(false);
  });

  it("returns true when host, user, and database are present", () => {
    setEnv({ DB_HOST: "localhost", DB_USER: "root", DB_NAME: "skyserve_autopage" });
    expect(hasDatabaseConfig()).toBe(true);
  });
});
