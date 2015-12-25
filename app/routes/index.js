//app/routes/index.js
import Ember from 'ember';
// import Notify, {message} from '../models/rental';
// this imports Notify and message into the current namespace
import * as M from '../models/rental';
// I like this way better. One can tell that Notify and message are from module M

export default Ember.Route.extend({
  // everything in ember is a hash!
  // if you want to access a variable, you say this.get('variable_name')
  isImageShowing: false,
  notify: M.Notify.create({msg: 'Hello'}),
  actions: {
    

    imageShow() {
      let _notify = this.get('notify'); // note: _notify is a pointer.
    	// var notify = Notify.create(); // no M namespace
      // var notify = M.Notify.create();
      this.set('isImageShowing', true);
      // illustrates use of classes.
      // we are creating a class instance passing in a hash, which is parsed by init()
      // changed our mind, say goodbye
      _notify.set('msg', 'Goodbye'); // use set decorator for Objects. 
      _notify.say();
    },
    imageHide() {
    	this.set('isImageShowing',false);
      // message('image being hidden'); // no M namespace
    	// M.message('image being hidden');
    	// notify.say('image being hidden');
      this.get('notify').say();
    }
  }
});

