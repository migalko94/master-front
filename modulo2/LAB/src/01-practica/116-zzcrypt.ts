console.log("*****116 zzcrypt*****");

// Descifra el siguiente secreto:

var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:

var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var plainArr = plain.split("");
var cipherArr = cipher.split("");

function zipObjectCrypt(keys, values) {
  let obj = {};

  for (let i = 0; i < keys.length && i < values.length; i++) {
    obj[keys[i]] = values[i];
  }

  return obj;
}
function decrypt(secret) {
  let secretArr = secret.split("");
  let message = [];

  let objDecrypt = zipObjectCrypt(cipherArr, plainArr);
  secretArr.forEach((letter) => {
    let decrypted = objDecrypt[letter];
    let unit = decrypted ?? "";
    message = [...message, unit];
  });

  return console.log(message.join(" "));
}

decrypt(secret);
