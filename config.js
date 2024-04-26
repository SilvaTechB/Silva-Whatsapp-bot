const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349126085662";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx,2349126085662";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx,2349126085662";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349126085662, 923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Soburr-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Soburr",

  sessionName:process.env.SESSION_ID || "SUHAIL_07_20_04_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkzLFxuICAgICAgICA3NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzLFxuICAgICAgICA5MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODQsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDY2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDYwLFxuICAgICAgICA2NixcbiAgICAgICAgMjQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDkwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg3LFxuICAgICAgICA5OSxcbiAgICAgICAgOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDY1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicC9oQjR3Q0VJZnJoS1Z6SlpxWUxydTlFVHdVTU5UdVJ4aGNYN3BPVU9tQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWnFycW1PZTNUNWV5czREOUhEY0p2Z1wiLFxuICBcInBob25lSWRcIjogXCI5N2I4OGUwMC0yMDEyLTRkMjEtODE4Zi0yMjNjMjlkMTJkMzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgNzMsXG4gICAgICAzOSxcbiAgICAgIDUzLFxuICAgICAgMTQxLFxuICAgICAgNzYsXG4gICAgICA2MSxcbiAgICAgIDE1OCxcbiAgICAgIDg4LFxuICAgICAgMTgsXG4gICAgICAwLFxuICAgICAgMTMzLFxuICAgICAgMjUsXG4gICAgICAxNTAsXG4gICAgICA2NixcbiAgICAgIDY0LFxuICAgICAgMTM2LFxuICAgICAgMjIxLFxuICAgICAgMzYsXG4gICAgICAxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICAxMjUsXG4gICAgICAyMCxcbiAgICAgIDE3NSxcbiAgICAgIDE4NixcbiAgICAgIDI1MyxcbiAgICAgIDIzNSxcbiAgICAgIDExNixcbiAgICAgIDE0LFxuICAgICAgMTkyLFxuICAgICAgMjM4LFxuICAgICAgMTg2LFxuICAgICAgMjMsXG4gICAgICA5LFxuICAgICAgMjcsXG4gICAgICA5NyxcbiAgICAgIDI1LFxuICAgICAgODMsXG4gICAgICA4LFxuICAgICAgNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUDNFUDVUODlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjYwODU2NjI6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1Mjc1ODk5MzE3MDUxMzoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPT2t2WWNGRUtLcnJiRUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlhGL0o4bEpSS0FTdm95allxY0tOVUF5TkU1azd2azFOM1I1aFpZQ0FoZ1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMVJUTzQycElCcnFETXFkWlpwRGk2ZjNzSWw5N3owMGRFQWZNdThyMFZwdmdyb1ZuTXZsNHd6R3ZEb2tUYUZpZ1pVQUQ0ZTJkUlg2eWtEcDhQNVVHQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ1pmSWNLUkJ1SUZrM0U3ZkNHTU5KOFZoYnhwb2tDN1FhK2ZFMlg1T3Y2ZGdHNTVqOUJIMkJSd1NDRHhrNG9FUENsSHhzR2s2enFpL1ZhbDA4TUhDaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyNjA4NTY2MjoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDExNjAwNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
