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


function App() {
  return (
    <div>
      <SimpleCard title="New visitor" subtitle="Triggers when somebody visits a specified page" src="assets/eye.svg" blockval="1" />
      <SimpleCard title="Action is performed" subtitle="Triggers when somebody performs a specified action" src="assets/action.svg" blockval="2" />
      <SimpleCard title="Time has passed" subtitle="Triggers after a specified amount of time" src="assets/time.svg" blockval="3"/>
      <SimpleCard title="Error prompt" subtitle="Triggers when a specified error happens" src="assets/error.svg" blockval="4" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('blocklist')
);

