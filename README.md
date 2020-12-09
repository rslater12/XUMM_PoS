# XUMM_PoS
NFC PoS Terminal for XUMM Payload.

Using LibNFC libary to Emulate a forum-tag4 to enable communication between IOS App and the Adafruit PN532 Breakout Board using a FTDI cable directly to macOS.

Currently trying to implement into NodeJS Project. 

XUMM Developer Account required.

Create .env file and add API secret and key.

>HOSTNAME= localhost

>PORT= 3000

>apikey=**********************

>apisecret=*******************

Install Libnfc (free) - https://github.com/nfc-tools/libnfc

Possibly need to change bindings path.

pn532 Breakout board used - https://thepihut.com/products/adafruit-pn532-nfc-rfid-controller-breakout-board

Tried cheaper boards (PN532 NFC Module V3) over Arduino able to return a response on inital contact whilst emulating but no data is sent after this response.
(https://www.electroschematics.com/nfc-rfid-module-pn532/)

Also tried a RC5222 only good for reading and writing and a ARC122u, its possible to put this into emulation mode but on my macOS after the first test the USB port becomes disbaled. on firther research this is someing to do with teh ARC122u interface i beleive.
