var http = require("http");
const con = require('electron').remote.getGlobal('console')

var options = {
  hostname: 'ec2-3-16-147-113.us-east-2.compute.amazonaws.com',
  port: 80,
  path: '/level/get',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  }
};
var post = {

getths: function (s1,s2,s3,s4,o1,o2,o3,o4){
    options.path = '/ths/get'
    var req = http.request(options, function(res) {
    con.log('Status: ' + res.statusCode);
// console.log('Headers: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (body) {
    con.log('Body: ' + body);
    var vals = JSON.parse(body)
    s1.value=vals.tank_1
    s2.value=vals.tank_2
    s3.value=vals.tank_3
    s4.value=vals.tank_4
    o1.innerHTML=s1.value+'%';
    o2.innerHTML=s2.value+'%';
    o3.innerHTML=s3.value+'%';
    o4.innerHTML=s4.value+'%';

    });
  });
  req.on('error', function(e) {
  con.log('problem with request_getThs: ' + e.message);
  });
  // write data to request body
  req.write(JSON.stringify({}));
  req.end();

},

update:function (){
        options.path = '/ths/update'
        var req = http.request(options, function(res) {
        con.log('Status: ' + res.statusCode);
  // console.log('Headers: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (body) {
        con.log('Body: ' + body);

        });
      });
      req.on('error', function(e) {
      con.log('problem with request: ' + e.message);
});
// write data to request body
req.write(JSON.stringify(vals));
req.end();
},

 getData:function (bar_1,bar_2,bar_3,bar_4,f1,f2,f3,f4){
  options.path = '/level/get'
  var req = http.request(options, function(res) {
  console.log('Status: ' + res.statusCode);
  // console.log('Headers: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (body) {
    console.log('Body: ' + body);
    levels=JSON.parse(body)
    bar_1.animate(levels.tank_1/100)
    bar_2.animate(levels.tank_2/100)
    bar_3.animate(levels.tank_3/100)
    bar_4.animate(levels.tank_4/100)
    f1.innerHTML = (levels.tank_1*0.03).toFixed(2)
    f2.innerHTML = (levels.tank_2*0.03).toFixed(2)
    f3.innerHTML = (levels.tank_3*0.03).toFixed(2)
    f4.innerHTML = (levels.tank_4*0.03).toFixed(2)

  });
});
req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
// write data to request body
req.write("{}");
req.end();
}
}

module.exports = post
