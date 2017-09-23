import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import ComB from './ComB';
class ComA extends React.Component{
	render() {
		return(
			<div>
				ComA <span>{this.props.myValue}</span>
                <ComB/>
			</div>
		)
	}
}
function mapStateToProp(state) {
    return {myValue: state.value};
}
export default connect(mapStateToProp)(ComA);