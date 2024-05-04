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
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://nizzh_user:b4KRQUDTMoArdNatpWuXcJZ0JLrcwLlv@dpg-coqqcm7sc6pc73dehnag-a/nizzh"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/+94761652132?text=Nizzu=Id";
global.website=process.env.GURL || "https://wa.me/+94761652132?text=Nizzu=Id" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/dfg5vDW/Add-Text-04-05-09-43-52.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94761652132";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_30_05_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAwLFxuICAgICAgICA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDM3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk2LFxuICAgICAgICA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTksXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTksXG4gICAgICAgIDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MixcbiAgICAgICAgODcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MixcbiAgICAgICAgODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDgwLFxuICAgICAgICA5NixcbiAgICAgICAgNjYsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk2LFxuICAgICAgICA3NixcbiAgICAgICAgMTgyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA3MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg3LFxuICAgICAgICA2NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyYzZkQW9Xd1IvT3cxMlpPTXA1bm9CSUxQZXVZTVlWSDNhUzBGanMvaUlzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiY083NzhpWlE1Q2R6cnhhSzl2U1lBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjExMGZiYWY0LTQyZjYtNDUyOC05Yzg3LTBkZjE2ZjY2MTViZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDg4LFxuICAgICAgMTU4LFxuICAgICAgMTU4LFxuICAgICAgMjQsXG4gICAgICAyMjUsXG4gICAgICAyMzUsXG4gICAgICAxOTAsXG4gICAgICAzMSxcbiAgICAgIDE3MyxcbiAgICAgIDk0LFxuICAgICAgMTQyLFxuICAgICAgMTMsXG4gICAgICA2MyxcbiAgICAgIDE2OCxcbiAgICAgIDIwMSxcbiAgICAgIDUsXG4gICAgICAxOSxcbiAgICAgIDE2NixcbiAgICAgIDkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDIyNixcbiAgICAgIDQ4LFxuICAgICAgMTA3LFxuICAgICAgMTY1LFxuICAgICAgODksXG4gICAgICAxMzUsXG4gICAgICAzMixcbiAgICAgIDEzNixcbiAgICAgIDUzLFxuICAgICAgMTMwLFxuICAgICAgNTMsXG4gICAgICA4LFxuICAgICAgNDksXG4gICAgICAyMDAsXG4gICAgICAxMzYsXG4gICAgICAxNTMsXG4gICAgICAzNyxcbiAgICAgIDEyNyxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMMjk2TUNHWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjE2NTIxMzI6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk5penp1XCIsXG4gICAgXCJsaWRcIjogXCIyMTY5OTA3OTA3NDIxMjE6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLK1Yxc1FERUthZjFyRUdHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJ4ZDRhTjNrMTVZRXZ2dGg1bkNycGo3Y3lGNGZrR1JzR2hCY1Zhb00yMTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidTJZV1RMRFpLeXl3cFZGU294SUZSTmMrbnFaZjRuZVRhaFlVUGhRc2xFdmV5SWlNOFVadlI0OXJUUWYvS0FJd3IvNEwvV3JxMlkvR2ZJZ3U5bURxQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRFg5M0U3Vkw4YjJRMkFxNzRUbUR4bkI4eEFQRStPUXRzektTQ1o1WlRPWXo1cEJRUGIrVnc4aEx4RFFmZVNLcWNzbXNHc2gybFNHb3VYcWFxcUEyZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjE2NTIxMzI6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0Nzg2MjE2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Nizzu",
  ownername:process.env.OWNER_NAME|| "Nizzu",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Nizzu"  ).toUpperCase(),



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
