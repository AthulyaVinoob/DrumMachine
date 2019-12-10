import React,{Component} from 'react';

class DisplayComponent extends Component{
	render(){
		return(
		<div>
		<div id="display">{this.props.display}</div>
		</div>
			);
	}
}

export default DisplayComponent;