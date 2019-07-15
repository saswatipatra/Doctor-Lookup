import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorSearch} from './backend-code';
import { getApi} from './promiseFunction';

$(document).ready(function() {
  $('.SearchByName').on('click', function(){
  let username= $('#username').val();
  $('.searchButton').hide();
  $("#name").text(username);
  $('#SearchByName').show();
});

$('.SearchByQuery').on('click', function(){
  let username= $('#username').val();
  $('.searchButton').hide();
  $("#name").text(username);
  $('#SearchByQuery').show();
});
$('.backButton').on('click', function(){
  $('.searchButton').show();
  $('#SearchByQuery').hide();
  $('#SearchByName').hide();
});

  $('#SearchByName').submit(function(event) {
    event.preventDefault();
    $('#doctorDetails').empty();

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let doctorLocation = $('#doctorLocation').val();
    $('#firstName').val("");
      $('#lastName').val("");
        $('#doctorLocation').val("");

    let doctorSearch = new DoctorSearch();
    let promise = doctorSearch.getDoctorByName(firstName, lastName, doctorLocation);

   promise.then(function(response) {
      let body = JSON.parse(response);
      getApi(body);
  })
  .catch(function(error) {
       $('.errors').text(`There was an error processing your request: ${error.message}`);
     });
     $('form')[0].reset();
});

$('#SearchByQuery').submit(function(event) {
  event.preventDefault();
  $('#doctorDetails').empty();

  let query = $('#query').val();
  let doctorLocation = $('#doctorLocation1').val();
  $('#query').val("");
    $('#lastName').val("");
      $('#doctorLocation1').val("");

  let doctorSearch = new DoctorSearch();
  let promise = doctorSearch.getDoctorByQuery(query, doctorLocation);

 promise.then(function(response) {
    let body = JSON.parse(response);
    getApi(body);
})
.catch(function(error) {
     $('.errors').text(`There was an error processing your request: ${error.message}`);
   });
});
$('form')[1].reset();
});
