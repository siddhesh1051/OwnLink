exports.mailHTML = (email) => {
  return `<!DOCTYPE html>
       <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
         <head>
           <title>mailer</title>
       
           <!--[if !mso]>
       
       <!-->
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
       
           <!--<![endif]-->
           <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
           <meta name="viewport" content="width=device-width,initial-scale=1">
           <style type="text/css">
             #outlook a {
               padding: 0
             }
             body {
               margin: 0;
               padding: 0;
               -webkit-text-size-adjust: 100%;
               -ms-text-size-adjust: 100%
             }
             table,
             td {
               border-collapse: collapse;
               mso-table-lspace: 0;
               mso-table-rspace: 0
             }
             img {
               border: 0;
               height: auto;
               line-height: 100%;
               outline: 0;
               text-decoration: none;
               -ms-interpolation-mode: bicubic
             }
             p {
               display: block;
               margin: 13px 0
             }
           </style>
       
           <!--[if mso]>
               <xml>
               <o:OfficeDocumentSettings>
                 <o:AllowPNG/>
                 <o:PixelsPerInch>96</o:PixelsPerInch>
               </o:OfficeDocumentSettings>
               </xml>
               <![endif]-->
       
           <!--[if lte mso 11]>
               <style type="text/css">
                 .mj-outlook-group-fix { width:100% !important; }
               </style>
               <![endif]-->
           <style type="text/css">
             @media only screen and (min-width:480px) {
               .mj-column-per-100 {
                 width: 100% !important;
                 max-width: 100%
               }
               .mj-column-per-12 {
                 width: 12% !important;
                 max-width: 12%
               }
               .mj-column-per-88 {
                 width: 88% !important;
                 max-width: 88%
               }
             }
           </style>
           <style type="text/css">
             @media only screen and (max-width:480px) {
               table.mj-full-width-mobile {
                 width: 100% !important
               }
               td.mj-full-width-mobile {
                 width: auto !important
               }
             }
           </style>
           <style type="text/css">
             div p {
               margin: 0 0
             }
             h1,
             h2,
             h3,
             h4,
             h5,
             h6 {
               margin: 0
             }
             a {
               text-decoration: none
             }
             ol,
             ul {
               margin-top: 0;
               margin-bottom: 0
             }
             figure.table {
               margin: 0
             }
             figure.table table {
               width: 100%
             }
             figure.table table td,
             figure.table table th {
               min-width: 2em;
               padding: .4em;
               border: 1px solid #bfbfbf
             }
             .hide-on-desktop {
               display: none
             }
             .hide-on-desktop {
               mso-hide: all
             }
             .hide-on-desktop div,
             .hide-on-desktop p,
             .hide-on-desktop table,
             .hide-on-desktop tbody,
             .hide-on-desktop td,
             .hide-on-desktop tr {
               mso-hide: all;
               display: none
             }
             @media only screen and (max-width:480px) {
               table.mj-full-width-mobile {
                 width: 100% !important
               }
               td.mj-full-width-mobile {
                 width: auto !important
               }
               .hide-on-desktop {
                 display: revert !important
               }
               .hide-on-desktop div,
               .hide-on-desktop p,
               .hide-on-desktop table,
               .hide-on-desktop tbody,
               .hide-on-desktop td,
               .hide-on-desktop tr {
                 display: revert !important
               }
               .hide-on-mobile {
                 display: none !important
               }
               .hide-on-mobile div,
               .hide-on-mobile p,
               .hide-on-mobile table,
               .hide-on-mobile tbody,
               .hide-on-mobile td,
               .hide-on-mobile tr {
                 display: none !important
               }
             }
             @media only screen and (min-width:480px) {
               .mj-column-per-100 {
                 width: 100% !important;
                 max-width: 100%
               }
               .mj-column-per-10 {
                 width: 10% !important;
                 max-width: 10%
               }
               .mj-column-per-65 {
                 width: 65% !important;
                 max-width: 65%
               }
               .mj-column-per-25 {
                 width: 25% !important;
                 max-width: 25%
               }
             }
             @media screen and (max-width:480px) {
               .hide-on-desktop {
                 display: revert
               }
               .hide-on-mobile {
                 display: none
               }
               .mj-column-per-33 {
                 padding: 4px 0 4px 0
               }
               .mj-sa-column-per-10 {
                 width: 15%
               }
               .mj-sa-column-per-70 {
                 width: 65%
               }
             }
           </style>
         </head>
         <body style="word-spacing:normal;background-color:#f3f2fb">
           <div style="color:transparent;visibility:hidden;opacity:0;font-size:0px;border:0;max-height:1px;width:1px;margin:0px;padding:0px;border-width:0px!important;display:none!important;line-height:0px!important;"><img border="0" width="1" height="1" src="https://sp-t1.mmtrkr.com/q/-Z5CBQuYHYQQiM3prQQw_w~~/AASgtwA~/RgRm8B9yPVcDc3BjQgpk-nKaDWU5MTiJUhtiaGFyZHdhai5taXRyYW5zaEBnbWFpbC5jb21YBAAAATo~" alt="" /></div>
           <span style="display:none">Bring your email marketing in one place </span>
           <div style="background-color:#f3f2fb">
       
             <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
             <div style="background:#fff;background-color:#fff;margin:0 auto;max-width:600px">
               <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fff;background-color:#fff;width:100%">
                 <tbody>
                   <tr>
                     <td style="direction:ltr;font-size:0;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:center">
       
                       <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                       <div style="background:#15103c;background-color:#15103c;margin:0 auto;max-width:600px">
                         <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#15103c;background-color:#15103c;width:100%">
                           <tbody>
                             <tr>
                               <td style="border:0 solid transparent;direction:ltr;font-size:0;padding:20px 0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:40px;text-align:center">
       
                                 <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td align="left" class="" style="vertical-align:top;width:600px;" ><![endif]-->
                                 <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:transparent;border:0 solid transparent;vertical-align:top" width="100%">
                                     <tbody>
                                       <tr>
                                         <td align="left" style="font-size:0;padding:0;padding-top:20px;padding-right:0;padding-bottom:0;padding-left:30px;word-break:break-word">
                                         <table>
                                         <tr>
                                             <td style="width:60px; vertical-align: middle;">
                                                 <img alt="Image" height="auto" src="https://res.cloudinary.com/dvdox1fzz/image/upload/v1696157484/yuodmwjj4qkrbfgvf0g5.png"
                                                     style="border:0 solid #1e293b;border-radius:0;display:block;outline:0;text-decoration:none;height:auto;width:100%;font-size:13px"
                                                     width="168">
                                             </td>
                                             <td style="padding-left: 0px; vertical-align: middle;">
                                                 <span style="color:#fff;font-family:Helvetica;font-size:20px;font-weight:bold;letter-spacing:0;line-height:1;text-align:left;margin-top:0;margin-bottom:0px;display:inline;font-size:30px;font-weight:bold">Ownlink</span>
                                             </td>
                                         </tr>
                                     </table>
                                     
                                         </td>
                                       </tr>
                                       <tr>
                                         <td align="left" style="font-size:0;padding:10px 25px;padding-top:50px;padding-right:50px;padding-bottom:24px;padding-left:30px;word-break:break-word">
                                           <div style="font-family:Helvetica;font-size:28px;font-weight:400;letter-spacing:0;line-height:1.5;text-align:left;color:#1e293b">
                                             <p style="line-height:1.25"><span style="color:#fff;font-family:Helvetica,serif;font-size:42px"><strong>Welcome to the</strong></span></p>
                                             <p style="line-height:1.25"><span style="color:#34d399;font-family:Helvetica,serif;font-size:42px"><strong>Ownlink</strong></span></p>
                                           </div>
                                         </td>
                                       </tr>
                                       <tr>
                                         <td align="left" style="font-size:0;padding:10px 25px;padding-top:0;padding-right:100px;padding-bottom:0;padding-left:30px;word-break:break-word">
                                           <div style="font-family:Helvetica;font-size:16px;font-weight:400;letter-spacing:0;line-height:1.5;text-align:left;color:#61618f">
                                             <p style="line-height:1.5"><span style="color:#fff;font-family:Helvetica,serif;font-size:17px"><strong>Create a single link</strong> for all your social media links with <b>Ownlink</b>.</span></p>
                                           </div>
                                         </td>
                                       </tr>
                                       <tr>
                                         <td align="center" style="font-size:0;padding:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;word-break:break-word">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0" class="mj-full-width-mobile">
                                             <tbody>
                                               <tr>
                                                 <td style="width:600px" class="mj-full-width-mobile"><img alt="Image" height="auto" src="https://img.mmdocdn.com/mailmodo/image/upload/v1665084005/editor/p/61f9f348-2323-438e-86d3-0894f12d4309/b742d6a403257d119834178d9191638b_rpdjji.gif" style="border:0 solid #1e293b;border-radius:0;display:block;outline:0;text-decoration:none;height:auto;width:100%;font-size:13px" width="600"></td>
                                               </tr>
                                             </tbody>
                                           </table>
                                         </td>
                                       </tr>
                                     </tbody>
                                   </table>
                                 </div>
       
                                 <!--[if mso | IE]></td></tr></table><![endif]-->
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </div>
       
                       <!--[if mso | IE]></td></tr></table></td></tr><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                       <div style="background:#fff;background-color:#fff;margin:0 auto;max-width:600px">
                         <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fff;background-color:#fff;width:100%">
                           <tbody>
                             <tr>
                               <td style="border:0 solid transparent;direction:ltr;font-size:0;padding:20px 0;padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:20px;text-align:center">
       
                                 <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="width:560px;" ><![endif]-->
                                 <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr">
       
                                   <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td style="vertical-align:top;width:67px;" ><![endif]-->
                                   <div class="mj-column-per-12 mj-outlook-group-fix" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:12%">
                                     <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                       <tbody>
                                         <tr>
                                           <td style="background-color:transparent;border:0 solid transparent;vertical-align:top;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px">
                                             <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                               <tbody>
                                                 <tr>
                                                   <td align="left" style="font-size:0;padding:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;word-break:break-word">
                                                     <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0" class="mj-full-width-mobile">
                                                       <tbody>
                                                         <tr>
                                                           <td style="width:47px" class="mj-full-width-mobile"><img alt="Image" height="auto" src="https://img.mmdocdn.com/mailmodo/image/upload/v1664448939/editor/p/61f9f348-2323-438e-86d3-0894f12d4309/04ea4926c01a98b7a6459ce0327803c7_z8szs4.png" style="border:0 solid transparent;border-radius:0;display:block;outline:0;text-decoration:none;height:auto;width:100%;font-size:13px" width="47"></td>
                                                         </tr>
                                                       </tbody>
                                                     </table>
                                                   </td>
                                                 </tr>
                                               </tbody>
                                             </table>
                                           </td>
                                         </tr>
                                       </tbody>
                                     </table>
                                   </div>
       
                                   <!--[if mso | IE]></td><td style="vertical-align:top;width:492px;" ><![endif]-->
                                   <div class="mj-column-per-88 mj-outlook-group-fix" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:88%">
                                     <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                       <tbody>
                                         <tr>
                                           <td style="background-color:transparent;border:0 solid transparent;vertical-align:top;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px">
                                             <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                               <tbody>
                                                 <tr>
                                                   <td align="left" style="font-size:0;padding:10px 25px;padding-top:0;padding-right:0;padding-bottom:8px;padding-left:10px;word-break:break-word">
                                                     <div style="font-family:Helvetica;font-size:18px;font-weight:700;letter-spacing:0;line-height:1;text-align:left;color:#1e293b">
                                                       <p><span style="color:#231192;font-family:Arial,Helvetica,sans-serif;font-size:13px">CREATE A UNIFIED LINK</span></p>
                                                     </div>
                                                   </td>
                                                 </tr>
                                                 <tr>
                                                   <td align="left" style="font-size:0;padding:10px 25px;padding-top:0;padding-right:0;padding-bottom:0;padding-left:10px;word-break:break-word">
                                                     <div style="font-family:Helvetica;font-size:14px;font-weight:400;letter-spacing:0;line-height:1.5;text-align:left;color:#475569">
                                                       <p><span style="background-color:#fff;color:#334155;font-size:17px">Gather all your social media profiles and important links in one place for easy access. With Ownlink, you can create a single, shareable link that simplifies your online presence.
       
       </span></p>
                                                     </div>
                                                   </td>
                                                 </tr>
                                                 <tr>
                                                   <td align="left" vertical-align="middle" style="font-size:0;padding:0;word-break:break-word">
                                                     <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;width:auto;line-height:100%">
                                                       <tbody>
                                                         <tr>
                                                           <td align="center" bgcolor="#ffffff" role="presentation" style="border:0 solid none;border-radius:4px;cursor:auto;height:auto;mso-padding-alt:6px 12px 6px 12px;background:#fff" valign="middle"><a href="https://www.ownlink.vercel.app/routes/welcome" style="display:inline-block;background:#fff;color:#5c55e7;font-family:Helvetica;font-size:14px;font-weight:400;line-height:1;letter-spacing:1px;margin:0;text-decoration:none;text-transform:none;padding:6px 12px 6px 12px;mso-padding-alt:0;border-radius:4px" target="_blank" data-block-id="blockogvsg654" data-block-type="block" data-url-id="73289bd3-8e10-50a4-a117-9b8f4dccbbdd">Learn More&#x2192;</a></td>
                                                         </tr>
                                                       </tbody>
                                                     </table>
                                                   </td>
                                                 </tr>
                                               </tbody>
                                             </table>
                                           </td>
                                         </tr>
                                       </tbody>
                                     </table>
                                   </div>
       
                                   <!--[if mso | IE]></td></tr></table><![endif]-->
                                 </div>
       
                                 <!--[if mso | IE]></td></tr></table><![endif]-->
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </div>
       
                       <!--[if mso | IE]></td></tr></table></td></tr><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                       <div style="background:#fff;background-color:#fff;margin:0 auto;max-width:600px">
                         <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fff;background-color:#fff;width:100%">
                           <tbody>
                             <tr>
                               <td style="border:0 solid transparent;direction:ltr;font-size:0;padding:20px 0;padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:10px;text-align:center">
       
                                 <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="width:560px;" ><![endif]-->
                                 <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr">
       
                                   <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td style="vertical-align:top;width:67px;" ><![endif]-->
                                   <div class="mj-column-per-12 mj-outlook-group-fix" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:12%">
                                     <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                       <tbody>
                                         <tr>
                                           <td style="background-color:transparent;border:0 solid transparent;vertical-align:top;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px">
                                             <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                               <tbody>
                                                 <tr>
                                                   <td align="left" style="font-size:0;padding:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;word-break:break-word">
                                                     <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0">
                                                       <tbody>
                                                         <tr>
                                                           <td style="width:47px"><img alt="Image" height="auto" src="https://img.mmdocdn.com/mailmodo/image/upload/v1664448947/editor/p/61f9f348-2323-438e-86d3-0894f12d4309/9f0e25e1349c2b7763f25eeb23d034cf_h08u2d.png" style="border:0 solid transparent;border-radius:0;display:block;outline:0;text-decoration:none;height:auto;width:100%;font-size:13px" width="47"></td>
                                                         </tr>
                                                       </tbody>
                                                     </table>
                                                   </td>
                                                 </tr>
                                               </tbody>
                                             </table>
                                           </td>
                                         </tr>
                                       </tbody>
                                     </table>
                                   </div>
       
                                   <!--[if mso | IE]></td><td style="vertical-align:top;width:492px;" ><![endif]-->
                                   <div class="mj-column-per-88 mj-outlook-group-fix" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:88%">
                                     <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                       <tbody>
                                         <tr>
                                           <td style="background-color:transparent;border:0 solid transparent;vertical-align:top;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px">
                                             <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                               <tbody>
                                                 <tr>
                                                   <td align="left" style="font-size:0;padding:10px 25px;padding-top:0;padding-right:0;padding-bottom:8px;padding-left:10px;word-break:break-word">
                                                     <div style="font-family:Helvetica;font-size:18px;font-weight:700;letter-spacing:0;line-height:1;text-align:left;color:#1e293b">
                                                       <p><span style="color:#231192;font-size:13px">PERSONALIZE APPEARENCE</span></p>
                                                     </div>
                                                   </td>
                                                 </tr>
                                                 <tr>
                                                   <td align="left" style="font-size:0;padding:10px 25px;padding-top:0;padding-right:0;padding-bottom:0;padding-left:10px;word-break:break-word">
                                                     <div style="font-family:Helvetica;font-size:14px;font-weight:400;letter-spacing:0;line-height:1.5;text-align:left;color:#475569">
                                                       <p><span style="background-color:#fff;color:rgba(38,38,38,.9);font-size:17px">Tailor the look and feel of your Ownlink to match your personal style. Choose from various customization options and make your Ownlink page uniquely yours.</span></p>
                                                     </div>
                                                   </td>
                                                 </tr>
                                                 <tr>
                                                   <td align="left" vertical-align="middle" style="font-size:0;padding:0;word-break:break-word">
                                                     <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;width:auto;line-height:100%">
                                                       <tbody>
                                                         <tr>
                                                           <td align="center" bgcolor="#ffffff" role="presentation" style="border:0 solid none;border-radius:4px;cursor:auto;height:auto;mso-padding-alt:6px 12px 6px 12px;background:#fff" valign="middle"><a href="https://www.ownlink.vercel.app/routes/welcome" style="display:inline-block;background:#fff;color:#5c55e7;font-family:Helvetica;font-size:14px;font-weight:400;line-height:1;letter-spacing:1px;margin:0;text-decoration:none;text-transform:none;padding:6px 12px 6px 12px;mso-padding-alt:0;border-radius:4px" target="_blank" data-block-id="blocklhhuq667" data-block-type="block" data-url-id="de078a71-47fa-5925-aa83-0cd44a806c03">Learn More&#x2192;</a></td>
                                                         </tr>
                                                       </tbody>
                                                     </table>
                                                   </td>
                                                 </tr>
                                               </tbody>
                                             </table>
                                           </td>
                                         </tr>
                                       </tbody>
                                     </table>
                                   </div>
       
                                   <!--[if mso | IE]></td></tr></table><![endif]-->
                                 </div>
       
                                 <!--[if mso | IE]></td></tr></table><![endif]-->
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </div>
       
                       <!--[if mso | IE]></td></tr></table></td></tr><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                       <div style="background:#fff;background-color:#fff;margin:0 auto;max-width:600px">
                         <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fff;background-color:#fff;width:100%">
                           <tbody>
                             <tr>
                               <td style="border:0 solid transparent;direction:ltr;font-size:0;padding:20px 0;padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:10px;text-align:center">
       
                                 <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="width:560px;" ><![endif]-->
                                 <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr">
       
                                   <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td style="vertical-align:top;width:67px;" ><![endif]-->
                                   <div class="mj-column-per-12 mj-outlook-group-fix" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:12%">
                                     <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                       <tbody>
                                         <tr>
                                           <td style="background-color:transparent;border:0 solid transparent;vertical-align:top;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px">
                                             <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                               <tbody>
                                                 <tr>
                                                   <td align="left" style="font-size:0;padding:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;word-break:break-word">
                                                     <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0">
                                                       <tbody>
                                                         <tr>
                                                           <td style="width:47px"><img alt="Image" height="auto" src="https://img.mmdocdn.com/mailmodo/image/upload/v1664448956/editor/p/61f9f348-2323-438e-86d3-0894f12d4309/26c0af42b2b0e84bfb27dd9f68d5924a_syalay.png" style="border:0 solid transparent;border-radius:0;display:block;outline:0;text-decoration:none;height:auto;width:100%;font-size:13px" width="47"></td>
                                                         </tr>
                                                       </tbody>
                                                     </table>
                                                   </td>
                                                 </tr>
                                               </tbody>
                                             </table>
                                           </td>
                                         </tr>
                                       </tbody>
                                     </table>
                                   </div>
       
                                   <!--[if mso | IE]></td><td style="vertical-align:top;width:492px;" ><![endif]-->
                                   <div class="mj-column-per-88 mj-outlook-group-fix" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:88%">
                                     <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                       <tbody>
                                         <tr>
                                           <td style="background-color:transparent;border:0 solid transparent;vertical-align:top;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px">
                                             <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                               <tbody>
                                                 <tr>
                                                   <td align="left" style="font-size:0;padding:10px 25px;padding-top:0;padding-right:0;padding-bottom:8px;padding-left:10px;word-break:break-word">
                                                     <div style="font-family:Helvetica;font-size:18px;font-weight:700;letter-spacing:0;line-height:1;text-align:left;color:#1e293b">
                                                       <p><span style="color:#231192;font-family:Arial,Helvetica,sans-serif;font-size:13px">TRACK ENGAGEMENT</span></p>
                                                     </div>
                                                   </td>
                                                 </tr>
                                                 <tr>
                                                   <td align="left" style="font-size:0;padding:10px 25px;padding-top:0;padding-right:0;padding-bottom:0;padding-left:10px;word-break:break-word">
                                                     <div style="font-family:Helvetica;font-size:14px;font-weight:400;letter-spacing:0;line-height:1.5;text-align:left;color:#475569">
                                                       <p><span style="font-size:17px">Monitor views and clicks on your Ownlink to see the impact of your online presence. Understand your audience better and make data-driven decisions.
       
       </span></p>
                                                     </div>
                                                   </td>
                                                 </tr>
                                                 <tr>
                                                   <td align="left" vertical-align="middle" style="font-size:0;padding:0;word-break:break-word">
                                                     <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;width:auto;line-height:100%">
                                                       <tbody>
                                                         <tr>
                                                           <td align="center" bgcolor="#ffffff" role="presentation" style="border:0 solid none;border-radius:4px;cursor:auto;height:auto;mso-padding-alt:6px 12px 6px 12px;background:#fff" valign="middle"><a href="https://www.ownlink.vercel.app/routes/welcome" style="display:inline-block;background:#fff;color:#5c55e7;font-family:Helvetica;font-size:14px;font-weight:400;line-height:1;letter-spacing:1px;margin:0;text-decoration:none;text-transform:none;padding:6px 12px 6px 12px;mso-padding-alt:0;border-radius:4px" target="_blank" data-block-id="blockh6d6g668" data-block-type="block" data-url-id="653a4d23-8275-58ea-9d3a-7158a28a03f0">Learn More&#x2192;</a></td>
                                                         </tr>
                                                       </tbody>
                                                     </table>
                                                   </td>
                                                 </tr>
                                               </tbody>
                                             </table>
                                           </td>
                                         </tr>
                                       </tbody>
                                     </table>
                                   </div>
       
                                   <!--[if mso | IE]></td></tr></table><![endif]-->
                                 </div>
       
                                 <!--[if mso | IE]></td></tr></table><![endif]-->
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </div>
       
                       <!--[if mso | IE]></td></tr></table></td></tr><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                    
       
                       <!--[if mso | IE]></td></tr></table></td></tr><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                       <div style="background:#fff;background-color:#fff;margin:0 auto;max-width:600px">
                         <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fff;background-color:#fff;width:100%">
                           <tbody>
                             <tr>
                               <td style="border:0 solid #fff;direction:ltr;font-size:0;padding:20px 0;padding-bottom:24px;padding-left:0;padding-right:0;padding-top:8px;text-align:center">
       
                                 <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                                 <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:transparent;border:0 solid transparent;vertical-align:top" width="100%">
                                     <tbody>                               
                                       <tr>
                                         <td align="left" vertical-align="middle" style="font-size:0;padding:16px 0 16px 40px;word-break:break-word">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;width:auto;line-height:100%">
                                             <tbody>
                                               <tr>
                                                 <td align="center" bgcolor="#1D1D53" role="presentation" style="border:0 solid #1D1D53;border-radius:600px;cursor:auto;height:auto;mso-padding-alt:14px 80px 14px 80px;background:#1D1D53" valign="middle"><a href="https://www.ownlink.vercel.app/" style="display:inline-block;background:#1D1D53;color:#fff;font-family:Helvetica;font-size:16px;font-weight:700;line-height:1.5;letter-spacing:0;margin:0;text-decoration:none;text-transform:none;padding:14px 80px 14px 80px;mso-padding-alt:0;border-radius:600px" target="_blank" data-block-id="blockmk8yj752" data-block-type="block" data-url-id="751d7595-cb9d-59eb-8a3d-e11e6c9db503"><strong>Get Started</strong></a></td>
                                               </tr>
                                             </tbody>
                                           </table>
                                         </td>
                                       </tr>
                                     </tbody>
                                   </table>
                                 </div>
       
                                 <!--[if mso | IE]></td></tr></table><![endif]-->
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </div>
       
                    
       
             
       
       
                       <!--[if mso | IE]></td></tr></table></td></tr><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                       <div style="background:#15103c;background-color:#15103c;margin:0 auto;max-width:600px">
                         <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#15103c;background-color:#15103c;width:100%">
                           <tbody>
                             <tr>
                               <td style="border:undefined solid undefined;direction:ltr;font-size:0;padding:20px 0;padding-bottom:18px;padding-left:16px;padding-right:16px;padding-top:18px;text-align:center">
       
                                 <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td align="left" class="" style="vertical-align:top;width:568px;" ><![endif]-->
                                 <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:transparent;border:0 solid undefined;vertical-align:top" width="100%">
                                     <tbody>
                                       <tr>
                                         <td style="background:0 0;font-size:0;word-break:break-word">
                                           <div style="height:2px;line-height:2px">&#x200A;</div>
                                         </td>
                                       </tr>
                                       <tr>
                                         <td align="left" style="font-size:0;padding:10px 25px;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;word-break:break-word">
                                           <div style="font-family:Helvetica;font-size:12px;letter-spacing:.4px;line-height:1.6;text-align:left;color:#444">
                                             <p style="text-align:center"><span style="color:#e3e0ff;font-size:18px">Ownlink &copy;</span></p>
                                             <!-- <p style="text-align:center"><span style="color:#e3e0ff">16192, Coastal Highway, Lewes, Delaware, 19958, United States</span></p> -->
                                           </div>
                                         </td>
                                       </tr>
                                       <tr>
                                         <td style="background:0 0;font-size:0;word-break:break-word">
                                           <div style="height:8px;line-height:8px">&#x200A;</div>
                                         </td>
                                       </tr>
                                     </tbody>
                                   </table>
                                 </div>
       
                                 <!--[if mso | IE]></td></tr></table><![endif]-->
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </div>
       
                       <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]-->
                     </td>
                   </tr>
                 </tbody>
               </table>
             </div>
       
             <!--[if mso | IE]></td></tr></table><![endif]-->
           </div><img width="1" height="1" alt="signature" src="https://t.mmtrkr.com/opens/html/667e3353-d30c-4923-bd63-17bf77b42cf2/0d97b5b9-0d5e-4c44-a491-47709772f8db">
           <table width="100%" align="center" style="font-family:&apos;Open Sans&apos;;max-width:600px;margin:0 auto;">
             <tbody>
               <tr>
                 <td width="50%" align="left">
                   <a style="margin-left: 10px; margin-right: 5px; color: grey; font-size: 10px; text-decoration: underline;" href="#">Unsubscribe</a>
                 </td>
                 <td width="50%" align="right">
                   <span style="margin-left: 5px; margin-right: 10px; color: grey; font-size: 10px; text-decoration: underline;">&#x26A1; by Mailmodo</span>
                 </td>
               </tr>
             </tbody>
           </table>
         </body>
       </html>`;
};
