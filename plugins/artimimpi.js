var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
//await m.reply(wait)
  var apii = await fetch(`https://api.lolhuman.xyz/api/primbon/artimimpi?apikey=82389ffbed5cd3ab5e3bdd81&query=${text}`)
  var js = await apii.json()
  await m.reply(js.result)
}      
handler.command = handler.help = ['artimimpi'];
handler.tags = ['fun'];
handler.limit = 4
handler.premium = false
module.exports = handler;