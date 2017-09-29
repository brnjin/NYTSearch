var startDate = $('#startDate').text();
var endDate = $('#endDate').text();
var numRecords = $('#searchRecords').text();
var searchString = $('#searchBox').text();
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key:e215c6f07af8473aba30a72b907500a4&q=california" + searchString;

// if start date is defined, append to url
if (startDate !== undefined) {
	url += "&begin_date=" + startDate;
}

if (endDate !== undefined) {
	url += "&end_date=" + endDate;
}
// if end date is defined, append to url



$.ajax({
  url: url,
  method: 'GET',
}).done(function(response) {
  console.log(response);
var results = response.response.docs
  $('#searchButton').on('click', function(){

  })
}).fail(function(err) {
  throw err;
});