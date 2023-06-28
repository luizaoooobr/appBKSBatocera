'use strict';

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express); 

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieSession = require('cookie-session');

var _cookieSession2 = _interopRequireDefault(_cookieSession);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _child_process = require('child_process');

var _utils = require('./lib/utils');

var _upload = require('./routes/upload');

var _upload2 = _interopRequireDefault(_upload);

var _conf = require('./routes/conf');

var _conf2 = _interopRequireDefault(_conf);

var _grep = require('./routes/grep');

var _grep2 = _interopRequireDefault(_grep);

var _save = require('./routes/save');

var _save2 = _interopRequireDefault(_save);

var _get = require('./routes/get');

var _get2 = _interopRequireDefault(_get);

var _post = require('./routes/post');

var _post2 = _interopRequireDefault(_post);


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('port', process.env.PORT || 3001);

app.use((0, _cookieSession2.default)({
  name: 'recalbox-session',
  secret: 't|-|eC4keIsA|_i3',
  httpOnly: false,
  secure: false,
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(_express2.default.static('client/build'));
}

// serves screenshots
app.use('/viewer/screenshots', _express2.default.static(_config2.default.get('recalbox.screenshotsPath')));

// serves roms (form images)
app.use('/viewer/roms', _express2.default.static(_config2.default.get('recalbox.romsPath')));

// locales
app.use('/locales', _express2.default.static('locales'));

// parse application/json
app.use(_bodyParser2.default.json());

// Récupération de divers données (liste de répertoires, contenu de
// fichier, etc.)
app.use('/get', _get2.default);

// Actions divers sur des données (écriture de fichier, suppression, etc.)
app.use('/post', _post2.default);

// Récupération de valeurs du fichier de config du manager
app.use('/conf', _conf2.default);

// Récupération de valeurs du fichier recalbox.conf
app.use('/grep', _grep2.default);

// Enregistrement de nouvelles valeurs dans le fichier recalbox.conf
app.use('/save', _save2.default);

// Prise en charge des différents uploads (BIOS, ROMs)
app.use('/upload', _upload2.default);

app.get('/recalbox-support', function (req, res, next) {
  try {
    var archivePath = _config2.default.get('recalbox.savesPath') + '/recalbox-support-' + (0, _utils.uniqueID)() + '.tar.gz';
    var Transfert = _config2.default.get('Transfert');
    // Création de l'archive
    (0, _child_process.execSync)(_config2.default.get('recalbox.supportScript') + ' ' + archivePath);

    // Upload file
    _superagent2.default.post(Transfert.url).attach('file', archivePath).then(function (uploadResponse) {
      // Get link
      res.json({ url: uploadResponse.text });
      // Remove local file
      _fs2.default.unlinkSync(archivePath);
    }).catch(function (err) {
      return next(err);
    });
  } catch (err) {
    next(err);
  }
});

// handles all routes so you do not get a not found error
app.get('/*', function (req, res) {
  res.sendFile(_path2.default.resolve('client/build/index.html'));
});

var exec = require('child_process').execSync;
var exec2 = require('child_process').exec;

app.post('/show', function (req, rest) {
  
exec('sh /recalbox/scripts/S33copiacore.sh', function(err,stdout,stderr){
      console.log(stdout);

});
   rest.sendfile(_path.join(__dirname+'/atualizado.html'));  
});

app.post('/show2', function (req, rest) {
  
exec('sh /recalbox/scripts/versaofba178.sh', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/atualizado.html'));
    
});

app.post('/show401', function (req, rest) {
  
exec('sh /recalbox/scripts/versaofbaba529.sh', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/atualizado.html'));
    
});      
   
app.post('/show3', function (req, rest) {
  
exec('sh /recalbox/scripts/versaofba181.sh', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/atualizado.html'));
    
});

app.post('/show4', function (req, rest) {
  
exec('sh /recalbox/scripts/versaosnes9x178.sh', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/atualizado.html'));
    
});

app.post('/show44', function (req, rest) {
  
exec('sh /recalbox/scripts/versaofba7.sh', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/atualizado.html'));
    
});

app.post('/show45', function (req, rest) {
  
exec('sh /recalbox/scripts/versaosnes9x7.sh', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/atualizado.html'));
    
});

app.post('/show66', function (req, rest) {
  
exec('sh /recalbox/scripts/versaosnes9x71.sh', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/atualizado.html'));
    
});

app.post('/show79', function (req, rest) {
  
exec('sh /recalbox/scripts/versaofbalpha201271.sh', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/atualizado.html'));
    
});




app.post('/show65', function (req, rest) {
  
exec('sh /recalbox/scripts/versaofba71.sh', function(err,stdout,stderr){
      console.log(stdout); 

});
  
  rest.sendfile(_path.join(__dirname+'/atualizado.html'));
    
});

app.post('/show110', function (req, rest) {
  
exec('sh /recalbox/scripts/versaofbneo711.sh', function(err,stdout,stderr){
      console.log(stdout); 

});
  
  rest.sendfile(_path.join(__dirname+'/atualizado.html'));
    
});


app.post('/show45', function (req, rest) {
  
exec('sh /recalbox/scripts/versaosnes9x7.sh', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/atualizado.html'));
    
});


app.post('/show5', function (req, rest) {
  
exec('sh /recalbox/scripts/versaosnes9x181.sh', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/atualizado.html'));
    
});

app.post('/show6', function (req, rest) {
  
exec('sh /recalbox/scripts/tiratelapreta.sh', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/atualizado2.html'));
    
});

app.use(_bodyParser.urlencoded({ extended: true }));

app.post('/show7',function (req, rest) {

if (req.body.player === 'player1') {
      exec('sh /recalbox/scripts/input1.sh', function(err,stdout,stderr){
      console.log(stdout);});
      rest.sendfile(_path.join(__dirname+'/input1.html'));
};

if (req.body.player === 'player2') {

      exec('sh /recalbox/scripts/input2.sh', function(err,stdout,stderr){
      console.log(stdout);});
      rest.sendfile(_path.join(__dirname+'/input2.html'));
};

if (req.body.player === 'player3') {

      exec('sh /recalbox/scripts/input4.sh', function(err,stdout,stderr){
      console.log(stdout);
      rest.sendfile(_path.join(__dirname+'/input3.html'));
});
};

if (req.body.player === 'player4') {

      exec('sh /recalbox/scripts/input4.sh', function(err,stdout,stderr){
      console.log(stdout);
      rest.sendfile(_path.join(__dirname+'/input4.html'));
});
};

if (req.body.player === 'player5') {

      exec('sh /recalbox/scripts/limpainput.sh', function(err,stdout,stderr){
      console.log(stdout);
      rest.sendfile(_path.join(__dirname+'/limpainput.html')); 
});
};
     
});

app.use(_bodyParser.urlencoded({ extended: true }));

app.post('/show8',function (req, rest) {

if (req.body.lobby === 'playarch') {
      exec('sh /recalbox/scripts/executando.sh 1', function(err,stdout,stderr){
      console.log(stdout);});
      rest.sendfile(_path.join(__dirname+'/playarch.html'));

};

if (req.body.lobby === 'oficial') {

      exec('sh /recalbox/scripts/executando.sh 2', function(err,stdout,stderr){
      console.log(stdout);});
      rest.sendfile(_path.join(__dirname+'/oficial.html'));

};
     
});

app.post('/show9', function (req, rest) {
  
exec('sh /recalbox/scripts/enviacmd.sh 1', function(err,stdout,stderr){
     
});
  
  rest.sendfile(_path.join(__dirname+'/comandos.html'));
    
});

app.post('/show31', function (req, rest) {
  
exec('sh /recalbox/scripts/enviacmd.sh 1', function(err,stdout,stderr){
     
});
  
  rest.sendfile(_path.join(__dirname+'/comandos2.html'));
    
});


app.post('/show10', function (req, rest) {
  
exec('sh /recalbox/scripts/enviacmd.sh 2', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/comandos.html'));
    
});

app.post('/show11', function (req, rest) {
  
exec('sh /recalbox/scripts/enviacmd.sh 3', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/comandos.html'));
    
});

app.post('/show12', function (req, rest) {
  
exec('sh /recalbox/scripts/enviacmd.sh 6', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/comandos.html'));
    
});

app.post('/show13', function (req, rest) {
  
exec('sh /recalbox/scripts/enviacmd.sh 5', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/comandos.html'));
    
});

app.post('/show14', function (req, rest) {
  
exec('sh /recalbox/scripts/enviacmd.sh 7', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/comandos.html'));
    
});

app.post('/show15', function (req, rest) {
  
exec('sh /recalbox/scripts/enviacmd.sh 8', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/comandos.html'));
    
});

app.post('/show16', function (req, rest) {
  
exec('sh /recalbox/scripts/enviacmd.sh 10', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/comandos.html'));
    
});

app.post('/show17', function (req, rest) {
  
exec('sh /recalbox/scripts/enviacmd.sh 9', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/comandos.html'));
    
});

app.post('/show18', function (req, rest) {
  
exec('sh /recalbox/scripts/enviacmd.sh 4', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/comandos2.html'));
    
});

app.post('/show19', function (req, rest) {
  
exec('sh /recalbox/scripts/updatecore.sh 1', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/atualizado.html'));
    
});

app.post('/show20', function (req, rest) {
  
exec('sh /recalbox/scripts/updatecore.sh 2', function(err,stdout,stderr){
      console.log(stdout);

});
  
  rest.sendfile(_path.join(__dirname+'/atualizado.html'));
    
});

app.post('/show77', function (req, rest) {
  
exec('sh /recalbox/scripts/updatecore.sh 3', function(err,stdout,stderr){
      console.log(stdout);
                                                                                         
});
  
  rest.sendfile(_path.join(__dirname+'/atualizado.html'));
    
});

app.post('/show400', function (req, rest) {
  
exec('sh /recalbox/scripts/updatecore.sh 4', function(err,stdout,stderr){
      console.log(stdout);
                                                                                         
});
  
  rest.sendfile(_path.join(__dirname+'/atualizado.html'));
    
});

app.use(_bodyParser.urlencoded({ extended: true }));        

app.post('/show30',function (req, rest) {

if (req.body.server === 'server1') {
      exec('sh /recalbox/scripts/server1.sh', function(err,stdout,stderr){
      console.log(stdout);});
      rest.sendfile(_path.join(__dirname+'/server1.html'));
};

if (req.body.server === 'server2') {

      exec('sh /recalbox/scripts/server2.sh', function(err,stdout,stderr){
      console.log(stdout);});
      rest.sendfile(_path.join(__dirname+'/server2.html'));
};
     
});

app.use(_bodyParser.urlencoded({ extended: true }));

app.post('/show51',function (req, rest) {    

  const fs2 = require('fs')

  console.log("Sistema Recebido: "+req.body.sistema)
  
  var sistema = req.body.sistema; 
  
  var caminho = "/usr/recalbox-manager2/config/hacks/"+req.body.sistema;
   
  
  console.log("Sistema Caminho: "+caminho)  
                                           

  fs2.readFile(caminho, 'utf8', (err, fileContents) => {
     if (err) {
     console.error(err)
     return
  }
  try {
        const dt = JSON.parse(fileContents)     
        
         
       //console.log(data[0].fields.id);
       console.log("status : " + req.body.status);                        
       console.log("rom :" + req.body.rom); 
       
       var i;
       var t1 = "[";        
       var t2 = "]";
       var t3 = "";
       var t4 = "";
       var jsonfinal = ""
           
       
       for (i = 0; i < dt.length; i++) {     
                
            
            //if (req.body.status === "ligado") {
            
                if (req.body.rom === dt[i].rom){
                   if (req.body.hacks === "ligado"){
                       dt[i].ligado = dt[i].rom + '_1';
                   }else{
                       dt[i].ligado = dt[i].rom 
                   }
                } 
           // } else {
            //   if (req.body.rom === dt[i].rom){
              //     dt[i].ligado = dt[i].rom 
            //    } 
            //}

           if (i === 0) {
               t4 = t4 + `{ "rom": "` + dt[i].rom + `" , "ligado": "` + dt[i].ligado + `", "game": "`+ dt[i].game +`"}`     
           } else {
               t4 = t4 + `,{ "rom": "` + dt[i].rom + `" , "ligado": "` + dt[i].ligado + `", "game": "`+ dt[i].game +`"}`
           
           }
                    
       }
       
 
       
       console.log("json" + t4);
       
       jsonfinal = t1 + t4 + t2;
       
       console.log("jsonfinal" + jsonfinal);       
        
       
                                                                       
        //console.dir(data);    
        //console.log(data.result);

      } catch(err) {
        console.error(err)
     }
     
     
     
     
//const fs3 = require('fs');
    
let data = jsonfinal + " "; 

//JSON.stringify(data, null, 2);   

    var caminhotmp = "/usr/recalbox-manager2/config/hacks/"+req.body.sistema+"_tmp";

//fs2.writeFile('/usr/recalbox-manager2/config/hacks/fbneo2.json', data, (err) => {
fs2.writeFile(caminhotmp, data, (err) => {                                                 
    if (err) throw err;
    console.log('Data written to file');
    return           
});  
                                                                                                                                   
console.log(req.body.hacks);

      var rom_final = " ";
      
       if (req.body.hacks === "ligado"){
          rom_final = req.body.rom + " 0";      
       }else{
          rom_final = req.body.rom + " 1";
       }
                                                                
      //var executa = "sh /recalbox/scripts/hack.sh "+ req.body.hacks;
      var executa = "sh /recalbox/scripts/hack.sh "+ rom_final + " " + sistema;    
      console.log("log e : " + executa)
      exec(executa, function(err,stdout,stderr){
      console.log(stdout);});
      rest.sendfile(_path.join(__dirname+'/hacks.html'));                                                                                                   
     
});
});


app.use(_bodyParser.urlencoded({ extended: true }));

app.post('/show99',function (req, rest) {    
  
  console.log("Sistema Recebido: "+req.body.sistema);
  console.log("game: "+req.body.game);
  console.log("nome: "+req.body.nome);
  console.log("tamanho: "+req.body.tamanho);      
  console.log("Sismin: "+req.body.sismin);        

rest.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My CRUD in NodeJS</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
   
}

p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the content */
.content {
  background-color: #ddd;
  padding: 7px;
  height: 260px; /* Should be removed. Only for demonstration */
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
}                                                                                               

.btn-group button {  
  background-color: #4CAF50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 8px 22px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}


.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}

</style>

</head>
<body>

<div class="topnav" aling="center">

   <a href="index.html"><img src="pv3.png" alt="v3" width=100 height=80></a><br>   
   <a href="#">Fazendo Download da Rom `+ req.body.nome +`<h2></a>
 
</div> 

<div class="content">
    <img src="download.gif" alt="download" width=350 height=220>
</div>

<div class="topnav">
   <img src="bks2.png" alt="v3" width=350 height=120><br>
   <a href="#">Todos direitos Reservados<h2></a>    
</div>

    <form name="myform" action="/show325" method="POST" >
          <input type="hidden" id="game" name="game" value="`+ req.body.game +`">
          <input type="hidden" id="nome" name="nome" value="`+ req.body.nome +`">
          <input type="hidden" id="sistema" name="sistema" value="`+ req.body.sistema +`">
          <input type="hidden" id="tamanho" name="tamanho" value="`+ req.body.tamanho +`">    
          <input type="hidden" id="sismin" name="sismin" value="`+ req.body.sismin +`"/>
          <input type="hidden" id="link" name="link" value="`+ req.body.link +`" />
          <input type="hidden" id="pasta" name="pasta" value="`+ req.body.pasta +`" />
          <input type="hidden" id="extrairom" name="extrairom" value="`+ req.body.extrairom +`" />  
    </form>
    <script type="text/javascript">
       document.myform.submit();
     </script>
</body>
</html>`
);       
});


//------------ Tela de download de atualizações do APP ---------------------//

app.use(_bodyParser.urlencoded({ extended: true }));

app.post('/update',function (req, rest) {    
  
  console.log("Atualização dos Recursos de App");
          

rest.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My CRUD in NodeJS</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
   
}

p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the content */
.content {
  background-color: #ddd;
  padding: 7px;
  height: 260px; /* Should be removed. Only for demonstration */
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
}                                                                                               

.btn-group button {  
  background-color: #4CAF50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 8px 22px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}


.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}

</style>

</head>
<body>

<div class="topnav" aling="center">

   <a href="index.html"><img src="pv3.png" alt="v3" width=100 height=80></a><br>   
   <a href="#">Atualizando Recursos de APP<h2></a>
 
</div> 

<div class="content">
    <img src="https://i.gifer.com/ItDJ.gif" alt="download" width=350 height=220>
</div>

<div class="topnav">
   <img src="bks2.png" alt="v3" width=350 height=120><br>
   <a href="#">Todos direitos Reservados<h2></a>    
</div>

    <form name="myform" action="/execupdate" method="POST" >
    </form>
    <script type="text/javascript">
       document.myform.submit();
     </script>
</body>
</html>`
);       
});


// ---------- Fim download de atualializações do APP -----------------------//

// ---------- Executa Shell de update de funções do APP -------------------//

app.use(_bodyParser.urlencoded({ extended: true }));

var _spawn = require('child_process').execSync;

app.post('/execupdate', function (req, rest) {
 
   console.log("Chamando shell de updateapp.sh");             
  //var executa = "sh /recalbox/scripts/hack.sh "+ req.body.hacks;
   var executa = "sh /usr/recalbox-manager2/config/sistemasdownload/scripts/updateapp.sh";      
   console.log("log e : " + executa);
   _spawn(executa, function(err,stdout,stderr){
       console.log(stdout);                                    
   })    
       
   rest.sendfile(_path.join(__dirname+'/upapp.html'));     

});

                                             
// ---------- Fim da execução de update de funções do APP -----------------// 
                                                                                                   

app.use(_bodyParser.urlencoded({ extended: true }));

app.post('/show91',function (req, rest) {    
  
  console.log("Sistema Recebido: "+req.body.sistema);
  console.log("game: "+req.body.game);
  console.log("nome: "+req.body.nome);
  console.log("tamanho: "+req.body.tamanho);      
  console.log("Sismin: "+req.body.sismin);
  console.log("link: "+req.body.link);
  console.log("link: "+req.body.pasta);
                                       
  
  
  var sistema = req.body.sistema; 
  
      //var executa = "sh /recalbox/scripts/hack.sh "+ req.body.hacks;
      var executa = "sh /recalbox/scripts/romdown.sh " + req.body.sistema + " " + req.body.game  + " " + req.body.tamanho + " " + req.body.sismin;     
      console.log("log e : " + executa);
      exec(executa, function(err,stdout,stderr){
      console.log(stdout);});   

      executa = "sh /recalbox/scripts/reiniciaemu.sh ";     
      console.log("log e : " + executa);
      exec2(executa, function(err,stdout,stderr){     
           console.log(stdout);});       
                   
      rest.sendfile(_path.join(__dirname+'/romdown.html'));                                                                                                 
     
});

app.post('/show21', function (req, rest) {
 
  const fs = require('fs')
  
  console.log("Sistema Recebido: "+req.body.sistema)
  
  var sistema = req.body.sistema; 
                                                                      
  var caminho = "/usr/recalbox-manager2/config/hacks/"+req.body.sistema;
  
  console.log("Sistema Caminho: "+caminho)

  fs.readFile(caminho, 'utf8', (err, fileContents) => {
     if (err) {
     console.error(err)
     return
  }
  try {
        const data = JSON.parse(fileContents)
       //console.log(data[0].fields.id);
       
       var i;
       var t1 = ``;
       var t2 = ``
       var checked_a = ``;
       var checked_b = ``;
       var _hidden = '';
       
       for (i = 0; i < data.length; i++) {     
            
            if (data[i].ligado === data[i].rom + "_1") {
                checked_a = "checked";
                checked_b = " ";
                _hidden = "ligado"; 
                
            } else {
                checked_a = " ";
                checked_b = "checked";
                _hidden = "desligado";
            }
             
            t1 = `<br><p class="solid"><div class="btn-group"> 
                  
                  <form action="/show51" method="POST"> 
                        <h1><b><label>Game: ` + data[i].game + ` </label></h1></b></p><br>
                        <input type="radio" id="ligado" name="hacks" value="ligado" ` + checked_a + `>
                        <label for="ligado">ligada</label><br><br>
                        <input type="radio" id="desligado" name="hacks" value="desligado" ` + checked_b + `>
                        <label for="desligado">desligada</label><br><br>  
                        <input type="hidden" id="rom" name="rom" value="`+ data[i].rom +`">
                        <input type="hidden" id="status" name="status" value="`+ _hidden +`">
                        <input type="hidden" id="sistema" name="sistema" value="`+ sistema +`"> 
                        <button type="submit">Escolher</button></form></div><br>`;
            t2 = t2 + t1;
            checked_a = " ";
            checked_b = " ";
       }
    
        //console.dir(data);    
        //console.log(data.result);

      } catch(err) {
        console.error(err)
     }

rest.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My CRUD in NodeJS</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
   
}

p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the content */
.content {
  background-color: #ddd;
  padding: 7px;
  //height: 280px; /* Should be removed. Only for demonstration */
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
}

.btn-group button {
  background-color: #4CAF50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 8px 22px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}


.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}

</style>

<script>

  function show_alert() {
    if ( confirm("Realmente que mudar o lobby?") == false ) {
      return false ;
    } else {
      return true ;
    }
  }

</script>


</head>
<body>

<div class="topnav" aling="center">

   <a href="index.html"><img src="pv3.png" alt="v3" width=100 height=80></a><br>
   <a href="#">Netplay Roms Hacks!<h2></a>
 
</div>
<div class="content">`+t2+`

</div>
  
<div class="topnav">
   
   <img src="bks2.png" alt="v3" width=350 height=120><br>
   <a href="#">Todos direitos Reservados<h2></a>
</div>
</body>
</html>

 `);

});

});

// Novo baixa rom exclusivo do batocera show325

app.use(_bodyParser.urlencoded({ extended: true }));

app.post('/show325',function (req, rest) {    
  
  console.log("show325 Sistema Recebido: "+req.body.sistema);
  console.log("game: "+req.body.game);
  console.log("nome: "+req.body.nome);
  console.log("tamanho: "+req.body.tamanho);      
  console.log("Sismin: "+req.body.sismin);
  console.log("link: "+req.body.link);
  console.log("link: "+req.body.pasta);
  console.log("extrairom: "+req.body.extrairom);
                                       
  
  
  var sistema = req.body.sistema; 
  
      //var executa = "sh /recalbox/scripts/hack.sh "+ req.body.hacks;
  var executa = "sh /usr/recalbox-manager2/config/sistemasdownload/scripts/baixarom.sh " 
  + req.body.sistema + " " 
  + req.body.game  + " " 
  + req.body.tamanho + " " 
  + req.body.sismin + " "
  + req.body.link + " "
  + req.body.pasta + " "
  + req.body.extrairom;
       
  console.log("log e : " + executa);
  
  exec(executa, function(err,stdout,stderr){
  console.log(stdout);});   

      executa = "sh /recalbox/scripts/reiniciaemu.sh ";     
      console.log("log e : " + executa);
      exec2(executa, function(err,stdout,stderr){     
           console.log(stdout);});       
                   
      rest.sendfile(_path.join(__dirname+'/romdown.html'));                                                                                                 
     
});

app.post('/show21', function (req, rest) {
 
  const fs = require('fs')
  
  console.log("Sistema Recebido: "+req.body.sistema)
  
  var sistema = req.body.sistema; 
                                                                      
  var caminho = "/usr/recalbox-manager2/config/hacks/"+req.body.sistema;
  
  console.log("Sistema Caminho: "+caminho)

  fs.readFile(caminho, 'utf8', (err, fileContents) => {
     if (err) {
     console.error(err)
     return
  }
  try {
        const data = JSON.parse(fileContents)
       //console.log(data[0].fields.id);
       
       var i;
       var t1 = ``;
       var t2 = ``
       var checked_a = ``;
       var checked_b = ``;
       var _hidden = '';
       
       for (i = 0; i < data.length; i++) {     
            
            if (data[i].ligado === data[i].rom + "_1") {
                checked_a = "checked";
                checked_b = " ";
                _hidden = "ligado"; 
                
            } else {
                checked_a = " ";
                checked_b = "checked";
                _hidden = "desligado";
            }
             
            t1 = `<br><p class="solid"><div class="btn-group"> 
                  
                  <form action="/show51" method="POST"> 
                        <h1><b><label>Game: ` + data[i].game + ` </label></h1></b></p><br>
                        <input type="radio" id="ligado" name="hacks" value="ligado" ` + checked_a + `>
                        <label for="ligado">ligada</label><br><br>
                        <input type="radio" id="desligado" name="hacks" value="desligado" ` + checked_b + `>
                        <label for="desligado">desligada</label><br><br>  
                        <input type="hidden" id="rom" name="rom" value="`+ data[i].rom +`">
                        <input type="hidden" id="status" name="status" value="`+ _hidden +`">
                        <input type="hidden" id="sistema" name="sistema" value="`+ sistema +`"> 
                        <button type="submit">Escolher</button></form></div><br>`;
            t2 = t2 + t1;
            checked_a = " ";
            checked_b = " ";
       }
    
        //console.dir(data);    
        //console.log(data.result);

      } catch(err) {
        console.error(err)
     }

rest.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My CRUD in NodeJS</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
   
}

p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the content */
.content {
  background-color: #ddd;
  padding: 7px;
  //height: 280px; /* Should be removed. Only for demonstration */
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
}

.btn-group button {
  background-color: #4CAF50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 8px 22px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}


.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}

</style>

<script>

  function show_alert() {
    if ( confirm("Realmente que mudar o lobby?") == false ) {
      return false ;
    } else {
      return true ;
    }
  }

</script>


</head>
<body>

<div class="topnav" aling="center">

   <a href="index.html"><img src="pv3.png" alt="v3" width=100 height=80></a><br>
   <a href="#">Netplay Roms Hacks!<h2></a>
 
</div>
<div class="content">`+t2+`

</div>
  
<div class="topnav">
   
   <img src="bks2.png" alt="v3" width=350 height=120><br>
   <a href="#">Todos direitos Reservados<h2></a>
</div>
</body>
</html>

 `);

});

});


// Fim novo baixa rom show325


app.post('/show22', function (req, rest) {
 
  const fs = require('fs')
  
  console.log("Sistema Recebido: "+req.body.sistema)
  console.log("Sismin: "+req.body.sismin);
  
  var sistema = req.body.sistema; 
                                                                      
  var caminho = "/usr/recalbox-manager2/config/confdowload/"+req.body.sistema+".json";   
  
  console.log("Sistema Caminho: "+caminho)

  fs.readFile(caminho, 'utf8', (err, fileContents) => {
     if (err) {
     console.error(err)
     return
  }
  try {
        const data = JSON.parse(fileContents)
       //console.log(data[0].fields.id);
       
       var i;
       var t1 = ``;
       var t2 = ``
       var checked_a = ``;
       var checked_b = ``;
       var div1 = `<div class="btn-group">`;
       var div2 = `</div>`
       var l1 = ``;
       var l2 = ``;
       var lant = ``; 
       var primeiraletra = "*";   
       
       console.log("letra: "+ req.body.letra);
       
       
       for (i = 0; i < data.length; i++) {     
            
             
           if (lant != data[i].letra) {
              
               if( primeiraletra === "*" ){
                   if (req.body.letra === "tudo" ){
                       req.body.letra = data[i].letra;
                       primeiraletra = "***"
                   }
                   primeiraletra = "***"      
               }
                
               l1 = `<form action="/show22" method="POST">                                         
                        <input type="hidden" id="sistema" name="sistema" value="`+ sistema +`"/>
                        <input type="hidden" id="letra" name="letra" value="`+ data[i].letra +`"/>
                        <input type="hidden" id="sismin" name="sismin" value="`+ req.body.sismin +`"/>
                        <button type="submit">` + data[i].letra + `</button>        
                      </form>`;
                   
                l2 = l2 + l1;
                lant = data[i].letra;  
           }       
                           
             
            
            if (req.body.letra === "tudo" ){
                if (data[i].game != "*"){
                    t1 = `<br><p class="solid"><div class="btn-group"> 
                          
                          <form id="myform" action="/show99" method="POST" onsubmit="return show_alert();"> 
                                <h5><b><label>JOGO : ` + data[i].nome + ` </label></h5></b></p>
                                <h5><b><label>Tamanho : ` + data[i].tamanho + ` </label></h5></b></p>
                                
                                 
                                <input type="hidden" id="game" name="game" value="`+ data[i].game +`">
                                <input type="hidden" id="nome" name="nome" value="`+ data[i].nome +`">
                                <input type="hidden" id="sistema" name="sistema" value="`+ sistema +`">
                                <input type="hidden" id="tamanho" name="tamanho" value="`+ data[i].tamanho +`">    
                                <input type="hidden" id="sismin" name="sismin" value="`+ req.body.sismin +`"/> 
                                <button type="submit" value="Submit" >Download</button></form></div><br> 
                                &nbsp; <b><h2>Ver no:</b> <a href="https://www.youtube.com/results?search_query='`+ data[i].nome + `%`+ req.body.sismin + `'  "><img src="yt.png" alt="v3" width="80" height="30"></a></h2>`;    
                    t2 = t2 + t1;                                                                                                  
                    checked_a = " ";
                    checked_b = " ";    
                }
            
            }else{
                 if (req.body.letra === data[i].letra ){
                     t1 = `<br><p class="solid"><div class="btn-group"> 
                      
                     <form id="myform" action="/show99" method="POST" onsubmit="return show_alert();">   
                            <h5><b><label>JOGO : ` + data[i].nome + ` </label></h5></b></p>
                            <h5><b><label>Tamanho : ` + data[i].tamanho + ` </label></h5></b></p>        
                                                                                                                               
                            <input type="hidden" id="game" name="game" value="`+ data[i].game +`">                               
                            <input type="hidden" id="nome" name="nome" value="`+ data[i].nome +`">
                            <input type="hidden" id="sistema" name="sistema" value="`+ sistema +`">
                            <input type="hidden" id="tamanho" name="tamanho" value="`+ data[i].tamanho +`">                 
                            <input type="hidden" id="sismin" name="sismin" value="`+ req.body.sismin +`"/> 
                            <button type="submit" value="Submit">Download</button></form></div><br> 
                            &nbsp; <b><h2>Ver no:</b> <a href="https://www.youtube.com/results?search_query='`+ data[i].nome + `%`+ req.body.sismin + `'  "><img src="yt.png" alt="v3" width="80" height="30"></a></h2>`;
                     t2 = t2 + t1;
                     checked_a = " ";
                     checked_b = " ";      
                 
                 
                 }
            }    
       }
    
        //console.dir(data);    
        //console.log(data.result);

      } catch(err) {
        console.error(err)
     }

rest.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My CRUD in NodeJS</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
   
}

p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}   

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}


/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the content */
.content {
  background-color: #ddd;
  padding: 7px;
  //height: 280px; /* Should be removed. Only for demonstration */
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
}

.btn-group button {
  background-color: #4CAF50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 6px 18px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}


.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}

#pageloader
{
  background: rgba( 255, 255, 255, 0.8 );
  display: none;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 9999;
}

#pageloader img
{
  left: 50%;
  margin-left: -32px;
  margin-top: -32px;
  position: absolute;
  top: 50%;
}


</style>                                                                                             

<script>

  function show_alert() {
    if ( confirm("Deseja Realmente Baixar?") == false ) {         
      return false ;
    } else {
      return true ;
    }
  }

</script>
     

</head>
<body>



<div class="topnav" aling="center">                    

   <a href="index.html"><img src="`+ req.body.sismin+`.png" alt="v3" width="170" height="60"></a><br>
   <a href="#">Download de Jogos do ` + req.body.sistema +`<h2></a>    
 
</div> 

<div class="content">

` + div1 + l2 + div2 + `<br>         
`+t2+`

</div>
  
<div class="topnav">
   
   <img src="bks2.png" alt="v3" width=350 height=120><br>
   <a href="#">Todos direitos Reservados<h2></a>
</div>
</body>
</html>

 `);

});

});


// --- Fim da lista de jogos dinamica


// --- Nova lista dinamica de jogos show322

app.post('/show322', function (req, rest) {
 
  const fs = require('fs')
  
  console.log("Sistema Recebido: "+req.body.sistema)
  console.log("Sismin: "+req.body.sismin);
  console.log("link : "+req.body.link);
  console.log("Pasta: "+req.body.pasta);
  console.log("Caminho : "+req.body.caminho);
  console.log("Imagem : "+req.body.imagem);
  console.log("Imagem : "+req.body.extrairom);
  
  var caminho2 = req.body.caminho + req.body.imagem; 
  
  
  var sistema = req.body.sistema; 
                                                                      
  var caminho = "/usr/recalbox-manager2/config/sistemasdownload/listaJogos/"+req.body.sistema+".json";   
  
  console.log("Sistema Caminho: "+caminho)

  fs.readFile(caminho, 'utf8', (err, fileContents) => {
     if (err) {
     console.error(err)
     return
  }
  try {
        const data = JSON.parse(fileContents)
       //console.log(data[0].fields.id);
       
       var i;
       var t1 = ``;
       var t2 = ``
       var checked_a = ``;
       var checked_b = ``;
       var div1 = `<div class="btn-group">`;
       var div2 = `</div>`
       var l1 = ``;
       var l2 = ``;
       var lant = ``; 
       var primeiraletra = "*";   
       
       console.log("letra: "+ req.body.letra);
       
       
       for (i = 0; i < data.length; i++) {     
            
             
           if (lant != data[i].letra) {
              
               if( primeiraletra === "*" ){
                   if (req.body.letra === "tudo" ){
                       req.body.letra = data[i].letra;
                       primeiraletra = "***"
                   }
                   primeiraletra = "***"      
               }
                
               l1 = `<form action="/show322" method="POST">                                         
                        <input type="hidden" id="sistema" name="sistema" value="`+ sistema +`"/>
                        <input type="hidden" id="letra" name="letra" value="`+ data[i].letra +`"/>
                        <input type="hidden" id="sismin" name="sismin" value="`+ req.body.sismin +`"/>
                        <input type="hidden" id="link" name="link" value="`+ req.body.link +`" />
                        <input type="hidden" id="pasta" name="pasta" value="`+ req.body.pasta +`" />
                        <input type="hidden" id="caminho" name="caminho" value="`+ req.body.caminho +`" />
                        <input type="hidden" id="extrairom" name="extrairom" value="`+ req.body.extrairom +`" />
                        
                        <input type="hidden" id="imagem" name="imagem" value="`+ req.body.imagem +`" />
                        
 
                        
                        <button type="submit">` + data[i].letra + `</button>        
                      </form>`;
                   
                l2 = l2 + l1;
                lant = data[i].letra;  
           }       
                           
             
            
            if (req.body.letra === "tudo" ){
                if (data[i].game != "*"){
                    t1 = `<br><p class="solid"><div class="btn-group"> 
                          
                          <form id="myform" action="/show99" method="POST" onsubmit="return show_alert();"> 
                                <h5><b><label>JOGO : ` + data[i].nome + ` </label></h5></b></p>
                                <h5><b><label>Tamanho : ` + data[i].tamanho + ` </label></h5></b></p>
                                
                                 
                                <input type="hidden" id="game" name="game" value="`+ data[i].game +`">
                                <input type="hidden" id="nome" name="nome" value="`+ data[i].nome +`">
                                <input type="hidden" id="sistema" name="sistema" value="`+ sistema +`">
                                <input type="hidden" id="tamanho" name="tamanho" value="`+ data[i].tamanho +`">    
                                <input type="hidden" id="sismin" name="sismin" value="`+ req.body.sismin +`"/>
                                <input type="hidden" id="link" name="link" value="`+ req.body.link +`" />
                                <input type="hidden" id="pasta" name="pasta" value="`+ req.body.pasta +`" />
                                <input type="hidden" id="extrairom" name="extrairom" value="`+ req.body.extrairom +`" />

                                 
                                <button type="submit" value="Submit" >Download</button></form></div><br> 
                                &nbsp; <b><h2>Ver no:</b> <a href="https://www.youtube.com/results?search_query='`+ data[i].nome + `%`+ req.body.sismin + `'  "><img src="yt.png" alt="v3" width="80" height="30"></a></h2>`;    
                    t2 = t2 + t1;                                                                                                  
                    checked_a = " ";
                    checked_b = " ";    
                }
            
            }else{
                 if (req.body.letra === data[i].letra ){
                     t1 = `<br><p class="solid"><div class="btn-group"> 
                      
                     <form id="myform" action="/show99" method="POST" onsubmit="return show_alert();">   
                            <h5><b><label>JOGO : ` + data[i].nome + ` </label></h5></b></p>
                            <h5><b><label>Tamanho : ` + data[i].tamanho + ` </label></h5></b></p>        
                                                                                                                               
                            <input type="hidden" id="game" name="game" value="`+ data[i].game +`">                               
                            <input type="hidden" id="nome" name="nome" value="`+ data[i].nome +`">
                            <input type="hidden" id="sistema" name="sistema" value="`+ sistema +`">
                            <input type="hidden" id="tamanho" name="tamanho" value="`+ data[i].tamanho +`">                 
                            <input type="hidden" id="sismin" name="sismin" value="`+ req.body.sismin +`"/> 
                            
                            <input type="hidden" id="link" name="link" value="`+ req.body.link +`" />
                            <input type="hidden" id="pasta" name="pasta" value="`+ req.body.pasta +`" />
                            <input type="hidden" id="extrairom" name="extrairom" value="`+ req.body.extrairom +`" />
                            
                            <button type="submit" value="Submit">Download</button></form></div><br> 
                            &nbsp; <b><h2>Ver no:</b> <a href="https://www.youtube.com/results?search_query='`+ data[i].nome + `%`+ req.body.sismin + `'  "><img src="yt.png" alt="v3" width="80" height="30"></a></h2>`;
                     t2 = t2 + t1;
                     checked_a = " ";
                     checked_b = " ";      
                 
                 
                 }
            }    
       }
    
        //console.dir(data);    
        //console.log(data.result);

      } catch(err) {
        console.error(err)
     }

rest.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My CRUD in NodeJS</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
   
}

p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}   

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}


/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the content */
.content {
  background-color: #ddd;
  padding: 7px;
  //height: 280px; /* Should be removed. Only for demonstration */
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
}

.btn-group button {
  background-color: #4CAF50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 6px 18px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}


.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}

#pageloader
{
  background: rgba( 255, 255, 255, 0.8 );
  display: none;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 9999;
}

#pageloader img
{
  left: 50%;
  margin-left: -32px;
  margin-top: -32px;
  position: absolute;
  top: 50%;
}


</style>                                                                                             

<script>

  function show_alert() {
    if ( confirm("Deseja Realmente Baixar?") == false ) {         
      return false ;
    } else {
      return true ;
    }
  }

</script>
     

</head>
<body>



<div class="topnav" aling="center">                    

   <a href="index.html"><img src="`+ caminho2 +`" alt="v3" width="170" height="60"></a><br>
   <a href="#">Download de Jogos do ` + req.body.sistema +`<h2></a>    
 
</div> 

<div class="content">

` + div1 + l2 + div2 + `<br>         
`+t2+`

</div>
  
<div class="topnav">
   
   <img src="bks2.png" alt="v3" width=350 height=120><br>
   <a href="#">Todos direitos Reservados<h2></a>
</div>
</body>
</html>

 `);

});

});

// -- Cria lista de cores para atualizar

app.use(_bodyParser.urlencoded({ extended: true }));

app.post('/core01',function (req, rest) {    
  
  console.log("core: "+req.body.core);
  console.log("base: "+req.body.base);
  console.log("dir: "+req.body.dir);
  console.log("pasta: "+req.body.pasta);      
  console.log("atualiza: "+req.body.atualiza);
  console.log("link: "+req.body.link);        

rest.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My CRUD in NodeJS</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
   
}

p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the content */
.content {
  background-color: #ddd;
  padding: 7px;
  height: 260px; /* Should be removed. Only for demonstration */
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
}                                                                                               

.btn-group button {  
  background-color: #4CAF50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 8px 22px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}


.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}

</style>

</head>
<body>

<div class="topnav" aling="center">

   <a href="index.html"><img src="pv3.png" alt="v3" width=100 height=80></a><br>   
   <a href="#">Fazendo Download/Atualizado Emulador `+ req.body.core +`<h2></a>
 
</div> 

<div class="content">
    <img src="download.gif" alt="download" width=350 height=220>
</div>

<div class="topnav">
   <img src="bks2.png" alt="v3" width=350 height=120><br>
   <a href="#">Todos direitos Reservados<h2></a>    
</div>

    <form name="myform" action="/core02" method="POST" >
       <input type="hidden" id="core" name="core" value="`+ req.body.core +`">
       <input type="hidden" id="base" name="base" value="`+ req.body.base +`">
       <input type="hidden" id="dir" name="dir" value="`+ req.body.dir +`">
       <input type="hidden" id="pasta" name="pasta" value="`+ req.body.pasta +`">
       <input type="hidden" id="atualiza" name="atualiza" value="`+ req.body.atualiza +`">
       <input type="hidden" id="link" name="link" value="`+ req.body.link +`">  
    </form>
    <script type="text/javascript">
       document.myform.submit();
     </script>
</body>
</html>`
);       
});

// -- Fim lista de cores para atrualizar

// -- Inivio fo core02 para atualizar o emulador

app.use(_bodyParser.urlencoded({ extended: true }));

app.post('/core02',function (req, rest) {    
  
  console.log(" Core02 core: "+req.body.core);
  console.log("base: "+req.body.base);
  console.log("dir: "+req.body.dir);
  console.log("pasta: "+req.body.pasta);      
  console.log("atualiza: "+req.body.atualiza);                                       
  
  
  var executa = " ";  
  if (req.body.atualiza === 's') {
      executa = "sh /usr/recalbox-manager2/config/sistemasdownload/scripts/baixacore.sh " 
      + req.body.core + " " 
      + req.body.base  + " " 
      + req.body.dir + " " 
      + req.body.pasta + " "
      + req.body.atualiza + " "
      + req.body.link + " ";
  }else{
      executa = "sh /usr/recalbox-manager2/config/sistemasdownload/scripts/baixacore2.sh " 
      + req.body.core + " " 
      + req.body.base  + " " 
      + req.body.dir + " " 
      + req.body.pasta + " "
      + req.body.atualiza + " "
      + req.body.link + " ";
  };
          
  console.log("log e : " + executa);
  
  exec(executa, function(err,stdout,stderr){
  console.log(stdout);});   
  
  rest.sendfile(_path.join(__dirname+'/atualizado.html'));                                                                                          
     
});

// -- Fim fo core02 para atualizar o emulador


app.post('/cores', function (req, rest) {
 
  const fs = require('fs')
  
  console.log("Carregando cores para atualização do app") 
                                                                      
  var caminho = "/usr/recalbox-manager2/config/sistemasdownload/main/cores.json";   
  
  fs.readFile(caminho, 'utf8', (err, fileContents) => {
     if (err) {
     console.error(err)
     return
  }
  try {
        const data = JSON.parse(fileContents)
       //console.log(data[0].fields.id);
       
       var i;
       var t1 = ``;
       var t2 = ``
       var checked_a = ``;
       var checked_b = ``;
       var div1 = `<div class="btn-group">`;      
       var div2 = `</div>`
       var l1 = ``;
       var l2 = ``;        
       var lant = ``; 
       var primeiraletra = "*";
       var caminho2 = ``;   
       
       for (i = 0; i < data.length; i++) {     
            
             
           if (data[i].ativo != "n") {
               console.log("Sistema core: "+data[i].core);
               console.log("Sistema sistema: "+data[i].descricao);
            
               t1 = `<br><div class="w3-container">
               <form action="/core01" method="POST"> 
               <input type="hidden" id="core" name="core" value="`+ data[i].core +`">
               <input type="hidden" id="base" name="base" value="`+ data[i].base +`">
               <input type="hidden" id="dir" name="dir" value="`+ data[i].dir +`">
               <input type="hidden" id="pasta" name="pasta" value="`+ data[i].pasta +`">
               <input type="hidden" id="atualiza" name="atualiza" value="`+ data[i].atualiza +`">
               <input type="hidden" id="link" name="link" value="`+ data[i].link +`">
               <button class="w3-button w3-block w3-black" type="submit">`+ data[i].descricao + `</button></form></div>`;
               
               t2 = t2 + t1;
               checked_a = " ";
               checked_b = " ";
            }       
        }
 
      } catch(err) {
        console.error(err)
     }

rest.send(`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="shortcut icon" href="/favicon.png">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <title>ATUALIZAÇÃO DE EMULADOTES - MANAGER </title>
        <style>
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 8px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the content */
.content {
  background-color: #ddd;
  padding: 7px;
  height: 500px; /* Should be removed. Only for demonstration */
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
}
 
</style>                                                                                             

<script>

  function show_alert() {
    if ( confirm("Deseja Realmente Baixar?") == false ) {         
      return false ;
    } else {
      return true ;
    }
  }

</script>
     

</head>
<body>



<div class="topnav" aling="center">                    

   <a href="index.html"><img src="pv3.png" alt="v3" width="170" height="110"></a><br>
   <a href="#">Atualizacao de Emuladores<h2></a>    
 
</div> 

<div class="content">
         
`+t2+`

</div>
  
<div class="topnav">
   
   <img src="bks2.png" alt="v3" width=350 height=120><br>
   <a href="#">Todos direitos Reservados<h2></a>
</div>
</body>
</html>

 `);

});

});

// Criar o gif de download de core


// Fim Criar o gif de download de core 


// --- Criar a lista de sistemas para download dinamico 

app.post('/main', function (req, rest) {
 
  const fs = require('fs')
  
  console.log("Carregando Botoes do Menu principal do app")
                                                                      
  var caminho = "/usr/recalbox-manager2/config/sistemasdownload/main/main.json";   
  
  fs.readFile(caminho, 'utf8', (err, fileContents) => {
     if (err) {
     console.error(err)
     return
  }
  try {
        const data = JSON.parse(fileContents)
       //console.log(data[0].fields.id);
       
       var i;
       var t1 = ``;
       var t2 = ``
       var checked_a = ``;
       var checked_b = ``;
       var div1 = `<div class="btn-group">`;      
       var div2 = `</div>`
       var l1 = ``;
       var l2 = ``;        
       var lant = ``; 
       var primeiraletra = "*";
       var caminho2 = ``;   
       
       for (i = 0; i < data.length; i++) {     
            
             
           if (data[i].ativo != "n") {
                     
                     
                     console.log("Sistema sistema: "+data[i].tela);
                     console.log("Sistema sistema: "+data[i].descricao);
                                          
                     t1 = `<br><div class="w3-container">
                     
                     <a href="`+ data[i].tela +`" class="w3-button w3-block w3-black">`+ data[i].descricao +`</a></div>`;
                     
                     t2 = t2 + t1;
                     checked_a = " ";
                     checked_b = " ";      
                   
           }       
  
       }
    
        //console.dir(data);    
        //console.log(data.result);

      } catch(err) {
        console.error(err)
     }

rest.send(`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="shortcut icon" href="/favicon.png">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <title>Tela Principal BKS PLAYARCH ATUALIZAÇÃO DE EMULADOTES E RECALBOX - MANAGER </title>
        <style>
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 8px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the content */
.content {
  background-color: #ddd;
  padding: 7px;
  height: 500px; /* Should be removed. Only for demonstration */
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
}
 
</style>                                                                                             

<script>

  function show_alert() {
    if ( confirm("Deseja Realmente Baixar?") == false ) {         
      return false ;
    } else {
      return true ;
    }
  }

</script>
     

</head>
<body>



<div class="topnav" aling="center">                    

   <a href="index.html"><img src="pv3.png" alt="v3" width="170" height="110"></a><br>
   <a href="#">Painel Principal<h2></a>    
 
</div> 

<div class="content">
         
`+t2+`

</div>
  
<div class="topnav">
   
   <img src="bks2.png" alt="v3" width=350 height=120><br>
   <a href="#">Todos direitos Reservados<h2></a>
</div>
</body>
</html>

 `);

});

});

// Gerador de Menu Principal do Sistema Main

app.post('/show300', function (req, rest) {
 
  const fs = require('fs')
  
  console.log("Carregando Sistemas Ativos Para Download")
                                                                      
  var caminho = "/usr/recalbox-manager2/config/sistemasdownload/sistema/sistemas.json";   
  
  fs.readFile(caminho, 'utf8', (err, fileContents) => {
     if (err) {
     console.error(err)
     return
  }
  try {
        const data = JSON.parse(fileContents)
       //console.log(data[0].fields.id);
       
       var i;
       var t1 = ``;
       var t2 = ``
       var checked_a = ``;
       var checked_b = ``;
       var div1 = `<div class="btn-group">`;      
       var div2 = `</div>`
       var l1 = ``;
       var l2 = ``;        
       var lant = ``; 
       var primeiraletra = "*";
       var caminho2 = ``;   
       
       for (i = 0; i < data.length; i++) {     
            
             
           if (data[i].ativo != "n") {
                     
                     caminho2 = data[i].caminho + data[i].imagem;
                     console.log("Sistema sistema: "+data[i].sistema);
                     console.log("Sistema sistema: "+data[i].link);
                     console.log("Sistema sistema: "+data[i].caminho);
                     console.log("Sistema sistema: "+data[i].pasta);
                     console.log("Sistema sistema: "+data[i].imagem);
                     console.log("Sistema sistema: "+data[i].extrairom);
                     console.log("Sistema caminho2: "+caminho2);
                     
                     //t1 = `<br><p class="content">
                     t1 = `
                      
                     <form id="`+ data[i].sistema +`" action="/show322" method="POST" >   
                            <input type="hidden" id="sistema" name="sistema" value="`+ data[i].sistema +`" />
                            <input type="hidden" id="sismin" name="sismin" value="`+ data[i].sistema +`" />
                            <input type="hidden" id="link" name="link" value="`+ data[i].link +`" />
                            <input type="hidden" id="pasta" name="pasta" value="`+ data[i].pasta +`" />
                            <input type="hidden" id="caminho" name="caminho" value="`+ data[i].caminho +`" />
                            <input type="hidden" id="imagem" name="imagem" value="`+ data[i].imagem +`" />
                            <input type="hidden" id="extrairom" name="extrairom" value="`+ data[i].extrairom +`" />
                            <input type="hidden" id="letra" name="letra" value="tudo"/>         
                            <input type="image" name="submit" src="`+ data[i].caminho + data[i].imagem +`" width="320" height="100" /> </form>   
                            `;
                     t2 = t2 + t1;
                     checked_a = " ";
                     checked_b = " ";      
                   
           }       
  
       }
    
        //console.dir(data);    
        //console.log(data.result);

      } catch(err) {
        console.error(err)
     }

rest.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My CRUD in NodeJS</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
   
}

p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}   

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}


/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the content */
.content {
  background-color: #ddd;
  padding: 7px;
  //height: 280px; /* Should be removed. Only for demonstration */
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
}

.btn-group button {
  background-color: #4CAF50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 6px 18px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}


.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}

#pageloader
{
  background: rgba( 255, 255, 255, 0.8 );
  display: none;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 9999;
}

#pageloader img
{
  left: 50%;
  margin-left: -32px;
  margin-top: -32px;
  position: absolute;
  top: 50%;
}


</style>                                                                                             

<script>

  function show_alert() {
    if ( confirm("Deseja Realmente Baixar?") == false ) {         
      return false ;
    } else {
      return true ;
    }
  }

</script>
     

</head>
<body>



<div class="topnav" aling="center">                    

   <a href="index.html"><img src="pv3.png" alt="v3" width="170" height="110"></a><br>
   <a href="#">Download de Jogos<h2></a>    
 
</div> 

<div class="content">
         
`+t2+`

</div>
  
<div class="topnav">
   
   <img src="bks2.png" alt="v3" width=350 height=120><br>
   <a href="#">Todos direitos Reservados<h2></a>
</div>
</body>
</html>

 `);

});

});


// Fim do Menu Princial do Sistema Main



//  --- Fim da nova lista dinamica de jogos show322




                                                               
// ---Cria o Botao de baixar jogo geral ou especiofico do Sergio Graca -------                                                               
                                                               
app.post('/show100', function (req, rest) {
 
  const fs = require('fs')
  
  console.log("Sistema Recebido: "+req.body.sistema)
 
    
  var sistema = req.body.sistema; 
                                                                      
  var caminho = "/usr/recalbox-manager2/config/confdowload/jogossergio.json";     
  
  console.log("Sistema Caminho: "+caminho)

  fs.readFile(caminho, 'utf8', (err, fileContents) => {
     if (err) {
     console.error(err)
     return
  }
  try {
        const data = JSON.parse(fileContents)
       //console.log(data[0].fields.id);
       
       var i;
       var j;
       var t1 = ``;
       var t2 = ``
       var checked_a = ``;
       var checked_b = ``;
       var div1 = `<div class="btn-group">`;
       var div2 = `</div>`
       var l1 = ``;
       var z1 = ``;
       var l2 = ``;
       var lant = ``;    
       var arcade = ``;
       var letra = ``;
       var primeiroletra = "*";
          
       
       z1 = `<form action="/show102" method="POST" onsubmit="return show_alert();">
                        <input type="hidden" id="sistema" name="sistema" value="`+ req.body.sistema +`"/>
                        <button type="submit">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Baixar todos (` + req.body.sistema + `)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>        
                      </form>`;
                                          
       
       for (j = 0; j < data.length; j++) {     
           if (req.body.sistema === data[j].sistema ){ 
               if (lant != data[j].letra) {

                   if (primeiroletra === "*"){
                       primeiroletra = data[j].letra;
                   }
                   
                   l1 = `<form action="/show100" method="POST">                                         
                            <input type="hidden" id="sistema" name="sistema" value="`+ data[j].sistema +`" />
                            <input type="hidden" id="letra" name="letra" value="`+ data[j].letra +`"/>
                            <button type="submit">` + data[j].letra + `</button>        
                         </form>`;
                       
                    l2 = l2 + l1;
                    lant = data[j].letra;  
               } 
           }     
       }               
       
       
       for (i = 0; i < data.length; i++) {     
            
            
            if (data[i].sismin === "fbneo"){
                arcade = `arcade`;           
            }else{
                arcade = data[i].sismin;   
            }    
            
            if (req.body.sistema === data[i].sistema ){
                      
               if (req.body.letra === "tudo" ){
                  letra = primeiroletra; 
               }else{
                  letra = req.body.letra;   
               }
               
               if ( letra === data[i].letra ){     
               
                    t1 = `<br><p class="solid"><div class="btn-group"> 
                          
                          <form id="myform" action="/show101" method="POST" onsubmit="return show_alert();"> 
                                <h5><b><label>JOGO : ` + data[i].roms + ` </label></h5></b></p>
                                <h5><b><label>Tamanho : ` + data[i].tamanho + ` </label></h5></b></p>    
                                
                                 
                                <input type="hidden" id="sistema" name="sistema" value="`+ data[i].sistema +`">
                                <input type="hidden" id="roms" name="roms" value="`+ data[i].roms +`">
                                <input type="hidden" id="url" name="url" value="`+ data[i].url +`">
                                <input type="hidden" id="tamanho" name="tamanho" value="`+ data[i].tamanho +`">    
                                <input type="hidden" id="sismin" name="sismin" value="`+ data[i].sismin +`"/>
                                <input type="hidden" id="caminho" name="caminho" value="`+ data[i].caminho +`"/>                                 
                                <button type="submit" value="Submit" >Download</button></form></div><br> 
                                &nbsp; <b><h2>Ver no:</b> <a href="https://www.youtube.com/results?search_query='`+ data[i].roms + `&nbsp;`+ arcade + `' "><img src="yt.png" alt="v3" width="80" height="30"></a></h2>`;    
                    t2 = t2 + t1;                                                                                                  
                    checked_a = " ";
                    checked_b = " ";    
                }     
                                                        
            }    
       }
    
        //console.dir(data);    
        //console.log(data.result);

      } catch(err) {
        console.error(err)
     }

rest.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My CRUD in NodeJS</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
   
}

p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}   

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}


/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the content */
.content {
  background-color: #ddd;
  padding: 7px;
  //height: 280px; /* Should be removed. Only for demonstration */
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
}

.btn-group button {
  background-color: #4CAF50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 6px 18px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}


.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}

#pageloader
{
  background: rgba( 255, 255, 255, 0.8 );
  display: none;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 9999;
}

#pageloader img
{
  left: 50%;
  margin-left: -32px;
  margin-top: -32px;
  position: absolute;
  top: 50%;
}


</style>

<script>

  function show_alert() {
    if ( confirm("Deseja Realmente Baixar?") == false ) {
      return false ;
    } else {
      return true ;
    }
  }

</script>                                                                                                  

</head>
<body>



<div class="topnav" aling="center">                    

   <a href="index.html"><img src="`+ req.body.sistema+`.png" alt="v3" width="170" height="60"></a><br>
   <a href="#">Download de Jogos do ` + req.body.sistema +`<h2></a>    
 
</div> 

<div class="content">

` + div1 + z1 + div2 + `<br>
` + div1 + l2 + div2 + `<br>
`+t2+`

</div>
  
<div class="topnav">                                     
   
   <img src="bks2.png" alt="v3" width=350 height=120><br>
   <a href="#">Todos direitos Reservados<h2></a>
</div>
</body>
</html>

 `);

});

});

//--------- Gera o Gif de download por jogo do Sergio Graca ------------------


app.use(_bodyParser.urlencoded({ extended: true }));

app.post('/show101',function (req, rest) {    

  console.log("Sistema Recebido: "+req.body.sistema);
  console.log("Sistema ROM: " + req.body.roms); 
  console.log("Sistema url: "+ req.body.url);
  console.log("Sistema tamanho: "+ req.body.tamanho);    
  console.log("Sistema sismin: "+ req.body.sismin);
  console.log("Sistema caminho: "+ req.body.caminho);

rest.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My CRUD in NodeJS</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
   
}

p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the content */
.content {
  background-color: #ddd;
  padding: 7px;
  height: 260px; /* Should be removed. Only for demonstration */
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
}                                                                                               

.btn-group button {  
  background-color: #4CAF50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 8px 22px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}


.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}

</style>

</head>
<body>

<div class="topnav" aling="center">

   <a href="index.html"><img src="pv3.png" alt="v3" width=100 height=80></a><br>   
   <a href="#">Fazendo Download da Rom `+ req.body.roms +`<h2></a>
 
</div> 

<div class="content">
    <img src="download.gif" alt="download" width=350 height=220>
</div>

<div class="topnav">
   <img src="bks2.png" alt="v3" width=350 height=120><br>
   <a href="#">Todos direitos Reservados<h2></a>    
</div>

    <form name="myform" action="/show103" method="POST" >
         <input type="hidden" id="sistema" name="sistema" value="`+ req.body.sistema +`">
         <input type="hidden" id="roms" name="roms" value="`+ req.body.roms +`">
         <input type="hidden" id="url" name="url" value="`+ req.body.url +`">
         <input type="hidden" id="tamanho" name="tamanho" value="`+ req.body.tamanho +`">    
         <input type="hidden" id="sismin" name="sismin" value="`+ req.body.sismin +`"/>
         <input type="hidden" id="caminho" name="caminho" value="`+ req.body.caminho +`"/>
    </form>
    <script type="text/javascript">
       document.myform.submit();
     </script>
</body>
</html>`
);       
});

 
//-----------Gera o Gif de Download de todos os games do Sergio Graca---------



app.use(_bodyParser.urlencoded({ extended: true }));

app.post('/show102',function (req, rest) {    
  
  console.log("Sistema Recebido: "+req.body.sistema);

rest.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My CRUD in NodeJS</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
   
}

p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the content */
.content {
  background-color: #ddd;
  padding: 7px;
  height: 260px; /* Should be removed. Only for demonstration */
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
}                                                                                               

.btn-group button {  
  background-color: #4CAF50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 8px 22px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}


.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}

</style>

</head>
<body>

<div class="topnav" aling="center">

   <a href="index.html"><img src="pv3.png" alt="v3" width=100 height=80></a><br>   
   <a href="#">Baixando todas Roms do `+ req.body.sistema +`<h2></a>
 
</div> 

<div class="content">
    <img src="download.gif" alt="download" width=350 height=220>
</div>

<div class="topnav">
   <img src="bks2.png" alt="v3" width=350 height=120><br>
   <a href="#">Todos direitos Reservados<h2></a>    
</div>

    <form name="myform" action="/show104" method="POST" >
          <input type="hidden" id="sistema" name="sistema" value="`+ req.body.sistema +`">
    </form>
    <script type="text/javascript">
       document.myform.submit();
     </script>
</body>
</html>`
);       
});

//----------Baixa por jogo escolhido do Sergio Graca----------------------------

app.use(_bodyParser.urlencoded({ extended: true }));

app.post('/show103',function (req, rest) {    
  
  console.log("Sistema Recebido: "+req.body.sistema);
  console.log("Sistema ROM: " + req.body.roms); 
  console.log("Sistema url: "+ req.body.url);
  console.log("Sistema tamanho: "+ req.body.tamanho);    
  console.log("Sistema sismin: "+ req.body.sismin);
  console.log("Sistema caminho: "+ req.body.caminho);        
                                                           
  
  var sistema = req.body.sistema; 
  
      //var executa = "sh /recalbox/scripts/hack.sh "+ req.body.hacks;
      var executa = "";
      var executa2 = ""; 
      if (req.body.sistema === "segacd"){     
           executa = "sh /recalbox/scripts/romsergiodown.sh " + req.body.sistema + " " + req.body.url + " " + req.body.url  + " " + req.body.caminho;
      }else{
           executa = "sh /recalbox/scripts/romsergiodown.sh " + req.body.sistema + " " + req.body.roms + " " + req.body.url  + " " + req.body.caminho;     
      }
      
      if (req.body.sistema === "pcenginecd"){      
           executa = "sh /recalbox/scripts/romsergiodown.sh " + req.body.sistema + " " + req.body.url + " " + req.body.url  + " " + req.body.caminho;
      }     
                                                
      console.log("log e : " + executa);
      exec(executa, function(err,stdout,stderr){
      console.log(stdout);});
      
      executa2 = "sh /recalbox/scripts/reiniciaemu.sh"; 
          
      console.log("log e : " + executa2);
      exec2(executa2, function(err,stdout,stderr){
           console.log(stdout);}); 
                                           
      rest.sendfile(_path.join(__dirname+'/romdown.html'));                                                                                                   
     
});    
   

//-------Baixa todos os games por sistema do Sergio Graca----------

app.use(_bodyParser.urlencoded({ extended: true }));

var _spawn = require('child_process').execSync;

app.post('/show104', function (req, rest) {
 
  const fs = require('fs')
  
  console.log("Sistema Recebido: "+req.body.sistema)
    
  var sistema = req.body.sistema; 
                                                                      
  var caminho = "/usr/recalbox-manager2/config/confdowload/jogossergio.json";      
    
  fs.readFile(caminho, 'utf8', (err, fileContents) => {
     if (err) {
     console.error(err)
     return
  }
  try {
        const data = JSON.parse(fileContents)
       //console.log(data[0].fields.id);
       
       var i;
       var executa = ` `;                                              
       
       for (i = 0; i < data.length; i++) {                                                                    
            
            if (req.body.sistema === data[i].sistema ){
                
               //var executa = "sh /recalbox/scripts/hack.sh "+ req.body.hacks;
               executa = "sh /recalbox/scripts/romsergiodown.sh " + data[i].sistema + " " + data[i].roms + " " + data[i].url  + " " + data[i].caminho;     
               console.log("log e : " + executa);
               _spawn(executa, function(err,stdout,stderr){
                    console.log(stdout);                                    
               })    
            }         
                                                                                    
        //console.dir(data);    
        //console.log(data.result);     
       }

       executa = "sh /recalbox/scripts/reiniciaemu.sh ";     
       console.log("log e : " + executa);
       exec2(executa, function(err,stdout,stderr){     
           console.log(stdout);                                    
       });       
       
       rest.sendfile(_path.join(__dirname+'/romdown.html'));     
       
        
  } catch(err) {
        console.error(err)    
  }

});

});
   
   
//---------------------------------------------------------------

// Form generico com Gif de processando para todos os scripts

app.use(_bodyParser.urlencoded({ extended: true }));

app.post('/show200',function (req, rest) {    
  
  console.log("show: "+req.body.show);
  console.log("Acao: "+req.body.acao);
          

rest.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My CRUD in NodeJS</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;                                                                 
  font-family: Arial, Helvetica, sans-serif;
   
}

p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the content */
.content {
  background-color: #ddd;
  padding: 7px;
  height: 260px; /* Should be removed. Only for demonstration */
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
}                                                                                               

.btn-group button {  
  background-color: #4CAF50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 8px 22px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}


.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;           
}

</style>

</head>
<body>

<div class="topnav" aling="center">

   <a href="index.html"><img src="pv3.png" alt="v3" width=100 height=80></a><br>   
   <a href="#">Executando `+ req.body.acao +`<h2></a>
 
</div> 

<div class="content">
    <img src="download.gif" alt="download" width=350 height=220>
</div>

<div class="topnav">
   <img src="bks2.png" alt="v3" width=350 height=120><br>
   <a href="#">Todos direitos Reservados<h2></a>    
</div>

    <form name="myform" action="/`+ req.body.show +`" method="POST" >
    </form>
    <script type="text/javascript">
       document.myform.submit();
     </script>
</body>
</html>`
);       
});
      
//----------------------------------------------------------------
             
// errors handler
function logErrors(err, req, res, next) {                                                                             
  console.error(err.stack);

  next(err);
}

function errorsHandler(err, req, res, next) {
  // eslint-disable-line no-unused-vars
  var error = {};

  error.message = err.message;

  if ('production' !== app.get('env')) {
    error.stack = err.stack;
  }

  error.errors = err.errors || {};

  res.status(500).json(error);
}

app.use(logErrors);
app.use(errorsHandler);

// start the server
app.listen(app.get('port'), function (err) {    
  if (err) {
    return console.error(err);
  }

  console.log('Find the server at: http://localhost:' + app.get('port') + '/'); // eslint-disable-line no-console
});
