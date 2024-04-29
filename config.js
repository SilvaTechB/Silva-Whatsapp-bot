const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263785801413";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_01_04_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICA0MixcbiAgICAgICAgMjA3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE2LFxuICAgICAgICAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTExLFxuICAgICAgICA5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjYsXG4gICAgICAgIDUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDkwLFxuICAgICAgICA5NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMixcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzksXG4gICAgICAgIDk1LFxuICAgICAgICAxNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInlYcExUQTM5bVZGODBXOGx5YTUzSG1WWHhuT3E3WDBIL3k1SGppMlhhSGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpEcG1UdUYyVC1pYUNTcC1XcG92TkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDMyZDU4ZDMtMmQwZC00MjYwLTk2OWMtZWIyZGY5NWU5Y2IzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ0LFxuICAgICAgMTYxLFxuICAgICAgMjMxLFxuICAgICAgMTQ4LFxuICAgICAgMjExLFxuICAgICAgMjUwLFxuICAgICAgNTgsXG4gICAgICAyMzIsXG4gICAgICAyMjQsXG4gICAgICAyMDUsXG4gICAgICAxMDMsXG4gICAgICA2OSxcbiAgICAgIDE5NCxcbiAgICAgIDEwNixcbiAgICAgIDEwOCxcbiAgICAgIDk5LFxuICAgICAgMjU1LFxuICAgICAgOSxcbiAgICAgIDE2MyxcbiAgICAgIDc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDEwMSxcbiAgICAgIDI4LFxuICAgICAgMTgzLFxuICAgICAgMTI4LFxuICAgICAgMTQwLFxuICAgICAgMjIxLFxuICAgICAgMTEyLFxuICAgICAgMjQ3LFxuICAgICAgMTc0LFxuICAgICAgMTYxLFxuICAgICAgMjAyLFxuICAgICAgNzAsXG4gICAgICAxNzYsXG4gICAgICAyMDEsXG4gICAgICAxNjMsXG4gICAgICAwLFxuICAgICAgMjAwLFxuICAgICAgMTM1LFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVFMTjZZTTRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4NTgwMTQxMzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUGVha3kgQmxpbmRlclwiLFxuICAgIFwibGlkXCI6IFwiMTI0MDAwMzY5OTIyMTUzOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTC9oOE1ZRUVJTzB2ckVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtb1B1VkZSQUQxeTNwWHQrM3V3YzZ5NWNvSkVGdE1qei9tei9wOGZVWXlrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVYZzB4Uit1SFE4cTk5aGtQWHFFMmttZm53MjJmajZpN0xKai9DMmZSb2VkUzZ1LzJNVWdrWldjYllqRThaY0RZR0lnTEtPSCs0R0VhYVp1aHZ5VENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFBbzJaNkNkWHJVQmJoakdVRUZhMFlmNDJ0N3N4TzBybjh0UHdYc3dLbDFwTjFiUVcrRXQ2Y0QxdVVJQkpHbWV6L2FhZHRmSURydDhSSkh5YXA5cmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4NTgwMTQxMzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0Mzk1NjU2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlFzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKUXMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNSlpCdmZURXZFK0Z0NEZTNmtDODlWWnRJT012RXh2dFB4Ry9FeU1lQmhBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMjIzODk5NTAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQyODE1NTk4MTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Nilock ",
  packname: process.env.PACK_NAME || "Bleak MidWinter",
  botname : process.env.BOT_NAME  || "Peaky Blinder",
  ownername:process.env.OWNER_NAME|| "Nirvell",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
