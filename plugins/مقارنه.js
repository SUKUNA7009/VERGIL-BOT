let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 مقارنة 」─*\n*“${pickRandom(global.bucin)}”*\n*└────「 VERGIL BOT 」─*`, m)
}
handler.help = ['reto']
handler.tags = ['fun']
handler.command = /مقارنه/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

 global.bucin = [ 
 "*تتوقع مين يفوز في قتال بين لوفي و غوكو*", 
 "*تتوقع مين يفوز في مسابقه اكل بين شارمي و غوكو او لوفي*", 
 "*تتوقع من يفوز في قتال بين يونو و امبرطور السحر يوليوس*", 
 "*تتوقع مين يفوز في السرعه غوكو ب كايو كينق 20 و فلاش و سوبر مان*", 
 "*تتوقع مين يفوز في قتال فيجيتا و ايرين*", 
 "*تتوقع مين يفوز في قتال بين ايتشيغو و تانجيرو*", 
 "*تتوقع مين يفوز في مسابقه افضل ضحكه في عالم الانمي فيجيتا و غوكو بلاك و سوكونا و غوجو و لوفي و غوكو (رتبهم من الافضل الى الاسوء)", 
 "*تتوقع مين رح يفوز لو اتحد فيجيتا و غوكو على حكام الدمار (طبعا فيجيتا بالغرور الفائق و غوكو بالغريزه الفائقه المكتمله)*",  
 "*تتوقع مين رح يفوز في قتال بين لوفي الجير 5 و غوكو بالغريزه الفائقه المكتمله*",  
 "*تتوقع مين رح يفوز في قتال بين لوفي الجير 5 و فيجيتا بالغرور*", 
 "*تتوقع مين رح يفوز في قتال بين لوفي و ايرين*", 
 "*تتوقع مين رح يفوز في قتال بين فيجيتا و كايدو*", 
 "*تتوقع مين رح يفوز في قتال بين كورابيكا و ليفاي*",   
 "*تتوقع مين يفوز في قتال بين يوهاباخ و لوفي الجير 5*",  
  
 " *ثانيه من وقتك تصلي ع الرسول صلي الله عليه وسلم ❤️*", 

 "*تتوقع مين تفوز بجائزه افضل امرأه في ون بيس*", 
  "*تتوقع مين تفوز بجائزه افضل امرأه في دراغون بول*", 
 "*تتوقع مين يفوز في قتال بين *ايتشيغو و ماهيتو* ", 
 "*تتوقع مين افضل ثنائي في عالم الانمي (غوكو و فيجيتا) او (غوجو و غيتو) او (لوفي و زورو) او (كيلوا و غون) رتبهم من الافضل الى الاسوء*", 
 ] 
