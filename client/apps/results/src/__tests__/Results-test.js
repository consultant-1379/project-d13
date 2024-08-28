/**
 * Integration tests for <e-results>
 */
import { expect } from 'chai';
import Results from '../Results';
import {
  inShadow,
  injectHTMLElement,
} from '../../../../../test/utils';

describe('Results Application Tests', () => {
    let container;
    let inject;
    before(() => {
      container = document.body.appendChild(document.createElement('div'));
      inject = injectHTMLElement.bind(null, container);
      window.EUI = undefined; // stub out the locale
      Results.register();
    });

    after(() => {
      document.body.removeChild(container);
    });

    describe('Basic application setup', () => {
      it('should create a new <e-results>', async () => {
        const appUnderTest = await inject('<e-results></e-results>');
        // check shadow DOM
        const headingTag = inShadow(appUnderTest, 'h1');
        expect(headingTag.textContent, '"Your app markup goes here" was not found').to.equal('Your app markup goes here');
      });
    });
});
