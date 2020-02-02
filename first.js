'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#first');
ReactDOM.render(e(LikeButton), domContainer);


//example
function firstExampleName(userExample) {
  return userExample.firstName + "" + userExample.lastName;
}

const userExample = {
  firstName : 'Katty',
  lastName : 'Curly',
};

const elementExample = (
  <h1>Hello, {firstExampleName(userExample)}</h1>
);

ReactDOM.render(elementExample, document.getElementById('first'));



function addressName(nameExample) {
  return nameExample.address;
}

//second example
function workName(nameExample) {
  return nameExample.work;
}

const nameExample = {
  address: 'minsk',
  work: 'umanskaya',
};

const elName = (
  <section>I live in {addressName(nameExample)} and work in {workName(nameExample)}</section>
);

ReactDOM.render(elName, document.getElementById('first'));

function clock() {
  const element = (
    <div>
      <h1>Hello, dear!</h1>
      <h2>Its time {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('first'));
}
setInterval(clock, 1000);

//
function Hello(word) {
  return <p>Hello, {word.second}</p>
}

const element = <Hello second="Katty"/>;
ReactDOM.render(element, document.getElementById('first'));

function Names(yourName) {
  return <h1>Your name {yourName.name}</h1>
}

function PutYourName () {
  return (
    <div>
      <Names name = "Katty"/>
      <Names name = "Sara"/>
      <Names name = "Nikole"/>
    </div>
  )
}

ReactDOM.render(<PutYourName/>, document.getElementById('first'));
