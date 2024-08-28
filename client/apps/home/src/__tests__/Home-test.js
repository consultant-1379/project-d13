/**
 * Integration tests for <e-home>
 */
import { expect } from 'chai';
import Home from '../Home';
import {
  inShadow,
  injectHTMLElement,
} from '../../../../../test/utils';

describe('Home Application Tests', () => {
    let container;
    let inject;
    before(() => {
      container = document.body.appendChild(document.createElement('div'));
      inject = injectHTMLElement.bind(null, container);
      window.EUI = undefined; // stub out the locale
      Home.register();
    });

    after(() => {
      document.body.removeChild(container);
    });

    describe('Basic application setup', () => {
      it('should create a new <e-home>', async () => {
        const appUnderTest = await inject('<e-home></e-home>');
        // check shadow DOM
        const headingTag = inShadow(appUnderTest, 'h1');
        expect(headingTag.textContent, '"Your app markup goes here" was not found').to.equal('Your app markup goes here');
      });
    });
});
