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
global.blockJids= process.env.BLOCK_JID || "true"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923313759112" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923313759112";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_47_05_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDMzLFxuICAgICAgICAwLFxuICAgICAgICA3NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQxLFxuICAgICAgICA0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIyLFxuICAgICAgICAzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgODIsXG4gICAgICAgIDU0LFxuICAgICAgICA3MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0LFxuICAgICAgICA5NixcbiAgICAgICAgNzAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDc0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDg5LFxuICAgICAgICA3OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NixcbiAgICAgICAgMTI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0LFxuICAgICAgICA4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NixcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZFI4V3pMMlJmZ2Q1VjBkU0RwOWdrK3BROE1tT3VONVlLL2lMK3c5czNJdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMTM3NTkxMTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ5NEM3RTZGRjA0OUZGN0M0NjM5RUIzMjE3OUUyNkYzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNDU4NTY1N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMxMzc1OTExMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjI1QjA3NzMxMzc5NEE2NDdCREM4MDUzNTYzRjFFRURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE0NTg1NjU3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpXVGhNaWQ2UUp5X3o5dEZhaXZwZUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzJlNDYzNGUtMDlmNS00ZjkwLWIwMDAtOTVlNTAyMTFlZTU0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMixcbiAgICAgIDYxLFxuICAgICAgMTM1LFxuICAgICAgMjM4LFxuICAgICAgOTcsXG4gICAgICA0MSxcbiAgICAgIDEzNyxcbiAgICAgIDksXG4gICAgICA3NSxcbiAgICAgIDE4NyxcbiAgICAgIDE0MSxcbiAgICAgIDgyLFxuICAgICAgNDksXG4gICAgICA4MSxcbiAgICAgIDcyLFxuICAgICAgMTk0LFxuICAgICAgMjUwLFxuICAgICAgNyxcbiAgICAgIDYsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDE3MCxcbiAgICAgIDIxOSxcbiAgICAgIDAsXG4gICAgICAxMzAsXG4gICAgICAyMjYsXG4gICAgICAxNzEsXG4gICAgICAzOSxcbiAgICAgIDExNCxcbiAgICAgIDEwMyxcbiAgICAgIDI1NSxcbiAgICAgIDE5NixcbiAgICAgIDIwNCxcbiAgICAgIDIzNixcbiAgICAgIDEzLFxuICAgICAgNjgsXG4gICAgICAxMzEsXG4gICAgICAyMzksXG4gICAgICAxNzYsXG4gICAgICAyMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0haSkw5NjhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxMzc1OTExMjoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1hcmtldGluZ1wiLFxuICAgIFwibGlkXCI6IFwiMjE5ODAzODkzNjkwNDE1OjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lpT283VUhFTFNBeXJFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNm9SSFd4VjhoRjBEY0lrUUFEbWw3WUNTblpQWjBGZGlDUnF4VGRBSDR6Yz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWeVFKNndVTzMrM255dHdnRjlQTUtGaDl5Qndabm9vU1libDMwTGJIdTRkcURiR3ZTMk5EUlVzZmxFd2UyT3JVbFVkZlczOUN5TkY5ZzJNRWZWaFNCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvQTVmanptd1g4blYyT1g0VVd0NVd2cmdxcDhaM01GdGJNcDV2cEpHQTljOFRUU2Y0MnNnL2QyY2Q4MXJCMlpSMFB0MitFUUhzbkhYeDJZMUlGeEVpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMTM3NTkxMTI6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDU4NTY1NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdJb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0lvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVEhoRlZzVDVQcjBrME5UZ3huc1FiTTYxc25YRzYya3dxaW1oQ2FvNDc1VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTkwNzcyNDg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQ1ODU2NTY0NDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
