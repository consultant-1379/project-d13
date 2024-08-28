import { definition } from '@eui/component';
import { App, html } from '@eui/app';
import style from './results.css';
import '@eui/layout';
import '@eui/table';
import 'whatwg-fetch';

@definition('e-results', {
  style,
  props: {
    gaugeOneData: { type: Object },
    gaugeOneValue: {type:Number},
    table1Brand1: {type: String, default: 'red'},
    table1Brand2: {type: String, default: 'red'},
    table1Brand3: {type: String, default: 'red'},
    table1Brand4: {type: String, default: 'red'},

    gaugeTwoData: { type: Object },
    gaugeTwoValue: {type:Number},
    table2Brand1: {type: String, default: 'red'},
    table2Brand2: {type: String, default: 'red'},
    table2Brand3: {type: String, default: 'red'},
    table2Brand4: {type: String, default: 'red'},

    gaugeThreeData: { type: Object },
    gaugeThreeValue: {type:Number},
    table3Brand1: {type: String, default: 'red'},
    table3Brand2: {type: String, default: 'red'},
    table3Brand3: {type: String, default: 'red'},
    table3Brand4: {type: String, default: 'red'},

    gaugeFourData: { type: Object },
    gaugeFourValue: {type:Number},
    table4Brand1: {type: String, default: 'red'},
    table4Brand2: {type: String, default: 'red'},
    table4Brand3: {type: String, default: 'red'},
    table4Brand4: {type: String, default: 'red'},

    gaugeFiveData: { type: Object },
    gaugeFiveValue: {type:Number},
    table5Brand1: {type: String, default: 'red'},
    table5Brand2: {type: String, default: 'red'},
    table5Brand3: {type: String, default: 'red'},
    table5Brand4: {type: String, default: 'red'},

    gaugeSixData: { type: Object },
    gaugeSixValue: {type:Number},
    table6Brand1: {type: String, default: 'red'},
    table6Brand2: {type: String, default: 'red'},
    table6Brand3: {type: String, default: 'red'},
    table6Brand4: {type: String, default: 'red'},

    gaugeSevenData: { type: Object },
    gaugeSevenValue: {type:Number},
    table7Brand1: {type: String, default: 'red'},
    table7Brand2: {type: String, default: 'red'},
    table7Brand3: {type: String, default: 'red'},
    table7Brand4: {type: String, default: 'red'},

    gaugeEightData: { type: Object },
    gaugeEightValue: {type:Number},
    table8Brand1: {type: String, default: 'red'},
    table8Brand2: {type: String, default: 'red'},
    table8Brand3: {type: String, default: 'red'},
    table8Brand4: {type: String, default: 'red'},

    gaugeNineData: { type: Object },
    gaugeNineValue: {type:Number},
    table9Brand1: {type: String, default: 'red'},
    table9Brand2: {type: String, default: 'red'},
    table9Brand3: {type: String, default: 'red'},
    table9Brand4: {type: String, default: 'red'},

    tableBrandRed: {type: String, default:'red'},
    tableBrandGreen: {type: String, default:'green'},
  },
})
export default class Results extends App {
  
