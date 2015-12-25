//app/models/rental.js
import Ember from 'ember';


// ------------------
//	Module interface
// ------------------
export let Notify;
export let message;


// functions
message = function(msg) {
	alert(msg);
};

// classes
Notify = Ember.Object.extend({
  init() {
  	var msg = this.get('msg'); // extracts msg from the hash that is provided during create()
  },

  say() {
    alert(`Hi, the messages is: ${this.msg}`);
  }
});

var a_message = Notify.create({
  msg: 'Hello there'
});

// note this line is optional if you use the import * as M from '' syntax
export default Notify;

