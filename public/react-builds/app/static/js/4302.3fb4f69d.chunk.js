"use strict";(self.webpackChunkeventex_saas_portal=self.webpackChunkeventex_saas_portal||[]).push([[4302],{74302:(e,a,d)=>{d.r(a),d.d(a,{default:()=>o});var t=d(65043),i=d(94988),l=d(82550),n=d(26222),p=d(70579);const o=(0,i.A)((e=>{(0,t.useEffect)((()=>{document.title="Badge Template - EventHex Portal"}),[]);const[a]=(0,t.useState)([{type:"title",title:"General Badge Template Information",name:"info",add:!0,update:!0},{type:"select",placeholder:"Template Type",name:"templateType",validation:"",default:"",label:"Template Type",showItem:"Template Type",tag:!1,required:!1,view:!0,filter:!1,add:!0,update:!0,apiType:"CSV",selectApi:"Badge,E Badge"},{type:"text",placeholder:"Template Name",name:"templateName",validation:"",default:"",label:"Template Name",required:!0,view:!0,add:!0,update:!0},{type:"image",placeholder:"Template Image",name:"templateImage",validation:"",default:"",label:"Template Image",required:!0,view:!0,add:!0,update:!0},{type:"number",placeholder:"Height",name:"height",validation:"",default:0,label:"Height (px)",required:!0,view:!0,add:!0,update:!0},{type:"number",placeholder:"Width",name:"width",validation:"",default:0,label:"Width (px)",required:!0,view:!0,add:!0,update:!0},{type:"toggle",placeholder:"Enable Upload Image",name:"isUploadImage",default:!1,label:"Enable Image Upload",required:!1,view:!0,add:!0,update:!0},{type:"title",title:"Display Name Configuration",name:"info",add:!0,update:!0},{type:"toggle",placeholder:"Enable Display Name",name:"isdisplayname",default:!1,label:"Enable Display Name",required:!1,view:!0,add:!0,update:!0},{type:"number",placeholder:"X-coordinate for Name",name:"displaynameX",default:0,label:"Display Name X (px)",required:!1,condition:{item:"isdisplayname",if:!0,then:"enabled",else:"disabled"},view:!0,add:!0,update:!0},{type:"number",placeholder:"Y-coordinate for Name",name:"displaynameY",default:0,label:"Display Name Y (px)",required:!1,condition:{item:"isdisplayname",if:!0,then:"enabled",else:"disabled"},view:!0,add:!0,update:!0},{type:"number",placeholder:"Display Name Width",name:"displaynameWidth",default:0,label:"Display Name Width (px)",required:!1,condition:{item:"isdisplayname",if:!0,then:"enabled",else:"disabled"},view:!0,add:!0,update:!0},{type:"number",placeholder:"Font Size for Name",name:"displaynamefontSize",default:12,label:"Display Name Font Size (px)",required:!1,condition:{item:"isdisplayname",if:!0,then:"enabled",else:"disabled"},view:!0,add:!0,update:!0},{type:"text",placeholder:"Font for Name",name:"displaynameFont",default:"Arial",label:"Display Name Font",required:!1,condition:{item:"isdisplayname",if:!0,then:"enabled",else:"disabled"},view:!0,add:!0,update:!0},{type:"title",title:"QR Code Configuration",name:"info",add:!0,update:!0},{type:"toggle",placeholder:"Enable QR Code",name:"isQrcode",default:!1,label:"Enable QR Code",required:!1,view:!0,add:!0,update:!0},{type:"number",placeholder:"X-coordinate for QR",name:"qrcodeX",default:0,label:"QR Code X (px)",required:!1,condition:{item:"isQrcode",if:!0,then:"enabled",else:"disabled"},view:!0,add:!0,update:!0},{type:"number",placeholder:"Y-coordinate for QR",name:"qrcodeY",default:0,label:"QR Code Y (px)",required:!1,condition:{item:"isQrcode",if:!0,then:"enabled",else:"disabled"},view:!0,add:!0,update:!0},{type:"number",placeholder:"QR Code Width",name:"qrcodeWidth",default:0,label:"QR Code Width (px)",required:!1,condition:{item:"isQrcode",if:!0,then:"enabled",else:"disabled"},view:!0,add:!0,update:!0},{type:"title",title:"Event Name Configuration",name:"info",add:!0,update:!0},{type:"toggle",placeholder:"Enable Event Name",name:"isdisplayEvent",default:!1,label:"Enable Event Name",required:!1,view:!0,add:!0,update:!0},{type:"number",placeholder:"X-coordinate for Event",name:"displayEventX",default:0,label:"Event Name X (px)",required:!1,condition:{item:"isdisplayEvent",if:!0,then:"enabled",else:"disabled"},view:!0,add:!0,update:!0},{type:"number",placeholder:"Y-coordinate for Event",name:"displayEventY",default:0,label:"Event Name Y (px)",required:!1,condition:{item:"isdisplayEvent",if:!0,then:"enabled",else:"disabled"},view:!0,add:!0,update:!0},{type:"number",placeholder:"Event Name Width",name:"displayEventWidth",default:0,label:"Event Name Width (px)",required:!1,condition:{item:"isdisplayEvent",if:!0,then:"enabled",else:"disabled"},view:!0,add:!0,update:!0},{type:"number",placeholder:"Font Size for Event",name:"displayEventfontSize",default:12,label:"Event Name Font Size (px)",required:!1,condition:{item:"isdisplayEvent",if:!0,then:"enabled",else:"disabled"},view:!0,add:!0,update:!0},{type:"text",placeholder:"Font for Event",name:"displayEventFont",default:"Arial",label:"Event Name Font",required:!1,condition:{item:"isdisplayEvent",if:!0,then:"enabled",else:"disabled"},view:!0,add:!0,update:!0},{type:"title",title:"Ticket Configuration",name:"info",add:!0,update:!0},{type:"toggle",placeholder:"Enable Ticket",name:"isdisplayTicket",default:!1,label:"Enable Ticket",required:!1,view:!0,add:!0,update:!0},{type:"number",placeholder:"X-coordinate for Ticket",name:"displayTicketX",default:0,label:"Ticket X (px)",required:!1,condition:{item:"isdisplayTicket",if:!0,then:"enabled",else:"disabled"},view:!0,add:!0,update:!0},{type:"number",placeholder:"Y-coordinate for Ticket",name:"displayTicketY",default:0,label:"Ticket Y (px)",required:!1,condition:{item:"isdisplayTicket",if:!0,then:"enabled",else:"disabled"},view:!0,add:!0,update:!0},{type:"number",placeholder:"Ticket Width",name:"displayTicketWidth",default:0,label:"Ticket Width (px)",required:!1,condition:{item:"isdisplayTicket",if:!0,then:"enabled",else:"disabled"},view:!0,add:!0,update:!0},{type:"number",placeholder:"Font Size for Ticket",name:"displayTicketfontSize",default:12,label:"Ticket Font Size (px)",required:!1,condition:{item:"isdisplayTicket",if:!0,then:"enabled",else:"disabled"},view:!0,add:!0,update:!0},{type:"text",placeholder:"Font for Ticket",name:"displayTicketFont",default:"Arial",label:"Ticket Font",required:!1,condition:{item:"isdisplayTicket",if:!0,then:"enabled",else:"disabled"},view:!0,add:!0,update:!0},{type:"title",title:"Additional Links",name:"info",add:!0,update:!0},{type:"text",placeholder:"Canvas Link",name:"canvasLink",default:"",label:"Canvas Link",required:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"PSD Link",name:"psdLink",default:"",label:"PSD Link",required:!1,view:!0,add:!0,update:!0},{type:"toggle",placeholder:"Is Default Template",name:"isDefault",default:!1,label:"Default Template",required:!1,view:!0,add:!0,update:!0}]);return(0,p.jsx)(n.mc,{className:"noshadow",children:(0,p.jsx)(l.A,{api:"badge-template",itemTitle:{name:"templateName",type:"text",collection:""},shortName:"Badge Template",formMode:"double",...e,attributes:a})})}))}}]);
//# sourceMappingURL=4302.3fb4f69d.chunk.js.map