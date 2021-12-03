import cx from "../index";

test("Should handle strings", () => {
  expect(cx("foo", "bar")).toBe("foo bar");
});

test("Should handle string, undefined, string", () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(cx("foo", undefined, "bar")).toBe("foo bar");
});

test("Should handle string, false && string, string", () => {
  expect(cx("foo", false && "bar", "baz")).toBe("foo baz");
});

test("Should handle string and object", () => {
  expect(
    cx("foo", {
      bar: true,
      baz: false,
      buz: true,
    })
  ).toBe("foo bar buz");
});

test("Should handle shorthands", () => {
  const baz = true;
  expect(cx("foo", { baz })).toBe("foo baz");
});
