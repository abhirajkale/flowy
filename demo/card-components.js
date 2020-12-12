'use strict';
// import React from 'react';
// import ReactDOM from 'react-dom';

const e = React.createElement;

class SimpleCard extends React.Component {
  render() {
    return (
      <div className="blockelem create-flowy noselect" >
        <input type="hidden" name='blockelemtype' className="blockelemtype" value={this.props.blockval} />
        <div className="grabme">
          <img src="assets/grabme.svg" />
        </div>
        <div className="blockin">
            <div className="blockico">
                <span></span>
                <img src={this.props.src} />
            </div>
            <div className="blocktext">
                <p className="blocktitle">{this.props.title}</p>
                <p className="blockdesc">{this.props.subtitle}</p>
            </div>
        </div>
      </div>
    );
  }
}

class FlowCard extends React.Component {
  render() {
    return (
      <>
      <div className='blockyleft'>
        <img src={this.props.imgsrc} />
        <p className='blockyname'>{this.props.title}</p>
      </div>
      <div className='blockyright'>
        <img src='assets/more.svg' />
      </div>
      <div className='blockydiv' />
      <div className='blockyinfo'>{this.props.subtitle}</div>
      </>
    );
  }
}

function ActionsCards() {
  return (
    <div>
      <SimpleCard title="New database entry" subtitle="Adds a new entry to a specified database" src="assets/database.svg" blockval="5" />
      <SimpleCard title="Update database" subtitle="Edits and deletes database entries and properties" src="assets/database.svg" blockval="6" />
      <SimpleCard title="Perform an action" subtitle="Performs or edits a specified action" src="assets/action.svg" blockval="7"/>
      <SimpleCard title="Make a tweet" subtitle="Makes a tweet with a specified query" src="assets/twitter.svg" blockval="8" />
    </div>
  );
}


function TriggerCards() {
  return (
    <div>
      <SimpleCard title="New visitor" subtitle="Triggers when somebody visits a specified page" src="assets/eye.svg" blockval="1" />
      <SimpleCard title="Action is performed" subtitle="Triggers when somebody performs a specified action" src="assets/action.svg" blockval="2" />
      <SimpleCard title="Time has passed" subtitle="Triggers after a specified amount of time" src="assets/time.svg" blockval="3"/>
      <SimpleCard title="Error prompt" subtitle="Triggers when a specified error happens" src="assets/error.svg" blockval="4" />
    </div>
  );
}

function LoggerCards() {
  return (
    <div>
      <SimpleCard title="Add new log entry" subtitle="Adds a new log entry to this project" src="assets/log.svg" blockval="9" />
      <SimpleCard title="Update logs" subtitle="Edits and deletes log entries in this project" src="assets/log.svg" blockval="10" />
      <SimpleCard title="Prompt an error" subtitle="Triggers a specified error" src="assets/error.svg" blockval="11"/>
    </div>
  );
}


ReactDOM.render(
  <TriggerCards />,
  document.getElementById('blocklist')
);

