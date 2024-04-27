const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email "aswadarain53@gmail.com"
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



global.devs = "923419159670" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923419159670";




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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "truee"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_57_04_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDU5LFxuICAgICAgICA1MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk2LFxuICAgICAgICA1NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMixcbiAgICAgICAgMTY0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAyNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDUwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgODUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDc0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDYyLFxuICAgICAgICA5NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDUxLFxuICAgICAgICA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUxLFxuICAgICAgICA3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjksXG4gICAgICAgIDgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDMxLFxuICAgICAgICA4NSxcbiAgICAgICAgNzksXG4gICAgICAgIDM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODgsXG4gICAgICAgIDQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlYvaUFtWVh2ekx0WDdQcytrTTFTaWo3VjdoTExkc3VzTXJ0cEZpZ3cvMTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlOOHlmem82U291aGhnWm1zSXI4eWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2RiYWQxNDItOTRjNC00YzNkLWFjMDYtOTdhN2QwZWY3NGQyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg0LFxuICAgICAgOCxcbiAgICAgIDk4LFxuICAgICAgMjUyLFxuICAgICAgNjksXG4gICAgICA0MixcbiAgICAgIDIzNSxcbiAgICAgIDIwNCxcbiAgICAgIDU4LFxuICAgICAgMTgyLFxuICAgICAgMjEwLFxuICAgICAgMTEyLFxuICAgICAgODksXG4gICAgICAxODMsXG4gICAgICA5OCxcbiAgICAgIDEwNixcbiAgICAgIDEzMCxcbiAgICAgIDE5LFxuICAgICAgMTMsXG4gICAgICAxNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUwLFxuICAgICAgMTgwLFxuICAgICAgNjUsXG4gICAgICAxNTMsXG4gICAgICAyNDEsXG4gICAgICAxNzAsXG4gICAgICAyMDgsXG4gICAgICA3OCxcbiAgICAgIDc2LFxuICAgICAgMTkxLFxuICAgICAgMTU3LFxuICAgICAgMTM3LFxuICAgICAgMjksXG4gICAgICAzMSxcbiAgICAgIDIwNyxcbiAgICAgIDEwMixcbiAgICAgIDEyMixcbiAgICAgIDIwNSxcbiAgICAgIDgsXG4gICAgICAxNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSjcxQ1FLQjlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQxOTE1OTY3MDo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzM2NTA1ODU3Njc5Mzg6NDRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiw5d+XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSStnbGJzQkVKbnNzN0VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMM3Z2eUlLMFJyUEJZemFvN2hxYW9CS0ZITWluM08yS3ZINXBxcTdGcVg0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIitxNEFXM1dqV01IbUNmVEVZQnRsTlNpaUxvYnlxQ2RTYUZmbFNlbEVCeS9ibGtWYzJXVVpZUWZTeXAzcmhVY0NYbEJCazBKQUhCUGNYOXRjQ0pYY0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBKRm8wNFQ5dDJWREV5bkZuSk1ZdXZsRGMyajlTbDZzNnBoUDlUb01lbjNyRDBvVHFZYzcycytBVFpRL3dnRkx4azVldnJnSkE1dDVGQ01DUjd0WmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQxOTE1OTY3MDo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0MjIyNjIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSTgyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJODIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVMDJrRHZGV1hjUHVhOTRMTjJkSVpIWTFKTlVlQy9YeHl2OVRHc2ZkNnpvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM5MjUxNTU5OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©M ASWAD-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ M ASWAD-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "M ASWAD",
  packname: process.env.PACK_NAME || "M ASWAD",
  botname : process.env.BOT_NAME  || "M ASWAD-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x M ASWAD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
