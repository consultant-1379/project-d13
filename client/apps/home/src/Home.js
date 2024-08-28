/**
 * Home is defined as
 * `<e-home>`
 *
 * Imperatively create application
 * @example
 * let app = new Home();
 *
 * Declaratively create application
 * @example
 * <e-home></e-home>
 *
 * @extends {App}
 */
import { definition } from '@eui/component';
import { App, html } from '@eui/app';
import style from './home.css';
import '@eui/layout';
import { Button } from '@eui/base';

@definition('e-home', {
  style,
  props: {
    response: { attribute: false },
  },
})
export default class Home extends App {
  // Uncomment this block to add initialization code
  // constructor() {
  //   super();
  //   // initialize
  // }

  /**
  * Render the <e-home> app. This function is called each time a
  * prop changes.
  */
  render() {
    const { EUI } = window;
    return html`
    
    <eui-layout-v0-tile>
      <div slot="content">
        <h1>The Cloud Native Maturity Matrix Assessment</h1>
        <h2>Where are you in your Cloud Native journey?</h2>

        <p>
        <eui-base-v0-button primary href="/#cloud-maturity-assesment" fullwidth>
          Start Test
        </eui-base-v0-button>

      </div>
    </eui-layout-v0-tile>`;
  }
}

/**
 * Register the component as e-home.
 * Registration can be done at a later time and with a different name
 * Uncomment the below line to register the App if used outside the container
 */
// Home.register();
