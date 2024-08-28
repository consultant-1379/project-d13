/**
 * CloudMaturityAssesment is defined as
 * `<e-cloud-maturity-assesment>`
 *
 * Imperatively create application
 * @example
 * let app = new CloudMaturityAssesment();
 *
 * Declaratively create application
 * @example
 * <e-cloud-maturity-assesment></e-cloud-maturity-assesment>
 *
 * @extends {App}
 */
import { definition } from '@eui/component';
import { App, html } from '@eui/app';
import style from './cloudMaturityAssesment.css';
import '@eui/layout';
import { Checkbox } from '@eui/base';
import { RadioButton } from '@eui/base';
import { Button } from '@eui/base';

@definition('e-cloud-maturity-assesment', {
  style,
  props: {
    response: { attribute: false }
  },
  
})
export default class CloudMaturityAssesment extends App {
  // Uncomment this block to add initialization code
  // constructor() {
  //   super();
  //   // initialize
  // }

  /**
  * Render the <e-cloud-maturity-assesment> app. This function is called each time a
  * prop changes.
  */


  _createDict(){
    var dict= {
      "answer100": false, 
      "answer101": false,
      "answer102": false,
      "answer103": false,
      "answer104": false,
      "answer200": false, 
      "answer201": false,
      "answer202": false,
      "answer203": false,
      "answer204": false,
      "answer300": false, 
      "answer301": false,
      "answer302": false,
      "answer303": false,
      "answer304": false,
      "answer400": false, 
      "answer401": false,
      "answer402": false,
      "answer403": false,
      "answer404": false,
      "answer500": false, 
      "answer501": false,
      "answer502": false,
      "answer503": false,
      "answer504": false,
      "answer600": false, 
      "answer601": false,
      "answer602": false,
      "answer603": false,
      "answer604": false,
      "answer700": false, 
      "answer701": false,
      "answer702": false,
      "answer703": false,
      "answer704": false,
      "answer800": false, 
      "answer801": false,
      "answer802": false,
      "answer803": false,
      "answer804": false,
      "answer900": false, 
      "answer901": false,
      "answer902": false,
      "answer903": false,
      "answer904": false
    };
    return dict;

  }
 
  _populateList(qName, checked, results){
    results[qName]= checked;
    this._showCultureTile(results);
    this._showProdTile(results);
    this._showTeamTile(results);
    this._showProcessTile(results);
    this._showArchTile(results);
    this._showProdTile(results);
    this._showMainTile(results);
    this._showDeliveryTile(results);
    this._showProvTile(results);
    this._showInfraTile(results);
  }

