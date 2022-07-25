let toggle = localStorage.getItem('status');

function accessLocal (toggle) {

	if (toggle === null) {
		let toggle = localStorage.setItem('status', false);
		return toggle;
	} else {
		//do nothing	
	}
	return toggle;
};

let ToggleStatus = accessLocal(toggle);

export default ToggleStatus;