  didUpgrade() {
    this.gaugeOneData = {
      value: this.gaugeOneValue,
      min: 0, max: 100,
      units: '%',
      size: 'large',
      limits: [
        { from: 0, to: 100, color: 'blue', label: 'Culture' },
      ],
    };
    this.gaugeTwoData = {
      value: this.gaugeTwoValue,
      min: 0, max: 100,
      units: '%',
      size: 'large',
      limits: [
        { from: 0, to: 100, color: 'blue', label: 'Culture' },
      ],
    };
    this.gaugeThreeData = {
      value: this.gaugeThreeValue,
      min: 0, max: 100,
      units: '%',
      size: 'large',
      limits: [
        { from: 0, to: 100, color: 'blue', label: 'Culture' },
      ],
    };
    this.gaugeFourData = {
      value: this.gaugeFourValue,
      min: 0, max: 100,
      units: '%',
      size: 'large',
      limits: [
        { from: 0, to: 100, color: 'blue', label: 'Culture' },
      ],
    };
    this.gaugeFiveData = {
      value: this.gaugeFiveValue,
      min: 0, max: 100,
      units: '%',
      size: 'large',
      limits: [
        { from: 0, to: 100, color: 'blue', label: 'Culture' },
      ],
    };
    this.gaugeSixData = {
      value: this.gaugeSixValue,
      min: 0, max: 100,
      units: '%',
      size: 'large',
      limits: [
        { from: 0, to: 100, color: 'blue', label: 'Culture' },
      ],
    };
    this.gaugeSevenData = {
      value: this.gaugeSevenValue,
      min: 0, max: 100,
      units: '%',
      size: 'large',
      limits: [
        { from: 0, to: 100, color: 'blue', label: 'Culture' },
      ],
    };
    this.gaugeEightData = {
      value: this.gaugeEightValue,
      min: 0, max: 100,
      units: '%',
      size: 'large',
      limits: [
        { from: 0, to: 100, color: 'blue', label: 'Culture' },
      ],
    };
    this.gaugeNineData = {
      value: this.gaugeNineValue,
      min: 0, max: 100,
      units: '%',
      size: 'large',
      limits: [
        { from: 0, to: 100, color: 'blue', label: 'Culture' },
      ],
    };
  }

