var template = require('./template.js');
var db = require('./db');
var url = require('url');
var qs = require('querystring');

exports.home = function(request, response){
db.query(`SELECT * FROM topic`, function(error, topics){
	db.query(`SELECT * FROM author`, function(error2, authors){
		

	    var title = 'author';
	    var list = template.list(topics);
	    var html = template.HTML(title, list,
	      `
	      	${template.authorTable(authors)}
	      	<form action="author/create_process" method="post">
		      	<p><input type="text" name="name" placeholder="title"></p>
		      	<p><textarea name="profile" placeholder="description"></textarea></p>
		      	<p><input type="submit"></p>
		      </form>
	      <style>
	      	table{
	      		border-collapse:collapse;
	      	}
	      	td{
	      		border:1px solid black;
	      	}
	      </style>
	      `,
	      ''
	    );
	    response.writeHead(200);
	    response.end(html);
	  });
	});
}

exports.create_process = function(request, response){
  var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          db.query(`
            INSERT INTO author(name, profile) values(?,?)`,
          [post.name, post.profile], 
          function(error, result){
            if(error){
              throw error;
            }
            response.writeHead(302, {Location: `/author`});
            response.end();
          })
      });
}

exports.update = function(request, response){
	var _url = request.url;
  	var queryData = url.parse(_url, true).query;
	db.query(`SELECT * FROM topic`, function(error, topics){
		db.query(`SELECT * FROM author`, function(error, authors){
			db.query(`SELECT * FROM author where id = ?`, [queryData.id], function(error2, author){
			    var title = 'author';
			    var list = template.list(topics);
			    var html = template.HTML(title, list,
			      `
			      	${template.authorTable(authors)}
			      	<form action="update_process" method="post">
				      	<p><input type="text" name="name" placeholder="title" value="${author[0].name}"></p>
				      	<p><textarea name="profile" placeholder="description">${author[0].profile}</textarea></p>
				      	<input type="hidden" name="id" value="${queryData.id}"
				      	<p><input type="submit"></p>
				      </form>
			    	<style>
			      	table{
			      		border-collapse:collapse;
			      	}
			      	td{
			      		border:1px solid black;
			      	}
			    	</style>
			      `,
			      ''
			    );
			    response.writeHead(200);
			    response.end(html);
		    });
		});
	});
}

exports.update_process = function(request, response){
	var _url = request.url;
  	var queryData = url.parse(_url, true).query;
  	var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          db.query(`
            UPDATE author SET name=?, profile=? where id=?`, [post.name, post.profile, post.id], 
          function(error, result){
            if(error){
              throw error;
            }
            response.writeHead(302, {Location: `/author`});
            response.end();
          })
      });
}

exports.delete_process = function(request, response){
  	var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          db.query(`
            DELETE FROM author WHERE id=?`, [post.id], 
          function(error, result){
            if(error){
              throw error;
            }
            response.writeHead(302, {Location: `/author`});
            response.end();
          })
      });
}