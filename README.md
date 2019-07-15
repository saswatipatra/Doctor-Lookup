# Doctor Lookup

#### _A web site for searching for doctors - July 14 , 2019_

#### _By **Saswati Patra**_

## Description

On this web site, a user may enter a medical issue and receive a list of doctors as per user choose of location . This web site uses the BetterDoctor API.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Search by medical issue to receive a list of doctors in the WA area that fit the search query** | query: stomach ache | Name: Klaus Mergener
specialties: gastroenterologist
City: Puyallup
state: WA
street: 1703 S Meridian
zip: 98371
Phone no: 2538413933
New Patients:true
website: http://www.digestivehlth.com/
... |
| **Search by name to receive a list of doctors in the WA area that fit the search query** | First Name: William, Last Name: Thompson | Name: William Thompson
specialties: general-dentist
City: Tukwila
state: WA
street: 6840 Fort Dent Way
zip: 98188
Phone no: 2062424166
New Patients:true
... |

## Setup/Installation Requirements
*_Clone this repository:https://github.com/saswatipatra/Doctor-Lookup_*
*_Register and get an API key from the BetterDoctor API_*
*_Install dependencies: $ npm i_*
*_Create a file named ".env" inside the project directory: $ touch .env_*
*_Inside ".env", insert this line and save the file: exports.apiKey = YOUR API KEY HERE_*
*_Build distribution files: $ npm run build_*
*_Start the file: $ npm run start_*


## Known Bugs
* No known bugs at this time.

## Technologies Used
* JavaScript
* jQuery
* Bootstrap
* webpack
* npm

## Support and contact details

_Please contact  Saswati with questions and comments._

### License

*GNU GPLv3*

Copyright (c) 2019 **_Saswati Patra_**
