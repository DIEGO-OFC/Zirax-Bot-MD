import animeNames from './anime_r.json';

var handler = async (m, { conn }) => {
  const randomAnime = animeNames[Math.floor(Math.random() * animeNames.length)];
  conn.reply(m.chat, `🎬 Nombre de anime aleatorio: *${randomAnime}*`, m);
};
handler.help = ["anime"];
handler.tags = ["random"];
handler.command = ["randoma", "animr"];
export default handler;