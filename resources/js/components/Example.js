import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component{
    render(){
        return(
            <div>
                <h1>default import is.</h1>
            </div>
        );
    }
}


if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