  render() {

    if (this.gaugeOneValue >= 25 && this.gaugeOneValue <= 49){ 
      this.table1Brand1 = this.tableBrandGreen;
    }
    else if (this.gaugeOneValue >= 50 && this.gaugeOneValue <= 74){
      this.table1Brand1 = this.tableBrandGreen;
      this.table1Brand2 = this.tableBrandGreen;
    }
    else if (this.gaugeOneValue >= 75 && this.gaugeOneValue <= 99){
      this.table1Brand1 = this.tableBrandGreen;
      this.table1Brand2 = this.tableBrandGreen;
      this.table1Brand3 = this.tableBrandGreen;
    }
    else if (this.gaugeOneValue == 100){
      this.table1Brand1 = this.tableBrandGreen;
      this.table1Brand2 = this.tableBrandGreen;
      this.table1Brand3 = this.tableBrandGreen;
      this.table1Brand4 = this.tableBrandGreen;
    }

    if(this.gaugeTwoValue >= 25 && this.gaugeTwoValue <= 49){
      this.table2Brand1 = this.tableBrandGreen;
    }
    else if (this.gaugeTwoValue >= 50 && this.gaugeTwoValue <= 74){
      this.table2Brand1 = this.tableBrandGreen;
      this.table2Brand2 = this.tableBrandGreen;
    }
    else if (this.gaugeTwoValue >= 75 && this.gaugeTwoValue <= 99){
      this.table2Brand1 = this.tableBrandGreen;
      this.table2Brand2 = this.tableBrandGreen;
      this.table2Brand3 = this.tableBrandGreen;
    }
    else if (this.gaugeTwoValue == 100){
      this.table2Brand1 = this.tableBrandGreen;
      this.table2Brand2 = this.tableBrandGreen;
      this.table2Brand3 = this.tableBrandGreen;
      this.table2Brand4 = this.tableBrandGreen;
    }

    if(this.gaugeThreeValue >= 25 && this.gaugeThreeValue <= 49){
      this.table3Brand1 = this.tableBrandGreen;
    }
    else if (this.gaugeThreeValue >= 50 && this.gaugeThreeValue <= 74){
      this.table3Brand1 = this.tableBrandGreen;
      this.table3Brand2 = this.tableBrandGreen;
    }
    else if (this.gaugeThreeValue >= 75 && this.gaugeThreeValue <= 99){
      this.table3Brand1 = this.tableBrandGreen;
      this.table3Brand2 = this.tableBrandGreen;
      this.table3Brand3 = this.tableBrandGreen;
    }
    else if (this.gaugeThreeValue == 100){
      this.table3Brand1 = this.tableBrandGreen;
      this.table3Brand2 = this.tableBrandGreen;
      this.table3Brand3 = this.tableBrandGreen;
      this.table3Brand4 = this.tableBrandGreen;
    }

    if(this.gaugeFourValue >= 25 && this.gaugeFourValue <= 49){
      this.table4Brand1 = this.tableBrandGreen;
    }
    else if (this.gaugeFourValue >= 50 && this.gaugeFourValue <= 74){
      this.table4Brand1 = this.tableBrandGreen;
      this.table4Brand2 = this.tableBrandGreen;
    }
    else if (this.gaugeFourValue >= 75 && this.gaugeFourValue <= 99){
      this.table4Brand1 = this.tableBrandGreen;
      this.table4Brand2 = this.tableBrandGreen;
      this.table4Brand3 = this.tableBrandGreen;
    }
    else if (this.gaugeFourValue ==100){
      this.table4Brand1 = this.tableBrandGreen;
      this.table4Brand2 = this.tableBrandGreen;
      this.table4Brand3 = this.tableBrandGreen;
      this.table4Brand4 = this.tableBrandGreen;
    }

    if(this.gaugeFiveValue >= 25 && this.gaugeFiveValue <= 49){
      this.table5Brand1 = this.tableBrandGreen;
    }
    else if (this.gaugeFiveValue >= 50 && this.gaugeFiveValue <= 74){
      this.table5Brand1 = this.tableBrandGreen;
      this.table5Brand2 = this.tableBrandGreen;
    }
    else if (this.gaugeFiveValue >= 75 && this.gaugeFiveValue <= 99){
      this.table5Brand1 = this.tableBrandGreen;
      this.table5Brand2 = this.tableBrandGreen;
      this.table5Brand3 = this.tableBrandGreen;
    }
    else if (this.gaugeFiveValue == 100){
      this.table5Brand1 = this.tableBrandGreen;
      this.table5Brand2 = this.tableBrandGreen;
      this.table5Brand3 = this.tableBrandGreen;
      this.table5Brand4 = this.tableBrandGreen;
    }

    if(this.gaugeSixValue >= 25 && this.gaugeSixValue <= 49){
      this.table6Brand1 = this.tableBrandGreen;
    }
    else if (this.gaugeSixValue >= 50 && this.gaugeSixValue <= 74){
      this.table6Brand1 = this.tableBrandGreen;
      this.table6Brand2 = this.tableBrandGreen;
    }
    else if (this.gaugeSixValue >= 75 && this.gaugeSixValue <= 99){
      this.table6Brand1 = this.tableBrandGreen;
      this.table6Brand2 = this.tableBrandGreen;
      this.table6Brand3 = this.tableBrandGreen;
    }
    else if (this.gaugeSixValue == 100){
      this.table6Brand1 = this.tableBrandGreen;
      this.table6Brand2 = this.tableBrandGreen;
      this.table6Brand3 = this.tableBrandGreen;
      this.table6Brand4 = this.tableBrandGreen;
    }

    if(this.gaugeSevenValue >= 25 && this.gaugeSevenValue <= 49){
      this.table7Brand1 = this.tableBrandGreen;
    }
    else if (this.gaugeSevenValue >= 50 && this.gaugeSevenValue <= 74){
      this.table7Brand1 = this.tableBrandGreen;
      this.table7Brand2 = this.tableBrandGreen;
    }
    else if (this.gaugeSevenValue >= 75 && this.gaugeSevenValue <= 99){
      this.table7Brand1 = this.tableBrandGreen;
      this.table7Brand2 = this.tableBrandGreen;
      this.table7Brand3 = this.tableBrandGreen;
    }
    else if (this.gaugeSevenValue == 100){
      this.table7Brand1 = this.tableBrandGreen;
      this.table7Brand2 = this.tableBrandGreen;
      this.table7Brand3 = this.tableBrandGreen;
      this.table7Brand4 = this.tableBrandGreen;
    }

    if(this.gaugeEightValue >= 25 && this.gaugeEightValue <= 49){
      this.table8Brand1 = this.tableBrandGreen;
    }
    else if (this.gaugeEightValue >= 50 && this.gaugeEightValue <= 74){
      this.table8Brand1 = this.tableBrandGreen;
      this.table8Brand2 = this.tableBrandGreen;
    }
    else if (this.gaugeEightValue >= 75 && this.gaugeEightValue <= 99){
      this.table8Brand1 = this.tableBrandGreen;
      this.table8Brand2 = this.tableBrandGreen;
      this.table8Brand3 = this.tableBrandGreen;
    }
    else if (this.gaugeEightValue == 100){
      this.table8Brand1 = this.tableBrandGreen;
      this.table8Brand2 = this.tableBrandGreen;
      this.table8Brand3 = this.tableBrandGreen;
      this.table8Brand4 = this.tableBrandGreen;
    }
  
    if(this.gaugeNineValue >= 25 && this.gaugeNineValue <= 49){
      this.table9Brand1 = this.tableBrandGreen;
    }
    else if (this.gaugeNineValue >=50 && this.gaugeNineValue <=74){
      this.table9Brand1 = this.tableBrandGreen;
      this.table9Brand2 = this.tableBrandGreen;
    }
    else if (this.gaugeNineValue >=75 && this.gaugeNineValue <=99){
      this.table9Brand1 = this.tableBrandGreen;
      this.table9Brand2 = this.tableBrandGreen;
      this.table9Brand3 = this.tableBrandGreen;
    }
    else if (this.gaugeNineValue == 100){
      this.table9Brand1 = this.tableBrandGreen;
      this.table9Brand2 = this.tableBrandGreen;
      this.table9Brand3 = this.tableBrandGreen;
      this.table9Brand4 = this.tableBrandGreen;
    }
  
    fetch('http://localhost:8080/data')
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log(json);
      this.gaugeOneValue = json.result.culture;
      this.gaugeTwoValue = json.result.servDesign;
      this.gaugeThreeValue = json.result.team;
      this.gaugeFourValue = json.result.process;
      this.gaugeFiveValue = json.result.architecture;
      this.gaugeSixValue = json.result.maintenance;
      this.gaugeSevenValue = json.result.delivery;
      this.gaugeEightValue = json.result.provisioning;
      this.gaugeNineValue = json.result.infrastructure;

      this.shadowRoot.querySelector('#gauge-1').value = json.result.culture;      
      this.shadowRoot.querySelector('#gauge-2').value = json.result.servDesign;      
      this.shadowRoot.querySelector('#gauge-3').value = json.result.team;     
      this.shadowRoot.querySelector('#gauge-4').value = json.result.process;
      this.shadowRoot.querySelector('#gauge-5').value = json.result.architecture;
      this.shadowRoot.querySelector('#gauge-6').value = json.result.maintenance;
      this.shadowRoot.querySelector('#gauge-7').value = json.result.delivery;
      this.shadowRoot.querySelector('#gauge-8').value = json.result.provisioning;
      this.shadowRoot.querySelector('#gauge-9').value = json.result.infrastructure;

    }.bind(this)).catch(function(ex) {
      console.log('parsing failed', ex)
    })

    const columns1 = [
      { title: 'Stage', attribute: 'col1' },
      { title: 'Culture', attribute: 'col2' }
    ];
    const data1 = [
      { col1: 'Individualist', col2: '25%', colorBand: this.table1Brand1},
      { col1: 'Predictive', col2: '50%', colorBand: this.table1Brand2},
      { col1: 'Iterative', col2: '75%', colorBand: this.table1Brand3},
      { col1: 'Collaborative', col2: '100%', colorBand: this.table1Brand4},
    ];

    const columns2 = [
      { title: 'Stage', attribute: 'col1' },
      { title: 'Prod/Service Design', attribute: 'col2' }
    ];
    const data2 = [
      { col1: 'Arbitary', col2: '25%', colorBand: this.table2Brand1},
      { col1: 'Long-Term plan', col2: '50%', colorBand: this.table2Brand2},
      { col1: 'Feature driven', col2: '75%', colorBand: this.table2Brand3},
      { col1: 'Data driven', col2: '100%', colorBand: this.table2Brand4},
    ];

    const columns3 = [
      { title: 'Stage', attribute: 'col1' },
      { title: 'Team', attribute: 'col2' }
    ];
    const data3 = [
      { col1: 'No Organization, single contributor', col2: '25%', colorBand: this.table3Brand1},
      { col1: 'Hierarchy', col2: '50%', colorBand: this.table3Brand2},
      { col1: 'Cross-Functional teams', col2: '75%', colorBand: this.table3Brand3},
      { col1: 'DevOps/SRE', col2: '100%', colorBand: this.table3Brand4},
    ];

    const columns4 = [
      { title: 'Stage', attribute: 'col1' },
      { title: 'Process', attribute: 'col2' }
    ];
    const data4 = [
      { col1: 'Random', col2: '25%', colorBand: this.table4Brand1},
      { col1: 'Waterfall', col2: '50%', colorBand: this.table4Brand2},
      { col1: 'Agile (Scrum/Kanban)', col2: '75%', colorBand: this.table4Brand3},
      { col1: 'Design Thinking + Agile + Lean', col2: '100%', colorBand: this.table4Brand4},
    ];

    const columns5 = [
      { title: 'Stage', attribute: 'col1' },
      { title: 'Architecture', attribute: 'col2' }
    ];
    const data5 = [
      { col1: 'Emering from trail and error', col2: '25%', colorBand: this.table5Brand1},
      { col1: 'Tightly coupled monolith', col2: '50%', colorBand: this.table5Brand2},
      { col1: 'Client server', col2: '75%', colorBand: this.table5Brand3},
      { col1: 'Micro server', col2: '100%', colorBand: this.table5Brand4},
    ];

    const columns6 = [
      { title: 'Stage', attribute: 'col1' },
      { title: 'Maintainance', attribute: 'col2' }
    ];
    const data6 = [
      { col1: 'Respond to user Complaints', col2: '25%', colorBand: this.table6Brand1},
      { col1: 'Ad-hoc monitoring', col2: '50%', colorBand: this.table6Brand2},
      { col1: 'Alerting', col2: '75%', colorBand: this.table6Brand3},
      { col1: 'Full observability & self-healing', col2: '100%', colorBand: this.table6Brand4},
    ];

    const columns7 = [
      { title: 'Stage', attribute: 'col1' },
      { title: 'Delivery', attribute: 'col2' }
    ];
    const data7 = [
      { col1: 'Irrefular releases', col2: '25%', colorBand: this.table7Brand1},
      { col1: 'Periodic releases', col2: '50%', colorBand: this.table7Brand2},
      { col1: 'Continuous Integration', col2: '75%', colorBand: this.table7Brand3},
      { col1: 'Continuous Delivery', col2: '100%', colorBand: this.table7Brand4},
    ];

    const columns8 = [
      { title: 'Stage', attribute: 'col1' },
      { title: 'Provisioning', attribute: 'col2' }
    ];
    const data8 = [
      { col1: 'Manual', col2: '25%', colorBand: this.table8Brand1},
      { col1: 'Scripted', col2: '50%', colorBand: this.table8Brand2},
      { col1: 'Config. management (Puppet/Chef/Ansible)', col2: '75%', colorBand: this.table8Brand3},
      { col1: 'Orchestration (Kubernetes)', col2: '100%', colorBand: this.table8Brand4},
    ];

    const columns9 = [
      { title: 'Stage', attribute: 'col1' },
      { title: 'Infrastructure', attribute: 'col2' }
    ];
    const data9 = [
      { col1: 'Single server', col2: '25%', colorBand: this.table9Brand1},
      { col1: 'Multiple server', col2: '50%', colorBand: this.table9Brand2},
      { col1: 'VMS (pets)', col2: '75%', colorBand: this.table9Brand3},
      { col1: 'Containers/hybrid cloud (cattle)', col2: '100%', colorBand: this.table9Brand4},
    ];

    return html`
      <div class="layout__dashboard">
        <div class='grid'>
          <eui-layout-v0-tile tile-title='Culture' column=0>
              <e-gauge-chart slot='content' id='gauge-1' .data=${this.gaugeOneData}></e-gauge-chart>
          </eui-layout-v0-tile>
        </div>
        <eui-table-v0 expandedRowHeight .columns=${columns1} .data=${data1} column=0>
        </eui-table-v0>

        <div class='grid'>
          <eui-layout-v0-tile tile-title='Prod/Service Design' column=0>
              <e-gauge-chart slot='content' id='gauge-2' .data=${this.gaugeTwoData}></e-gauge-chart>
          </eui-layout-v0-tile>
        </div>
        <eui-table-v0 .columns=${columns2} .data=${data2} column=0>
        </eui-table-v0>

        <div class='grid'>
          <eui-layout-v0-tile tile-title='Team' column=0>
              <e-gauge-chart slot='content' id='gauge-3' .data=${this.gaugeThreeData}></e-gauge-chart>
          </eui-layout-v0-tile>
        </div>
        <eui-table-v0 .columns=${columns3} .data=${data3} column=0>
        </eui-table-v0>

        <div class='grid'>
          <eui-layout-v0-tile tile-title='Process' column=0>
              <e-gauge-chart slot='content' id='gauge-4' .data=${this.gaugeFourData}></e-gauge-chart>
          </eui-layout-v0-tile>
        </div>
        <eui-table-v0 .columns=${columns4} .data=${data4} column=0>
        </eui-table-v0>

        <div class='grid'>
          <eui-layout-v0-tile tile-title='Architecture' column=0>
              <e-gauge-chart slot='content' id='gauge-5' .data=${this.gaugeFiveData}></e-gauge-chart>
          </eui-layout-v0-tile>
        </div>
        <eui-table-v0 .columns=${columns5} .data=${data5} column=0>
        </eui-table-v0>

        <div class='grid'>
          <eui-layout-v0-tile tile-title='Maintenence' column=0>
              <e-gauge-chart slot='content' id='gauge-6' .data=${this.gaugeSixData}></e-gauge-chart>
          </eui-layout-v0-tile>
        </div>
        <eui-table-v0 .columns=${columns6} .data=${data6} column=0>
        </eui-table-v0>

        <div class='grid'>
          <eui-layout-v0-tile tile-title='Delivery' column=0>
              <e-gauge-chart slot='content' id='gauge-7' .data=${this.gaugeSevenData}></e-gauge-chart>
          </eui-layout-v0-tile>
        </div>
        <eui-table-v0 .columns=${columns7} .data=${data7} column=0>
        </eui-table-v0>

        <div class='grid'>
          <eui-layout-v0-tile tile-title='Provisioning' column=0>
              <e-gauge-chart slot='content' id='gauge-8' .data=${this.gaugeEightData}></e-gauge-chart>
          </eui-layout-v0-tile>
        </div>
        <eui-table-v0 .columns=${columns8} .data=${data8} column=0>
        </eui-table-v0>

        <div class='grid'>
          <eui-layout-v0-tile tile-title='Infrastructure' column=0>
              <e-gauge-chart slot='content' id='gauge-9' .data=${this.gaugeNineData}></e-gauge-chart>
          </eui-layout-v0-tile>
        </div>
        <eui-table-v0 .columns=${columns9} .data=${data9} column=0>
        </eui-table-v0>

      </div>

      <eui-layout-v0-tile>
        <div slot='content' >
                <div class='return'>
                    <eui-base-v0-button primary @click="${(event) => this._backToHome(event)}">
                      Return To Home
                    </eui-base-v0-button>
                </div>
              </div>
      </eui-layout-v0-tile>

    `;

  }

  _backToHome(){
      window.location.href="/#home";
      window.location.reload();
    }
}

