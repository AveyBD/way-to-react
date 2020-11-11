import React, {Component} from 'react';

class Welcome extends Component{
    doClass(a){
        alert(a);
    }
    render() {
        return <div>
            <button onClick={this.doClass.bind(this, "I am From Class")}>Button From Class</button>
            <h1>Learning {this.props.lib}, Class Component</h1>
        </div>
    }

}

export default Welcome;
