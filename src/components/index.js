import { h, Component } from "preact";
import Locally from "./Locally";

export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      upc: null, 
      countryCode: !!window && 
        !!window.digitalData && 
        window.digitalData.websiteSettings.defaultCulture 
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.handleSizeClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleSizeClick);
  }

  handleSizeClick = (event) => {
    const isColourClicked = !!event.target.parentNode.childNodes[3] && 
      event.target.parentNode.childNodes[3].className.indexOf('product-colour__thumbnail-container') === 0;
    const isSizeClicked = event.target.className.indexOf('product-size__thumbnail-container') === 0;
    const sizeNodeArr = Array.prototype.slice.call(document.getElementById('size-thumbnails').childNodes).map(el => el.className);
    const isSizeSelected = !!sizeNodeArr.filter(el => !!el).find(el => el.indexOf('selected') >= 0)
    
    if (isSizeSelected && (isColourClicked || isSizeClicked)) {
      const sku = !!document && document.querySelector("#size-thumbnails .selected") && document.querySelector("#size-thumbnails .selected").getAttribute("data-sku");
      const productData = window.structuredData.find(item => item.sku === sku) || false;
      const upc = productData && parseInt(productData.gtin12);

      this.setState({ upc: upc });
    }
  }

  render() {
    return this.state.upc && (
      <Locally upc={this.state.upc} countryCode={this.state.country} root={"locally-widget-root"} />
    )
  }
}
