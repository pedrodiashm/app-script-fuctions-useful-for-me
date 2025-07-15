function change_date(){
  // pegar aba
  sheet = SpreadsheetApp.getActiveSpreadsheet() 
  var aba = sheet.getSheetByName('Dados');
  //pegar o valor do mês que quero atualizar as datas, no formato yyyy-mm
  var value = aba.getRange(2,1).getValue();
  Logger.log(value)
  result = [];
  var lista = value.split("-");
  var ano = parseInt(lista[0]);
  var mes = parseInt(lista[1]) - 1;
  
  // limpar intervalo
  aba.getRange("4:4").clearContent();
  
  var data_final = new Date(ano, mes+1, 0);
  for (var i = 1; i <= data_final.getDate(); i++){
    nova_data = new Date(ano, mes, i);
    if (nova_data.getDay() !== 0 && nova_data.getDay() !== 6){
    // checa se data é diferente de domingo ou sabado
    // curioso pensar que a forma como eu disse aqui em cima
    // é lei de morgan da inversão do not(a or b) / not(a and b)
    // not (sabado ou domingo) = (not sabado e not domingo)
      var yyyy = nova_data.getFullYear();
      var mm = nova_data.getMonth()+1;
      var dd = nova_data.getDate();
      // na base de dados a data esta no formato yyyy-mm-dd
      result.push(`${yyyy}-${mm}-${dd}`);
    }

  }
  // set os dados em uma linha no formato que preciso
  for (var i = 0; i < result.length; i++){
    
    let coluna = 2 + i * 3;
    aba.getRange(4, coluna).setValue(result[i])
  }
}
