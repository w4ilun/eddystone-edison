navigator.bluetooth.requestDevice({
  filters: [{ name: 'Edison' }],
  optionalServices: [0xFC00]
})

.then(device => device.gatt.connect())

.then(server => server.getPrimaryService(0xFC00))

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