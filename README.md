# Flowy with React frontend

![alt text](https://github.com/abhirajkale/flowy/blob/master/demo/assets/flowly-w-react.png?raw=true)

#### How to run:
```cd demo && python3 -m http.server 8000```
#### Go to:
http://localhost:8000

#### Edited files:
* Frontend: demo/index.html
* Main JS:  demo/main.js
* React components: demo/card-components.js

#### Example Usage:
```
ReactDOM.render(
  <TriggerCards />,
  document.getElementById('blocklist')
);
```
```
ReactDOM.render(React.createElement(FlowCard, {
              title: "New visitor",
              subtitle: "When a new visitor goes to Site 1",
              imgsrc: "assets/timeblue.svg"
            }), drag);
```
```
<SimpleCard title="New visitor" 
subtitle="Triggers when somebody visits a specified page" 
src="assets/eye.svg" 
blockval="1" />
```

