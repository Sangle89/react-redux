import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
class ComB extends React.Component{
	render() {
		return(
			<div>
				ComB
                <button onClick={() => {
                    this.props.dispatch({ type: 'UP' });    
                }}>+</button>
                <button onClick={() => {
                    this.props.dispatch({ type: 'DOWN' });    
                }}>-</button>
			</div>
		)
	}
}
export default connect()(ComB);