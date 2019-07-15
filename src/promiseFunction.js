import $ from 'jquery';




export function getApi(body){
let count= body["meta"]["count"];
if (count!=0){
  let doctorList=body.data;
  for (var j = 0; j < count; j++) {
    $('#doctorDetails').append(` <br><br> Name: ${doctorList[j].profile.first_name} ${doctorList[j].profile.last_name}<br>`);
     $('#doctorDetails').append(`specialties: ${doctorList[j].specialties[0].uid}<br>`);
     $('#doctorDetails').append(` City: ${doctorList[j].practices[0].visit_address.city}<br> state: ${doctorList[j].practices[0].visit_address.state}<br> street: ${doctorList[j].practices[0].visit_address.street}<br> zip: ${doctorList[j].practices[0].visit_address.zip}<br> Phone no: ${doctorList[j].practices[0].phones[0].number}<br> New Patients:${doctorList[j].practices[0].accepts_new_patients}<br> `);
     for (var i = 0; i < (doctorList[j].practices).length; i++){
     if (doctorList[j].practices[i].website){
    $('#doctorDetails').append(`website: ${doctorList[j].practices[i].website}<br>`);
  }}
  }
}else{
$('.showErrors').text(`Requested Doctor is not register in our database`);
}
}
