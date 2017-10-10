$(".searchaction").click(function(event) {
	event.preventDefault();
	var q = "";
//	var query = $("#st-search-input").val();
	var wholeSite = document.getElementById('wholeSite');
	var docLib = document.getElementById('docLib');
	var commLib = document.getElementById('commLib');
	var servLib = document.getElementById('servLib');
	var planLib = document.getElementById('planLib');
	var medLib = document.getElementById('medLib');
	if(wholeSite.checked){

	}else{

		if(docLib.checked){
			q = "documents";

		}
		if(commLib.checked){
			
			q = q + ",committees";

		}
		if(servLib.checked){
			
			q = q + ",services";

		}
		if(planLib.checked){
			
			q = q + ", planning" ;

		}

		if(medLib.checked){
			
			q = q + ", media_room";

		}
	}

		var customRenderFunction = function(document_type, item) {
			var date = new Date(item['updated_at']),
				data = {
					body: item['body'],
					title: item['title'],
					url: item['url'],
					published_on: [date.getMonth(), date.getDate(), date.getFullYear()].join('/')
				};
			return resultTemplate.render(data);
		};

	$(function() {

		$('#st-search-input').swiftypeSearch({
			resultContainingElement: '#st-results-container',
//			fetchFields: {'page':['title','body','category']},
			filters: {'page': {'category':'committees'}},
//			searchFields: {'page': ['category']},
			engineKey: 'u9Xadyaze_awxNd4pnf_',
			renderFunction: customRenderFunction
		});

	});
	// set the location to be the URL of your search results page
	// For this example, it's results.html.
		var query = $("#st-search-input").val();
	window.location = "/swiftype_support/searchresults_swiftype_dev.jsp#stq=" + query;
 
});