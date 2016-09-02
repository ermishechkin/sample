//'use strict';
function onSubmit(form) {
  let data = {
    user: form.elements['user'].value,
    email: form.elements['email'].value
  };

  let result = request('/users', data);
  if (result === '100') {
    form.hidden = true;
  }
  helloWorld.innerHTML = hello(data.user);
  console.log(data);
}

function hello(name) {
  return 'Привет, ' + name;
}

if (typeof exports === 'object') {
  exports.hello = hello;
}
