var template = require('./template.js');
var db = require('./db')
var url = require('url');
var qs = require('querystring');


exports.home = function(request, response){
  db.query(`SELECT * FROM menu`, function(error, topics){
    db.query(`SELECT count(*) AS cnt FROM menu`, function(error, count){
      var cnt = '';''
      var dd = '';
      var kakao = template.kakao(topics);
      var list = template.list(topics, count);
      var html = template.HTML(kakao);
      response.writeHead(200);
      response.end(html);
    });
  });
}


exports.page = function(request, response){
  db.query(`SELECT count(*) AS cnt FROM menu`, function(error, count){
    var ran = Math.floor(Math.random()*(count[0].cnt+1));
    db.query(`SELECT * FROM menu WHERE seq = ?`, [ran], function(error,selone){
      var list = template.list(selone);
      var one = template.one(selone);
      var latlng = template.latlng(selone);
      var name = selone[0].name;
      var ONE = template.ONE(one, latlng, name, list);
      response.writeHead(200);
      response.end(ONE);
    });
  });
}
