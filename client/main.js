/* ---------------------------------------------------- +/

## Main ##

Global client-side code. Loads last.

/+ ---------------------------------------------------- */

// CREATE BROWSER Notifications

// ask the user for permission
if (Notification.permission !== 'denied') {
  Notification.requestPermission();
}

Notifications.find().observeChanges({
  added: function(id, fields) {

    if (fields.read === false) {
      if (Notification.permission === 'granted') {
        var notificationText = 'BRING BRING!!! Your Timbre "' +  fields.timbreName +  '" is ringing!';
        var notification = new Notification(notificationText);
      }

      Notifications.update(id, {$set: {read: true}});
    }

  }
});