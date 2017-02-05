(function(){
var 
	form = $('.form'),
	cache_width = form.width(),
	a4  =[ 595.28,  841.89];  // for a4 size paper width and height

$('#create_pdf').on('click',function(){
	$('body').scrollTop(0);
	//createPDF();
	//prueba2Pag();
	pruebaHTML2pag();
});
//create pdf
function createPDF(){
	getCanvas().then(function(canvas){
		var 
		img = canvas.toDataURL("image/png"),
		doc = new jsPDF({
          unit:'px', 
          format:'a4'
        });     
        doc.addImage(img, 'JPEG', 20, 20);
        doc.save('techumber-html-to-pdf.pdf');
        form.width(cache_width);
	});
}

// create canvas object
function getCanvas(){
	form.width((a4[0]*1.33333) -80).css('max-width','none');
	return html2canvas($('body'),{
    	imageTimeout:2000,
    	removeContainer:true
    });	
}

function prueba2Pag(){
	var doc = new jsPDF();
	doc.addPage('a4','p');
	doc.text(20, 20, 'Hello world!');
	doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
	doc.addPage('a4','p');
	doc.text(20, 20, 'Do you like that?');
	doc.save('dosPag.pdf');
}

function pruebaHTML2pag(){

var doc = new jsPDF();


doc.fromHTML($('body').get(0), 15, 15, {
	'width': 170, 
});
	doc.save('dosPag.pdf');

}




}());
