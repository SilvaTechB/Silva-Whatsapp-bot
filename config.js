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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923006794557";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_22_05_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDM4LFxuICAgICAgICA0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDYzLFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDk2LFxuICAgICAgICA5MCxcbiAgICAgICAgOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgODUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk0LFxuICAgICAgICA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDczLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTExLFxuICAgICAgICA4NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MixcbiAgICAgICAgMTUzLFxuICAgICAgICA3MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDg4LFxuICAgICAgICA4MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZIeDNlVTRycDdrQldYWFU2RDVSbWliN1dOZHVMbkpXSmhiQjZDK0lTTE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlduLVZ3d2t6VFctOS1fbGZFckxzeUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWVhOWM1YWEtMzA4MS00OWZmLWJjY2EtMzdkMzMxNjc2ZDRjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDE3NSxcbiAgICAgIDg5LFxuICAgICAgMzksXG4gICAgICAxOTQsXG4gICAgICAzOSxcbiAgICAgIDE0MixcbiAgICAgIDE0OSxcbiAgICAgIDUyLFxuICAgICAgMjA4LFxuICAgICAgNjQsXG4gICAgICAyNDcsXG4gICAgICA1NCxcbiAgICAgIDM1LFxuICAgICAgMzksXG4gICAgICAyMCxcbiAgICAgIDIwOSxcbiAgICAgIDEwMCxcbiAgICAgIDIyNyxcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg4LFxuICAgICAgMTM3LFxuICAgICAgMTQ5LFxuICAgICAgMTk5LFxuICAgICAgMjE3LFxuICAgICAgNzMsXG4gICAgICAxMzMsXG4gICAgICAyNixcbiAgICAgIDcyLFxuICAgICAgMjQyLFxuICAgICAgNTYsXG4gICAgICA1NyxcbiAgICAgIDE0NixcbiAgICAgIDE4MSxcbiAgICAgIDEzMixcbiAgICAgIDE3MyxcbiAgICAgIDI0NixcbiAgICAgIDcyLFxuICAgICAgMTM2LFxuICAgICAgMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjlNV1ZMMUJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAwNjc5NDU1Nzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2XlvCdl7XwnZe88J2YgvCdl7HwnZe18J2XrvCdl7/wnZiGXCIsXG4gICAgXCJsaWRcIjogXCI0NjIzNTc0MjM3NjA4Mzo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pXNi83b0hFTVMyemJFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVXZjZm9OelZiSkl2UTNZdDRRUThIbTJ6MktYbHNqb0ErUlZoNnQ2MmtsTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaNXNXUmZRcURnOHNrSk0wSjFXSUYzQ0w0TmFPTVMrVDdMYUtwZkFXOWF5V2NPOHhWNXZGSEx4ZE51dUhJVzhVWTJrK1ZiY0drTTJOQy9tdDE0enFDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1UDdRREgrRnZhemRTT25MVzVwNlB6ZkE0dFNtWmhYdGxlM0I4M3ltUUhnTnJLRHI2bTlJeTNOTlh1ejV6Mkk1MGZRY3czSnhKclROazl1NnY2NDFqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMDY3OTQ1NTc6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDY0MTczNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFQclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQVByLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNWJ6TWxMOVBTTVFadUE1WWdEMjlyVXVZUVFDZUwyekRNbE9tMWdveEdyST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDAyNzcxMjE4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
