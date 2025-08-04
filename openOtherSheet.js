// a unica utilidade disso é clicar em um botão e esperar outra planilha abrir em outra guia
// para os olhos de quem não conhece parece mágica!
 

function openOtherSheet() {  

// cola a url da outra planilha
var url = ""; 
 

var html = "<script>window.open('" + url + "');google.script.host.close();</script>";

var userInterface = HtmlService.createHtmlOutput(html).setHeight(10).setWidth(100);

SpreadsheetApp.getUi().showModalDialog(userInterface, "Abrindo Planilha ... ");

}