  render() {
    const { EUI } = window;
    const results = this._createDict();
  
    return html`
    <div class="layout__dashboard">

      <eui-layout-v0-tile tile-title="Culture Lead Question" id="culture-lead-tile">
        <div slot="content">
          <h2> 
            Do you have a collaborative culture (e.g. big but not specific/highly detailed goals with no
            fixed delivery dates)
          </h2>
          <eui-base-v0-checkbox name="1.0" @change=${(event) => this._populateList("answer100", event.detail.checked, results) }>
            Yes ( If no, answer the culture question below)
          </eui-base-v0-checkbox>
        </div>
      </eui-layout-v0-tile>

      <eui-layout-v0-tile tile-title="Culture Question" id="culture-tile">
        <div slot="content">
          <h2>How individuals in your organisation interact, communicate, and work with each other</h2>
          <h3>In our company...</h3>
          <eui-base-v0-checkbox name="1.1" @change=${(event) => this._populateList("answer101", event.detail.checked, results)}>1. Project managers coordinate between all the different teams working on the same project,
            and the teams have highly specialised responsibilities. </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="1.2" @change=${(event) => this._populateList("answer102", event.detail.checked, results)}>2. Our development teams focus on achieving small,
            defined objectives quickly and then moving immediately to the next one. </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="1.3" @change=${(event) => this._populateList("answer103", event.detail.checked, results)}>3. A lot of up-front planning goes into documenting each
            step of a project before it even begins. </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="1.4" @change=${(event) => this._populateList("answer104", event.detail.checked, results)}>4. Each team contain a mix of members whose different areas of expertise cover the full
            spectrum of skills needed for crafting a releasable increment</eui-base-v0-checkbox>
        </div>
      </eui-layout-v0-tile>

      <eui-layout-v0-tile tile-title="Product/Service Design Lead Question" id="prod-lead-tile">
        <div slot="content">
          <h2> 
            Is you product and design data driven -
            that is they are rapidly prototyped, deployed and
            evaluated based on real customer usage before deciding on further development or retirement)
          </h2>
          <eui-base-v0-checkbox name="2.0" @change=${(event) => this._populateList("answer200", event.detail.checked, results) }>
            Yes ( If no, answer the product/service design question below)
          </eui-base-v0-checkbox>
        </div>
      </eui-layout-v0-tile>

      <eui-layout-v0-tile tile-title="Product/Service Design Question" id="prod-tile">
        <div slot="content">
          <h2>What you do, and how you go about doing it. How do decisisons get made in your organisation about new products to build,
            or services and features to offer - or how to improve existing ones?
          </h2>
          <h3>In our company...</h3>
          <eui-base-v0-checkbox name="2.1" @change=${(event) => this._populateList("answer201", event.detail.checked, results)}>1. We have product roadmaps spanning months or even
            years into the future. Our releases typically happen every
            six months to one year, sometimes even longer. </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="2.2" @change=${(event) => this._populateList("answer202", event.detail.checked, results)}>2. There is pressure to deliver features, fast, and releases
            happen on a regular planned basis. </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="2.3" @change=${(event) => this._populateList("answer203", event.detail.checked, results)}>3. We release large sets of related features all at once as
            comprehensive updates.  </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="2.4" @change=${(event) => this._populateList("answer204", event.detail.checked, results)}>4. Our releases are usually small-scale iterative changes to
            existing features/services. </eui-base-v0-checkbox>

        </div>
      </eui-layout-v0-tile>

      <eui-layout-v0-tile tile-title="Team Lead Question" id="team-lead-tile">
        <div slot="content">
          <h2> 
            Are teams Devops teams that is self contained teams responsible
            for all development and
            deployment to production and production is monitored by SRE teams?
          </h2>
          <eui-base-v0-checkbox name="3.0" @change=${(event) => this._populateList("answer300", event.detail.checked, results) }>
            Yes ( If no, answer the team question below)
          </eui-base-v0-checkbox>
        </div>
      </eui-layout-v0-tile>

      <eui-layout-v0-tile tile-title="Team question" id="team-tile">
        <div slot="content">
          <h2>How do responsibilites, communication, and collaboration work between teams in your organisation?
          </h2>
          <h3>In our company...</h3>
          <eui-base-v0-checkbox name="3.1" @change=${(event) => this._populateList("answer301", event.detail.checked, results)}>1. All decisions are made by managers, and teams must
            seek permission before changing any part of the project
            plan, no matter how small. </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="3.2" @change=${(event) => this._populateList("answer302", event.detail.checked, results)}>2. Applications are developed as several large components,
            with one team per component fully and vertically responsible for the build. </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="3.3" @change=${(event) => this._populateList("answer303", event.detail.checked, results)}>3. We have separate teams of specialists to handle different
            areas: design, architecture, security, testing, etc. When our team's piece of a project is finished,
            we hand it off to the next team. </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="3.4" @change=${(event) => this._populateList("answer304", event.detail.checked, results)}>4. Our teams are mixed: We have developers, QA/testing, someone with server experience,
            etc. all in one group. We don't talk to other teams very much since our teams are
            meant to be self-sufficient and independent. </eui-base-v0-checkbox>

        </div>
      </eui-layout-v0-tile>

      <eui-layout-v0-tile tile-title="Process Lead Question" id="process-lead-tile">
        <div slot="content">
          <h2> 
          Do you use research and experimentation techniques for large and complex problems
          -
          using lots of proof of concepts to compare options, using Kanban to clarify the project then Agile
          methods like Scrum once problem is well understood?
          </h2>
          <eui-base-v0-checkbox name="4.0" @change=${(event) => this._populateList("answer400", event.detail.checked, results) }>
            Yes ( If no, answer the process question below)
          </eui-base-v0-checkbox>
        </div>
      </eui-layout-v0-tile>

      <eui-layout-v0-tile tile-title="Process Question" id="process-tile" >
        <div slot="content">
          <h2>How do you plan and execute work?
          </h2>
          <h3>In our company...</h3>
          <eui-base-v0-checkbox name="4.1" @change=${(event) => this._populateList("answer401", event.detail.checked, results)}>1. We do all our planning up front, and then hand off to
            teams for execution. Managers handle the collaboration
            and communication between our teams  </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="4.2" @change=${(event) => this._populateList("answer402", event.detail.checked, results)}>2. A team will work on one small, defined project and deliver it in two to four weeks.
            If a new feature request comes in the middle of a delivery cycle, we may or may not be able
            to add it in. </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="4.3" @change=${(event) => this._populateList("answer403", event.detail.checked, results)}>3. If a new feature request comes in the middle of a delivery
            cycle, we have to wait for the next cycle to plan for and incorporate it.  </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="4.4" @change=${(event) => this._populateList("answer404", event.detail.checked, results)}>4. If we can't coordinate or fix an issue on the last day or two
            of a production cycle, we can't ship—so when a bug or some other problem pops up it's hard to do anything more
            than a quick fix.</eui-base-v0-checkbox>

        </div>
      </eui-layout-v0-tile>

      <eui-layout-v0-tile tile-title="Architecture Lead Question" id="arch-lead-tile">
        <div slot="content">
          <h2> 
            Do you have a microprocessor architecture built from independently deployable services?
          </h2>
          <eui-base-v0-checkbox name="5.0" @change=${(event) => this._populateList("answer500", event.detail.checked, results) }>
            Yes ( If no, answer the architecture question below)
          </eui-base-v0-checkbox>
        </div>
      </eui-layout-v0-tile>

      <eui-layout-v0-tile tile-title="Architecture Question" id="arch-tile">
        <div slot="content">
          <h2>What is the overall structure of your technology and systems?
          </h2>
          <h3>In our company...</h3>
          <eui-base-v0-checkbox name="5.1" @change=${(event) => this._populateList("answer501", event.detail.checked, results)}>1. Our system is very big. Few people understand the
            whole thing. We fear the domino effect: If you change something, you have to be very careful because it could
            break something else. </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="5.2" @change=${(event) => this._populateList("answer502", event.detail.checked, results)}>2. Our application(s) is(are) divided into components,
            probably no more than five or six, communicating through networking. </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="5.3" @change=${(event) => this._populateList("answer503", event.detail.checked, results)}>3. When we deliver, everything is delivered together, all
            ready on the same day and at a uniformly high level of quality  </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="5.4" @change=${(event) => this._populateList("answer504", event.detail.checked, results)}>4. The scope of an app in development is defined by
            the deployment schedule. Each feature or piece of functionality is
            broken down into deliverable chunks that fit into the schedule. </eui-base-v0-checkbox>

        </div>
      </eui-layout-v0-tile>

      <eui-layout-v0-tile tile-title="Maintenance Lead Question" id="main-lead-tile">
        <div slot="content">
          <h2> 
            Does your system collect metrics, alerts tracing and logging to provide a view of the running
            system and try to keep itself alive through self healing if things begin to deteriorate?
          </h2>
          <eui-base-v0-checkbox name="6.0" @change=${(event) => this._populateList("answer600", event.detail.checked, results) }>
            Yes ( If no, answer the maintenance question below)
          </eui-base-v0-checkbox>
        </div>
      </eui-layout-v0-tile>

      <eui-layout-v0-tile tile-title="Maintenance Question" id="main-tile">
        <div slot="content">
          <h2>How does your organisation deploy software and run it in production?
          </h2>
          <h3>In our company...</h3>
          <eui-base-v0-checkbox name="6.1" @change=${(event) => this._populateList("answer601", event.detail.checked, results)}>1. We have some simple automation, like scripts, for alerting
            large-scale issues and outages in the field. We find out about many smaller problems from user reports.  </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="6.2" @change=${(event) => this._populateList("answer602", event.detail.checked, results)}>2. Our systems have full and continuous monitoring, and our Ops team spends
            lots of time checking on alerts. A lot of
            time, our system alerts turn out to be nothing. </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="6.3" @change=${(event) => this._populateList("answer603", event.detail.checked, results)}>3. When problems arise, we have to open each server to understand what happened
            because we don't have central logs or tracing. Then we fix it manually: someone from Operations logs into a production
            server and follows a preset procedure.  </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="6.4" @change=${(event) => this._populateList("answer604", event.detail.checked, results)}>4. Some of our system update processes are fully automated
            and patches can be applied quickly—but a human still has to initialise the process. </eui-base-v0-checkbox>

        </div>
      </eui-layout-v0-tile>

      <eui-layout-v0-tile tile-title="Delivery Lead Question" id="delivery-lead-tile">
        <div slot="content">
          <h2> 
          Do you deliver multiple times a day your releasable software?
          </h2>
          <eui-base-v0-checkbox name="7.0" @change=${(event) => this._populateList("answer700", event.detail.checked, results) }>
            Yes ( If no, answer the delivery question below)
          </eui-base-v0-checkbox>
        </div>
      </eui-layout-v0-tile>

      <eui-layout-v0-tile tile-title="Delivery Question" id="delivery-tile">
        <div slot="content">
          <h2>How does software progress from your development teams to running live in production?
          </h2>
          <h3>In our company...</h3>
          <eui-base-v0-checkbox name="7.1" @change=${(event) => this._populateList("answer701", event.detail.checked, results)}>1. We do 'big bang' releases that roll lots of changes into
            one new version, every six to 12 months. A lot of up-front planning goes into our next release before any actual
            development begins.  </eui-base-v0-checkbox> <p>
          <eui-base-v0-checkbox name="7.2" @change=${(event) => this._populateList("answer702", event.detail.checked, results)}>2. Our delivery process includes some test automation
            and automated build, but outside of final integration. In an emergency, we can make manual updates to the
            production codebase.  </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="7.3" @change=${(event) => this._populateList("answer703", event.detail.checked, results)}>3. We don't like to make changes to our production code,
            even emergency ones, because there are so many dependencies. Change is risky. Once we release a software
            version all changes have to wait for the next version roll out  </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="7.4" @change=${(event) => this._populateList("answer704", event.detail.checked, results)}>4. New functionality requests typically can be
            accommodated within a few weeks, if they are urgent. </eui-base-v0-checkbox>

        </div>
      </eui-layout-v0-tile>

      <eui-layout-v0-tile tile-title="Provisioning Lead Question" id="prov-lead-tile">
        <div slot="content">
          <h2> 
            Do you run on Kubernetes?
          </h2>
          <eui-base-v0-checkbox name="8.0" @change=${(event) => this._populateList("answer800", event.detail.checked, results) }>
            Yes ( If no, answer the provisioning question below)
          </eui-base-v0-checkbox>
        </div>
      </eui-layout-v0-tile>

      <eui-layout-v0-tile tile-title="Provisioning Question" id="prov-tile">
        <div slot="content">
          <h2>How does your organisation create and then control new infrastructure? How quickly can you deploy?
          </h2>
          <h3>In our company...</h3>
          <eui-base-v0-checkbox name="8.1" @change=${(event) => this._populateList("answer801", event.detail.checked, results)}>1. Operations team is in charge of provisioning, period. You have to write a
            ticket to provision a machine—engineers can't self-service.  </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="8.2" @change=${(event) => this._populateList("answer802", event.detail.checked, results)}>2. A machine can be provisioned (possibly even autoprovisioned) in hours, or
            maybe a day or two, and the process is fully automated by Ops. </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="8.3" @change=${(event) => this._populateList("answer803", event.detail.checked, results)}>3. Developers write applications, and specify what they
            will need to run successfully in production (OS, libraries, dependent tools). The Ops team manually configures the
            production machines to meet the machine dependencies the Dev team specified.  </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="8.4" @change=${(event) => this._populateList("answer804", event.detail.checked, results)}>4. Provisioning is a mix of automation and manual work. Any task taking longer than a week
            to provision to VM breaks the production cycle, so is a nonstarter. </eui-base-v0-checkbox>

        </div>
      </eui-layout-v0-tile>

      <eui-layout-v0-tile tile-title="Infrastructure Lead Question" id="infra-lead-tile">
        <div slot="content">
          <h2> 
            Do you deploy your software in containers?
          </h2>
          <eui-base-v0-checkbox name="9.0" @change=${(event) => this._populateList("answer900", event.detail.checked, results) }>
            Yes ( If no, answer the infrastructure question below)
          </eui-base-v0-checkbox>
        </div>
      </eui-layout-v0-tile>

      <eui-layout-v0-tile tile-title="Infrastructure Question" id="infra-tile">
        <div slot="content">
          <h2>Your Infrastructure describes the physical servers or instances that your production environment consists of:
            what they are, where they are, and how they are managed.
          </h2>
          <h3>In our company...</h3>
          <eui-base-v0-checkbox name="9.1" @change=${(event) => this._populateList("answer901", event.detail.checked, results)}>1. We have multiple physical servers in our own private data center
            (either on premises or co-located). If one of our servers goes down, we have to manually provision its replacement.  </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="9.2" @change=${(event) => this._populateList("answer902", event.detail.checked, results)}>2. We don't use physical servers—we have VMs. We also
            have some instances in the cloud, which we manage manually.</eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="9.3" @change=${(event) => this._populateList("answer903", event.detail.checked, results)}>3. A data centre failure is just about the worst disaster we can imagine.  </eui-base-v0-checkbox><p>
          <eui-base-v0-checkbox name="9.4" @change=${(event) => this._populateList("answer904", event.detail.checked, results)}>4. Provisioning infrastructure is a mix of automation and manual work,
            so a new VM can take a couple of days to set up. </eui-base-v0-checkbox>

        </div>
      </eui-layout-v0-tile>

      <div id="submitButton">
        
        <eui-base-v0-button primary @click="${(event) => this._sendResults(results)}" href="/#results">
          Submit
        </eui-base-v0-button>
        
            </div>
    </div>
    `;
  }

