(function(){

navigator.bluetooth.requestDevice({
  filters: [{ name: 'Edison' }],
  optionalServices: [0xFC00]
})

.then(device => {
    alert("Connecting to GATT server...");
    return device.gatt ? device.gatt.connect() : device.connectGATT();
})

.then(server => {
	alert("Server Connected!");
	server.getPrimaryService(0xFC00);
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

})();