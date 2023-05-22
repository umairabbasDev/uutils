const { getTimeAgo, copyToClipboard } = require(".");

describe("getTimeAgo", () => {
  test('returns "just now" when the timestamp is in the present', () => {
    const timestamp = {
      seconds: Math.floor(Date.now() / 1000),
      nanoseconds: 0,
    };
    expect(getTimeAgo(timestamp)).toBe("just now");
  });

  test("returns the correct time ago for minutes", () => {
    const timestamp = {
      seconds: Math.floor(Date.now() / 1000) - 180,
      nanoseconds: 0,
    }; // 3 minutes ago
    expect(getTimeAgo(timestamp)).toBe("3 minutes ago");
  });

  test("returns the correct time ago for hours", () => {
    const timestamp = {
      seconds: Math.floor(Date.now() / 1000) - 7200,
      nanoseconds: 0,
    }; // 2 hours ago
    expect(getTimeAgo(timestamp)).toBe("2 hours ago");
  });

  test("returns the correct time ago for days", () => {
    const timestamp = {
      seconds: Math.floor(Date.now() / 1000) - 86400,
      nanoseconds: 0,
    }; // 1 day ago
    expect(getTimeAgo(timestamp)).toBe("1 day ago");
  });

  test("returns the correct time ago for weeks", () => {
    const timestamp = {
      seconds: Math.floor(Date.now() / 1000) - 604800,
      nanoseconds: 0,
    }; // 1 week ago
    expect(getTimeAgo(timestamp)).toBe("1 week ago");
  });

  test("returns the correct time ago for months", () => {
    const timestamp = {
      seconds: Math.floor(Date.now() / 1000) - 2592000,
      nanoseconds: 0,
    }; // 1 month ago
    expect(getTimeAgo(timestamp)).toBe("1 month ago");
  });

  test("returns the correct time ago for years", () => {
    const timestamp = {
      seconds: Math.floor(Date.now() / 1000) - 31536000,
      nanoseconds: 0,
    }; // 1 year ago
    expect(getTimeAgo(timestamp)).toBe("1 year ago");
  });
});
