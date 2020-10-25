/* eslint-env node, jest */

import { h } from "preact";
import render from "preact-render-to-string";
import Locally from "./index";

describe("Locally Snapshot", () => {
  it("should render header with content", () => {
    // console.log(document.body);
    const tree = render(<Locally upc={"686487414242"} countryCode={"en-CA"} root={"locally-widget-root"} />);
    expect(tree).toMatchSnapshot();
  });
});
