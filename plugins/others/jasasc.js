let handler = async (m, { conn, command }) => {
	conn.reply(m.chat, `*「 RECODED BY NOVII RAIDEN 」*

*⭔ Multi Auth ( multiple file session )*
https://github.com/clicknetcafe/NoviBotz

*⭔ NOVI node_modules*
https://cutt.ly/Novi-node-modules`, m)
}

handler.command = /^(sc|sourcecode)$/i

export default handler