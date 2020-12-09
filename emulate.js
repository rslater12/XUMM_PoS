/* let dotenv = require('dotenv');
let request = require('request')

dotenv.config();

var apikey = process.env.apikey;
var apisecret = process.env.apisecret; 
var Host = process.env.HOSTNAME;


async function XummSign(){

	var jar = request.jar();
	
	var options = {
	  method: 'POST',
	  url: 'https://xumm.app/api/v1/platform/payload',
	  headers: {
		'content-type': 'application/json',
		'x-api-key': apikey,
		'x-api-secret': apisecret,
		authorization: 'Bearer' + apisecret
	  },
	  body: {
		  "options": {
				"submit": true,
				"return_url": {
					"web": "",
					"app": ""
						}    
				  },
			  "txjson": {
				"TransactionType": "SignIn",
				"Destination": "", 
				"Fee": "12"
			  }
			},
	  json: true,
	  jar: 'JAR'
	};

	request(options, async function (error, response, body) {
	  if (error) throw new Error(error);
	  
	  UUID = body.uuid;
 
  console.log(UUID)
var data = await Buffer.from(UUID, 'utf8');
//data = await data.map(function(e) {return '0x' + e + ","});
console.log(data)
const buf6 = Buffer.from('tést')
console.log(buf6)
});
}

XummSign()
 */

 'use strict'

const {NFC, NFCReader} = require('./index')


let nfc = new NFC();
console.log(nfc.listDevices())
nfc.close();

// Reader API:
let nfcReader = new NFCReader();
nfcReader.open("pn532_uart:/dev/tty.usbserial-AQ00PCSL"); // or nfcReader.open(); to open the default device

nfcReader.emulate(); // polls for the next card
/* nfcReader.on('card', card => {
    console.log(card);

    async function process() {
        // Sending data:
        // let result = await nfcReader.transceive(Buffer.from([0]));
        // console.log(result);

        await nfcReader.emulate();
        console.log('card released');

        nfcReader.poll(); // polls for the next card
    }

    process();
}); */

// triggered if polling has failed
nfcReader.on('error', err => {
    throw err;
})