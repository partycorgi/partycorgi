const fs = require('fs');
const path = require('path');
const firebase = require('firebase/app');
require('firebase/database');

/* env variables required here for testing purposes */
require('dotenv').config();

class DB {
  constructor() {
    let firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DB_URL,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET
    };
    firebase.initializeApp(firebaseConfig);
    this.database = firebase.database();
  }

  getDatabase() {
    return this.database;
  }

  startListening(path, eventType = 'value') {
    let ref = this.database.ref(path);
    ref.on(eventType, this.logData, this.errorData);
    console.log(`Firebase: Now listening for updates at /${path}`.magenta);
    return ref;
  }

  stopListening(path = null, eventType = null) {
    this.database.ref(path).off(eventType);
    console.log(`Firebase: Stopped listening for updates at /${path}`.magenta);
  }

	/* firebase database runtime logs are saved in firebase.log file.
	Log files can be found at ./logs */
  logData(data) {
    fs.appendFileSync(
      path.join(__dirname, '../logs/firebase.log'),
      JSON.stringify(data.val()) + '\n',
      err => {
        if (err) throw err;
        console.log(`Firebase: logged message successfully.`.green);
      }
    );
  }

	/* firebase database errors are saved in firebase.error.log file 
	Log files can be found at ./logs */
  errorData(data) {
    fs.appendFileSync(
      path.join(__dirname, '../logs/firebase.error.log'),
      JSON.stringify(data.val()) + '\n',
      err => {
        if (err) throw err;
        console.log(
          `An error occured while listening to database.\nLog can be found at ${path.join(
            __dirname,
            '../logs/firebase.error.log'
          )}`.red
        );
      }
    );
  }

  async writeData(path, obj) {
    await this.getDatabase()
      .ref(path)
      .set(obj);
  }

  async updateData(path, obj) {
    await this.getDatabase()
      .ref(path)
      .update(obj);
  }

  async appendData(path, obj) {
    await this.getDatabase()
      .ref(path)
      .push(obj);
  }

  async deleteData(path) {
    await this.getDatabase()
      .ref(path)
      .remove();
  }
}

module.exports = new DB();
