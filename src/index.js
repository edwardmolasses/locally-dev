import { h } from "preact";
import habitat from "preact-habitat";

import Widget from "./components";

let _habitat = habitat(Widget);

_habitat.render({
  selector: '[data-widget-host="locally-script-root"]',
  clean: true
});
