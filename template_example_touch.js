define(['pipAPI', 'https://betodata.github.io/IAT_civ_ed/template_main_touch.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Democracia', //Will appear in the data.
			title : {
				media: {word : 'Democracia'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    			{word : 'Libertad'}, 
    			{word : 'Representación'}, 
    			{word : 'Elecciones'}, 
    			{word : 'Debate'},
				{word : 'Voto'},
			{word : 'Pluralismo'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.4em'}
		},	
		category2 :	{
			name : 'Autoritarismo', //Will appear in the data.
			title : {
				media : {word : 'Autoritarismo'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    	{word : 'Jerarquía'}, 
    			{word : 'Control'}, 
    			{word : 'Mando'}, 
    			{word : 'Centralismo'},
				{word : 'Imposición'},
    			{word : 'Obediencia'}				], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.4em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://robertoglz.github.io/IAT/images/'
		} 
	});
});
