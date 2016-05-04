(window => {

	let deviceName = 'Edison';

	function connect(){
		alert('test');
		navigator.bluetooth.requestDevice({
			filters: [{ name: deviceName }],
			optionalServices: [0xFC00]
		})
		.then(device => {
			alert(device.name);
		})
		.catch(error => {
			alert(error);
		})
	}

	function init(){
		document.querySelector('#connect').addEventListener('click', connect);
	}

	document.addEventListener('DOMContentLoaded', init);

})(window);

/*(function(){

navigator.bluetooth.requestDevice({
  filters: [{ name: 'Edison' }],
  optionalServices: [0xFC00]
})

.then(device => {
    alert("Connecting to GATT server...");
    return device.gatt ? device.gatt.connect() : device.connectGATT();
})

.then(server => {
	alert("Connection established.");
	return new Promise(resolve => {
	this.async(() => {
		resolve(server.getPrimaryService(0xFC00));
	}, 2000);
	});
})

.then(service => {
  let p1 = () => service.getCharacteristic(0xFC0B)
  .then(characteristic => {
   	characteristic.writeValue(0); 
   });



  return p1();
})

.catch(err => {
  // Catch any error.
})
          
.then(() => {
  // Connection fully established, unless there was an error above.
});

})();*/