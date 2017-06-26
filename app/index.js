import React from 'react';
import {render} from 'react-dom';
import webpack from "./webpack.jpg";
import "./index.css";
import "./index.less";
import {Button} from 'antd-mobile';
// import { Provider } from 'react-redux';
// import configureStore from "./store/configureStore";

import RouteMap from "./router/routeMap";

//创建store
// const store = configureStore();
class App extends React.Component {
    render() {
        return (
          <RouteMap></RouteMap>
        //   <Provider store={store}>
        //     <img src={webpack} alt="webpack图片"></img>
        //     <p> hello react </p>
        //      <Button className="my-radio">Agree</Button>
        // </Provider>
        )
    }
}
render(<App />, document.getElementById('app'));
