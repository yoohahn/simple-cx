function toClassNameString(val: string | { [key: string]: boolean } | undefined): string {
  let className = "";
  if (typeof val === "string") {
    className = val;
  } else if (typeof val === "object") {
    for (const key in val) {
      if (val[key]) {
        if (!!className) className += " ";
        className += key;
      }
    }
  }
  return className;
}

export default function _cx(...args: Array<string | { [key: string]: boolean } | false): string {
  let className = "";
  for (const item in args) {
    const val = args[item];
    const string = !!val && toClassNameString(val);
    if (string) {
      if (!!className) className += " ";
      className += string;
    }
  }
  return className;
}
