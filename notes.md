https://github.com/R4meau/pokapi/tree/master/js
ngrok

```
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Good');
  }, 2000);


});


let myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('asdfasdfasdf')
  }, 1500)
});


Promise.all([myPromise, myPromise2])
  .then((data) => {
    console.log(data)
}).catch((err) => {
  console.log(err)
});

fetch('')
```


```
if(_.isUndefined(data)) {
 var baseURL = this.baseURL;
} else {
 var baseURL = this.baseURL + data;
}
if (_.isUndefined(data) ) { data = {}; }
return new Promise( function(resolve, reject) {
 // asdffas
});
post: function create(data, config, cb) {
 api.executeHttp('POST', this.baseURL, data, config, cb);
},
put: function create(data, config, cb) {
 api.executeHttp('PUT', this.baseURL, data, config, cb);
},
// list: function list(data, config, cb) {
//     if (typeof data === 'function') {
//         config = data;
//         data = {};
//     }
//     api.executeHttp('GET', this.baseURL, data, config, cb);
// },
delete: function del(id, config, cb) {
 api.executeHttp('DELETE', this.baseURL + id, {}, config, cb);
},
patch: function update(id, data, config, cb) {
 api.executeHttp('PATCH', this.baseURL + id, data, config, cb);
},
```
