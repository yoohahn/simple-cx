# simple-cx

Just another className compiler. Used for some internal projects only.

Targeted for `ES2015` compatible browsers.

Usage:

```js
import cx from "simple-cx";

const MyComponent = ({ className, bold, foo, ...rest }) => {
  return (
    <div className={cx(className, "my-class--white", foo && "my-class--foo", { "my-class--bold": bold })} {...rest} />
  );
};

export default MyComponent;
```
