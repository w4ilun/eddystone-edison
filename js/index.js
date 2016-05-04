(window => {

	let deviceName = 'Edison';

	function connect(){
		navigator.bluetooth.requestDevice({
			filters: [{ name: deviceName }],
			optionalServices: [0xFC00]
		})
		.then(device => {
			console.log(device.name);
			return device.gatt.connect();
		})
		.then(server => {
			console.log('Connected to GATT server');
			return server.getPrimaryService(0xFC00);
		})
		.then(service => {
			console.log('Getting Characteristics...');
			return service.getCharacteristic(0xFC0B);
		})
		.then(characteristic =>{
			console.log(characteristic);
		})
		.catch(error => {
			console.log(error);
		});
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