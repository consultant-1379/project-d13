/**
 * Integration tests for <e-cloud-maturity-assesment>
 */
import { expect } from 'chai';
import CloudMaturityAssesment from '../CloudMaturityAssesment';
import {
  inShadow,
  injectHTMLElement,
} from '../../../../../test/utils';

describe('CloudMaturityAssesment Application Tests', () => {
    let container;
    let inject;
    before(() => {
      container = document.body.appendChild(document.createElement('div'));
      inject = injectHTMLElement.bind(null, container);
      window.EUI = undefined; // stub out the locale
      CloudMaturityAssesment.register();
    });

    after(() => {
      document.body.removeChild(container);
    });

    describe('Basic application setup', () => {
      it('should create a new <e-cloud-maturity-assesment>', async () => {
        const appUnderTest = await inject('<e-cloud-maturity-assesment></e-cloud-maturity-assesment>');
        // check shadow DOM
        const headingTag = inShadow(appUnderTest, 'h1');
        expect(headingTag.textContent, '"Your app markup goes here" was not found').to.equal('Your app markup goes here');
      });
    });
});
