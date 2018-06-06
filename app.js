$(document).ready(function(){

  $('.setData').on('click', function() {
    let textFieldValue = $('.textField').val();
    let snippetValue = $('.snippetField').val();
    localStorage.setItem(JSON.stringify(textFieldValue), JSON.stringify(snippetValue));
    // $('.textField').val('');
    // $('.snippetField').val('')
   // 	$('.debug').text(textFieldValue);
    //	$('.debug').text(snippetValue);
  });

  // const snippetArray = [];
  $('.getData').on('click', function(){
 //   let retrievedData = localStorage.getItem('myFormTextData');
 	 // $('.snippetDisplay').remove();
 	 const snippetArray = [];
 	 
    for (var i = 0; i < localStorage.length; i++) {
    	if(localStorage.key(i) && localStorage.getItem(localStorage.key(i))) {
    		console.log(localStorage.key(i) + ':' + localStorage.getItem(localStorage.key(i)));
    		snippetArray.push(JSON.parse(localStorage.key(i)) + ':' + JSON.parse(localStorage.getItem(localStorage.key(i))));
    		
    	}

 //   	retrievedData.appendTo(snippetDisplay)
    }
    $('.snippetDisplay').replaceWith($('<div class="snippetDisplay">' + snippetArray + '</div>'))

 //   $('.debug').text(retrievedData);
  });

});