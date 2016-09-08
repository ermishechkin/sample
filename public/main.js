//'use strict';
function onSubmit(form) {
  let data = {
    "user": form.elements['user'].value,
    "email": form.elements['email'].value
  };

  let result = request('/users', data);
  if (result === '100') {
    form.hidden = true;
  }
  helloWorld.innerHTML = hello(data.user) + ' (вы были здесь ' +
    result + plural(result, ['раз','раза','раз'], russianPluralRule) + ')';
  console.log(data);
}

function hello(name) {
  return 'Привет, ' + name;
}

if (typeof exports === 'object') {
  exports.hello = hello;
  exports.plural = plural;
  exports.russianPluralRule = russianPluralRule;
}

function plural(number, forms, rule) {
  if (typeof(number) === 'string')
    number = parseInt(number);
  return forms[rule(number)];
}

function russianPluralRule(number) {
  let last_digit = number % 10;
  if (last_digit == 1 && number != 11)
    return 0;
  if ([2,3,4].indexOf(last_digit)>=0 && [12,13,14].indexOf(number)<0)
    return 1;
  return 2;
}
