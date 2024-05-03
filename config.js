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



global.devs = "923419159670" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923480418670";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "typing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_56_05_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3OCxcbiAgICAgICAgNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MSxcbiAgICAgICAgODAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgODEsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDkzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkwLFxuICAgICAgICAxODksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDgwLFxuICAgICAgICA1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU0LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MixcbiAgICAgICAgMjUwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDczLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM2LFxuICAgICAgICA4NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICAyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDkxLFxuICAgICAgICA5LFxuICAgICAgICAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2LFxuICAgICAgICA2MixcbiAgICAgICAgMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNixcbiAgICAgICAgODcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDMyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIktxQWpwSkpSY2UrdWJVcFpBb0loQmp3c3kvS0NRS3NEVm5MNmxQMmZpUkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZCZllOeVBjUVY2aWFqdFZsY1p2Y2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTEyYzliY2UtMDZkMi00NzY0LWFjM2UtMGUxN2MwMzc4Nzc0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MSxcbiAgICAgIDI1MixcbiAgICAgIDIwOSxcbiAgICAgIDE2NCxcbiAgICAgIDE2NSxcbiAgICAgIDg3LFxuICAgICAgMzcsXG4gICAgICAxMCxcbiAgICAgIDEwMSxcbiAgICAgIDQ3LFxuICAgICAgMTg3LFxuICAgICAgMTAyLFxuICAgICAgNDUsXG4gICAgICAxNixcbiAgICAgIDI1MixcbiAgICAgIDIyNyxcbiAgICAgIDIwLFxuICAgICAgMTI3LFxuICAgICAgMjExLFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgNDgsXG4gICAgICAyMDgsXG4gICAgICAyMDAsXG4gICAgICAxMDMsXG4gICAgICAyNDYsXG4gICAgICAzNyxcbiAgICAgIDIzNCxcbiAgICAgIDIwNSxcbiAgICAgIDI2LFxuICAgICAgMjgsXG4gICAgICAxMTcsXG4gICAgICAyMDIsXG4gICAgICAxODIsXG4gICAgICAxNDUsXG4gICAgICAyMTEsXG4gICAgICA0NyxcbiAgICAgIDIzNCxcbiAgICAgIDU2LFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJBNU5YWldOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0ODA0MTg2NzA6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM0ODUyNjcwNzUxOTk6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTXFxuXFxuXFxuQVxcblxcblxcbkpcXG5cXG5cXG5KXFxuXFxuXFxuQVxcblxcblxcblxcbkRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNekQ0MEFRenFUUnNRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJML2h1cGNmMmVzRzB4eFlCcCt5VTBZc2x6cElGME84TGQ2em1UTEJyV3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid2Z6U1BtR2V1bFU1ZHJvVjlEOTVSdlByUDVkOXVRcUxqaWlrNDYrNnJHR1hZWnVMUnU0WEFHQVFNS0d0eVBGZWZWbUtaRk5RRHZLaUpMemJwUDdHQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOWJXZXM0K25SQS9aeUZMeitYOFlVZjc5ZlMrQStHd3VJOUkwdHBKbjNFeFU4eHluTlZoL1RwOGJhaFBVT0t3RTdVbDg4eUxjTlAxbjJpNmpobGpLalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDgwNDE4NjcwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDcwNDk3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9NZVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT01lLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "M ASWAD",
  packname: process.env.PACK_NAME || "M ASWAD",
  botname : process.env.BOT_NAME  || "M ASWAD",
  ownername:process.env.OWNER_NAME|| "M ASWAD",


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
