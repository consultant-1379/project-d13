import { definition } from '@eui/component';
import { LitComponent, html, nothing } from '@eui/lit-component';
import { Gauge as EDSGauge } from '@eds/vanilla/gauge/Gauge';
import style from './gaugeChart.css';

/**
 * @property {Object} data - chart data
 * @property {Number} value - current value displayed by chart.
 */
@definition('e-gauge-chart', {
  style,
  home: 'gauge-chart',
  props: {
    data: { type: Object, default: {} },
    value: { attribute: true, type: Number },
  },
})
export default class GaugeChart extends LitComponent {
  didUpgrade() {
    const gaugeDOM = this.shadowRoot.getElementById('eds-chart');
    this.gauge = new EDSGauge(gaugeDOM);
    this.gauge.init();
  }

  didChangeProps(changedProps) {
    if (changedProps.has('value')) {
      this.gauge.setValue(this.value);
    }
  }

  _limitColors = (data) => {
    let styleString = '';

    data.limits.forEach((limitColor) => {
      styleString = `${styleString} .${limitColor.color} { 
        fill: var(--${limitColor.color}); 
      }`;
    });
    return html` <style>${styleString}</style >`;
  }

  render() {
    return html`
      ${this.data.limits ? html`${this._limitColors(this.data)}` : nothing}
      <div class='eds-chart' id='eds-chart' data-settings=${JSON.stringify(this.data)}></div>
    `;
  }
}
GaugeChart.register();