    _sendResults(results){
      let data = results;
      fetch('http://localhost:8080/data', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }).then(res => {
        console.log("Request complete! response:", res);
      });
    }

    _showCultureTile(results){
      let data = results;
      
      if(data.answer100 == true) {
        const tile = this.shadowRoot.querySelectorAll('#culture-tile');
        for (let i = 0; i < tile.length; i += 1) {
          tile[i].hidden = !tile[i].maximize;
        }
        this.shadowRoot.querySelector('.layout__dashboard').classList.add('layout__dashboard--fullscreen');
      }
    
      else if(data.answer100 == false){
        const tile = this.shadowRoot.querySelectorAll('#culture-tile');
        for (let i = 0; i < tile.length; i += 1) {
          tile[i].hidden = false;
        }
    
      this.shadowRoot.querySelector('.layout__dashboard').classList.remove('layout__dashboard--fullscreen');
      }
    }

    _showProdTile(results){
      let data = results;
    
      if(data.answer200 == true) {
        const tile = this.shadowRoot.querySelectorAll('#prod-tile');
        for (let i = 0; i < tile.length; i += 1) {
          tile[i].hidden = !tile[i].maximize;
        }
        this.shadowRoot.querySelector('.layout__dashboard').classList.add('layout__dashboard--fullscreen');
      }
    
      else if(data.answer200 == false){
        const tile = this.shadowRoot.querySelectorAll('#prod-tile');
        for (let i = 0; i < tile.length; i += 1) {
          tile[i].hidden = false;
        }
    
      this.shadowRoot.querySelector('.layout__dashboard').classList.remove('layout__dashboard--fullscreen');
      }
    }

    _showTeamTile(results){
      let data = results;
      
      if(data.answer300 == true) {
        const tile = this.shadowRoot.querySelectorAll('#team-tile');
        for (let i = 0; i < tile.length; i += 1) {
          tile[i].hidden = !tile[i].maximize;
        }
        this.shadowRoot.querySelector('.layout__dashboard').classList.add('layout__dashboard--fullscreen');
      }
    
      else if(data.answer300 == false){
        const tile = this.shadowRoot.querySelectorAll('#team-tile');
        for (let i = 0; i < tile.length; i += 1) {
          tile[i].hidden = false;
        }
    
      this.shadowRoot.querySelector('.layout__dashboard').classList.remove('layout__dashboard--fullscreen');
      }
    }

    _showProcessTile(results){
      let data = results;
     
      if(data.answer400 == true) {
        const tile = this.shadowRoot.querySelectorAll('#process-tile');
        for (let i = 0; i < tile.length; i += 1) {
          tile[i].hidden = !tile[i].maximize;
        }
        this.shadowRoot.querySelector('.layout__dashboard').classList.add('layout__dashboard--fullscreen');
      }
    
      else if(data.answer400 == false){
        const tile = this.shadowRoot.querySelectorAll('#process-tile');
        for (let i = 0; i < tile.length; i += 1) {
          tile[i].hidden = false;
        }
    
      this.shadowRoot.querySelector('.layout__dashboard').classList.remove('layout__dashboard--fullscreen');
      }
    }

    _showArchTile(results){
      let data = results;
      
      if(data.answer500 == true) {
        const tile = this.shadowRoot.querySelectorAll('#arch-tile');
        for (let i = 0; i < tile.length; i += 1) {
          tile[i].hidden = !tile[i].maximize;
        }
        this.shadowRoot.querySelector('.layout__dashboard').classList.add('layout__dashboard--fullscreen');
      }
    
      else if(data.answer500 == false){
        const tile = this.shadowRoot.querySelectorAll('#arch-tile');
        for (let i = 0; i < tile.length; i += 1) {
          tile[i].hidden = false;
        }
    
      this.shadowRoot.querySelector('.layout__dashboard').classList.remove('layout__dashboard--fullscreen');
      }
    }

    _showMainTile(results){
      let data = results;
      
      if(data.answer600 == true) {
        const tile = this.shadowRoot.querySelectorAll('#main-tile');
        for (let i = 0; i < tile.length; i += 1) {
          tile[i].hidden = !tile[i].maximize;
        }
        this.shadowRoot.querySelector('.layout__dashboard').classList.add('layout__dashboard--fullscreen');
      }
    
      else if(data.answer600 == false){
        const tile = this.shadowRoot.querySelectorAll('#main-tile');
        for (let i = 0; i < tile.length; i += 1) {
          tile[i].hidden = false;
        }
    
      this.shadowRoot.querySelector('.layout__dashboard').classList.remove('layout__dashboard--fullscreen');
      }
    }

    _showDeliveryTile(results){
      let data = results;

      if(data.answer700 == true) {
        const tile = this.shadowRoot.querySelectorAll('#delivery-tile');
        for (let i = 0; i < tile.length; i += 1) {
          tile[i].hidden = !tile[i].maximize;
        }
        this.shadowRoot.querySelector('.layout__dashboard').classList.add('layout__dashboard--fullscreen');
      }
    
      else if(data.answer700 == false){
        const tile = this.shadowRoot.querySelectorAll('#delivery-tile');
        for (let i = 0; i < tile.length; i += 1) {
          tile[i].hidden = false;
        }
    
      this.shadowRoot.querySelector('.layout__dashboard').classList.remove('layout__dashboard--fullscreen');
      }
    }

    _showProvTile(results){
      let data = results;
   
      if(data.answer800 == true) {
        const tile = this.shadowRoot.querySelectorAll('#prov-tile');
        for (let i = 0; i < tile.length; i += 1) {
          tile[i].hidden = !tile[i].maximize;
        }
        this.shadowRoot.querySelector('.layout__dashboard').classList.add('layout__dashboard--fullscreen');
      }
    
      else if(data.answer800 == false){
        const tile = this.shadowRoot.querySelectorAll('#prov-tile');
        for (let i = 0; i < tile.length; i += 1) {
          tile[i].hidden = false;
        }
    
      this.shadowRoot.querySelector('.layout__dashboard').classList.remove('layout__dashboard--fullscreen');
      }
    }

    _showInfraTile(results){
      let data = results;
     
      if(data.answer900 == true) {
        const tile = this.shadowRoot.querySelectorAll('#infra-tile');
        for (let i = 0; i < tile.length; i += 1) {
          tile[i].hidden = !tile[i].maximize;
        }
        this.shadowRoot.querySelector('.layout__dashboard').classList.add('layout__dashboard--fullscreen');
      }
    
      else if(data.answer900 == false){
        const tile = this.shadowRoot.querySelectorAll('#infra-tile');
        for (let i = 0; i < tile.length; i += 1) {
          tile[i].hidden = false;
        }
    
      this.shadowRoot.querySelector('.layout__dashboard').classList.remove('layout__dashboard--fullscreen');
      }
    }

}

/**
 * Register the component as e-cloud-maturity-assesment.
 * Registration can be done at a later time and with a different name
 * Uncomment the below line to register the App if used outside the container
 */
// CloudMaturityAssesment.register();
