void function funcfunc() {

  var exec = require('child_process').exec;

  temDown = 0;
  temconcluido = 0;

   exec('ls /userdata/system/logs/*.download | wc -l ', (error, stdout, stderr) => {
      if (error) {
         console.log(`error: ${error.message}`);
         //return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          //return;
      }
      var temDown = stdout;
      console.log(`temDown: ${temDown}`);
      console.log(`stdout: ${stdout}`);
    
         
    //Verifica se existe concluido disponivel 
  var exec = require('child_process').exec;

  exec('ls /userdata/system/logs/*.concluido | wc -l ', (error, stdout, stderr) => {
    if (error) {
       console.log(`error: ${error.message}`);
       //return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        //return;
    }
    var temconcluido = stdout;
    console.log(`temconcluido: ${temconcluido}`);
    console.log(`stdout: ${stdout}`);
  
  
  console.log(`1 temconcluido: ${temconcluido}`);
  console.log(`1 temDown: ${temDown}`);
  
  // Retorna pagina dizendo que não tem download
  if ( temDown  != 0  || temconcluido != 0 ) {
     console.log(`tem arquivo`);
     //return;
  }else{
     console.log(`nao tem arquivo`);
  }; // JavaScript Document

});
});
  
}();

