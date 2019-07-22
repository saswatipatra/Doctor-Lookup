import 'jquery';

export class DoctorSearch {
  getDoctorByName(firstName, lastName, doctorLocation) {
    return new Promise(function(resolve, reject) {
      console.log(process.env.apiKey)
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName} &location=${doctorLocation}&user_key=${process.env.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  getDoctorByQuery(query, doctorLocation) {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://cors-anywhere.herokuapp.com/https://api.betterdoctor.com/2016-03-01/doctors?skip=0&limit=100&query=${query} &location=${doctorLocation}&user_key=${process.env.apiKey}`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        }
        request.open("GET", url, true);
        request.send();
      });
    }
}
