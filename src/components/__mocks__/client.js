import { JSDOM } from "jsdom"
// const dom = new JSDOM()
const dom = new JSDOM('<!doctype html><html><body><div id="locally-widget-root"></div><div data-widget-host="locally-script-root"></div></body></html>')

global.document = dom.window.document
global.window = dom.window
// global.window.digitalData = {
//     websiteSettings: {
//     defaultCulture: "en-CA"
//     }
// };
