exports.cancelorderHTML = () => {
  return `
       <!doctype html>
       <html>
         <head>
           <meta charset="utf-8">
           <meta name="viewport" content="width=device-width">
       
           <!--[if !mso]><meta http-equiv="x-ua-compatible" content="IE=edge"><![endif]-->
       
           <!--[if gte mso 9]><xml><o:officedocumentsettings><o:allowpng><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml><![endif]-->
           <style type="text/css">
             @media screen and (max-width:699px) {
               .t1of12,
               .t2of12,
               .t3of12,
               .t4of12,
               .t5of12,
               .t6of12,
               .t7of12,
               .t8of12,
               .t9of12,
               .t10of12,
               .t11of12,
               .t12of12,
               .full {
                 width: 100% !important;
                 max-width: none !important
               }
               a[x-apple-data-detectors] {
                 color: inherit !important;
                 text-decoration: none !important;
                 font-size: inherit !important;
                 font-family: inherit !important;
                 font-weight: inherit !important;
                 line-height: inherit !important
               }
               .headerTextLeft {
                 text-align: left !important
               }
             }
             .p1b_20_16 {
               font-size: 20px !important
             }
             @media screen and (-webkit-min-device-pixel-ratio:1) {
               .arrow {
                 vertical-align: 6%;
                 line-height: 20px !important
               }
             }
             @media screen {
               @font-face {
                 font-family: clanpro-thin;
                 src: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/global/fonts/ClanProForUBER-Thin.woff)format('woff'), url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/global/fonts/ClanProForUBER-Thin.ttf)format('truetype');
                 font-weight: 400 !important;
                 font-style: normal !important;
                 mso-font-alt: 'Arial'
               }
               @font-face {
                 font-family: clanpro-book;
                 src: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/global/fonts/ClanProForUBER-Book.woff)format('woff'), url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/global/fonts/ClanProForUBER-Book.ttf)format('truetype');
                 font-weight: 400 !important;
                 font-style: normal !important;
                 mso-font-alt: 'Arial'
               }
               @font-face {
                 font-family: clanpro-news;
                 src: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/global/fonts/ClanProForUBER-News.woff)format('woff'), url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/global/fonts/ClanProForUBER-News.ttf)format('truetype');
                 font-weight: 400 !important;
                 font-style: normal !important;
                 mso-font-alt: 'Arial'
               }
               @font-face {
                 font-family: ubermove;
                 src: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2019/global/fonts/UberMove-Light.woff2)format('woff2'), url(https://d1a3f4spazzrp4.cloudfront.net/emails/2019/global/fonts/UberMove-Light.woff)format('woff');
                 font-weight: 200;
                 font-style: normal;
                 font-display: swap;
                 mso-font-alt: 'Arial'
               }
               @font-face {
                 font-family: ubermove;
                 src: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2019/global/fonts/UberMove-Regular.woff2)format('woff2'), url(https://d1a3f4spazzrp4.cloudfront.net/emails/2019/global/fonts/UberMove-Regular.woff)format('woff');
                 font-weight: 400;
                 font-style: normal;
                 font-display: swap;
                 mso-font-alt: 'Arial'
               }
               @font-face {
                 font-family: ubermove;
                 src: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2019/global/fonts/UberMove-Medium.woff2)format('woff2'), url(https://d1a3f4spazzrp4.cloudfront.net/emails/2019/global/fonts/UberMove-Medium.woff)format('woff');
                 font-weight: 500;
                 font-style: normal;
                 font-display: swap;
                 mso-font-alt: 'Arial'
               }
               @font-face {
                 font-family: ubermove;
                 src: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2019/global/fonts/UberMove-Bold.woff2)format('woff2'), url(https://d1a3f4spazzrp4.cloudfront.net/emails/2019/global/fonts/UberMove-Bold.woff)format('woff');
                 font-weight: 600;
                 font-style: normal;
                 font-display: swap;
                 mso-font-alt: 'Arial'
               }
               @font-face {
                 font-family: ubermovetext;
                 src: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2019/global/fonts/UberMoveText-Light.woff2)format('woff2'), url(https://d1a3f4spazzrp4.cloudfront.net/emails/2019/global/fonts/UberMoveText-Light.woff)format('woff');
                 font-weight: 200;
                 font-style: normal;
                 font-display: swap;
                 mso-font-alt: 'Arial'
               }
               @font-face {
                 font-family: ubermovetext;
                 src: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2019/global/fonts/UberMoveText-Regular.woff2)format('woff2'), url(https://d1a3f4spazzrp4.cloudfront.net/emails/2019/global/fonts/UberMoveText-Regular.woff)format('woff');
                 font-weight: 400;
                 font-style: normal;
                 font-display: swap;
                 mso-font-alt: 'Arial'
               }
               @font-face {
                 font-family: ubermovetext;
                 src: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2019/global/fonts/UberMoveText-Medium.woff2)format('woff2'), url(https://d1a3f4spazzrp4.cloudfront.net/emails/2019/global/fonts/UberMoveText-Medium.woff)format('woff');
                 font-weight: 500;
                 font-style: normal;
                 font-display: swap;
                 mso-font-alt: 'Arial'
               }
               @font-face {
                 font-family: ubermovetext;
                 src: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2019/global/fonts/UberMoveText-Bold.woff2)format('woff2'), url(https://d1a3f4spazzrp4.cloudfront.net/emails/2019/global/fonts/UberMoveText-Bold.woff)format('woff');
                 font-weight: 600;
                 font-style: normal;
                 font-display: swap;
                 mso-font-alt: 'Arial'
               }
               @font-face {
                 font-family: clanpro-medium;
                 src: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/global/fonts/ClanProForUBER-Medium.woff)format('woff'), url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/global/fonts/ClanProForUBER-Medium.ttf)format('truetype');
                 font-weight: 400 !important;
                 font-style: normal !important;
                 mso-font-alt: 'Arial'
               }
             }
             .btn a:hover {
               background-color: #007279 !important;
               border-color: #007279 !important
             }
             .textcta a:hover {
               color: #007279 !important
             }
             a[x-apple-data-detectors] {
               color: inherit !important;
               text-decoration: none !important;
               font-size: inherit !important;
               font-family: inherit !important;
               font-weight: inherit !important;
               line-height: inherit !important
             }
             @media yahoo {
               .wrapper {
                 min-width: 700px !important
               }
               * {
                 overflow: visible !important
               }
               .y-overflow-hidden {
                 overflow: hidden !important
               }
             }
           </style>
           <style>
             @media yahoo {
               .wrapper {
                 min-width: 700px !important
               }
             }
             @media screen {
               @font-face {
                 font-family: uber18-bold;
                 src: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/global/fonts/uber18/Uber_Bold_180627.woff)format('woff'), url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/global/fonts/uber18/Uber_Bold_180627.ttf)format('truetype');
                 font-weight: 400 !important;
                 font-style: normal !important;
                 mso-font-alt: 'Arial'
               }
               @font-face {
                 font-family: uber18-medium;
                 src: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/global/fonts/uber18/Uber_Medium_180627.woff)format('woff'), url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/global/fonts/uber18/Uber_Medium_180627.ttf)format('truetype');
                 font-weight: 400 !important;
                 font-style: normal !important;
                 mso-font-alt: 'Arial'
               }
               @font-face {
                 font-family: uber18-text-regular;
                 src: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/global/fonts/uber18/Uber_Text_Regular_180627.woff)format('woff'), url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/global/fonts/uber18/Uber_Text_Regular_180627.ttf)format('truetype');
                 font-weight: 400 !important;
                 font-style: normal !important;
                 mso-font-alt: 'Arial'
               }
               @font-face {
                 font-family: uber18-text-bold;
                 src: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/global/fonts/uber18/Uber_Text_Bold_180627.woff)format('woff'), url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/global/fonts/uber18/Uber_Text_Bold_180627.ttf)format('truetype');
                 font-weight: 400 !important;
                 font-style: normal !important;
                 mso-font-alt: 'Arial'
               }
               @font-face {
                 font-family: uber18-text-medium;
                 src: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/global/fonts/uber18/Uber_Text_Medium_180627.woff)format('woff'), url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/global/fonts/uber18/Uber_Text_Medium_180627.ttf)format('truetype');
                 font-weight: 400 !important;
                 font-style: normal !important;
                 mso-font-alt: 'Arial'
               }
             }
             .Uber18_text_p1 {
               font-size: 16px;
               line-height: 28px;
               font-family: UberMoveText, open sans, helvetica neue, Helvetica, sans-serif;
               font-weight: 400;
               color: #000
             }
             .Uber18_text_p2 {
               font-size: 16px;
               line-height: 28px;
               font-family: UberMoveText, open sans, helvetica neue, Helvetica, sans-serif;
               font-weight: 600;
               color: #000
             }
             .Uber18_text_p3 {
               font-size: 16px;
               line-height: 28px;
               font-family: UberMoveText, open sans, helvetica neue, Helvetica, sans-serif;
               font-weight: 500;
               color: #000
             }
             .Uber18_p2 {
               font-size: 16px;
               line-height: 28px;
               font-family: UberMove, open sans, helvetica neue, Helvetica, sans-serif;
               font-weight: 600;
               color: #000
             }
             .Uber18_p3 {
               font-size: 16px;
               line-height: 28px;
               font-family: UberMove, open sans, helvetica neue, Helvetica, sans-serif;
               font-weight: 500;
               color: #888
             }
             .grey_divider {
               width: 100%;
               height: 1px;
               background-color: #bdbdbd
             }
             .mobileMap,
             .mobileContent {
               display: none
             }
             .btn a:hover {
               background-color: #084fd2 !important;
               border-color: #084fd2 !important
             }
             .textcta a:hover {
               color: #084fd2 !important
             }
             .btn_green a:hover {
               background-color: #006900 !important;
               border-color: #006900 !important
             }
             .textcta_green a:hover {
               color: #006900 !important
             }
             .receipt_body {
               max-width: 648px
             }
             @media screen and (max-width:9000px) {
               .header_h2 {
                 font-size: 30px !important;
                 line-height: 40px !important;
                 font-weight: 500;
                 word-break: break-word
               }
               .header_h3 {
                 font-size: 44px !important;
                 line-height: 48px !important
               }
               .header_Uber18_text_p1 {
                 font-size: 22px !important
               }
               .bannerDivider_eats {
                 border-right: 1px solid #000
               }
             }
             @media screen and (max-width:1105px) {
               u~div .gmail_header_icon_table {
                 float: right !important
               }
             }
             @media screen and (max-width:3000px) {
               .desktopPipe {
                 display: block !important
               }
               .bannerDivider {
                 border-right: 1px solid #fff !important
               }
             }
             @media screen and (max-width:699px) {
               .desktopMap,
               .desktopPipe {
                 display: none !important
               }
               .mobileMap {
                 display: block !important
               }
               .bannerPipe {
                 border: none !important;
                 display: block !important;
                 padding-top: 8px !important;
                 padding-bottom: 8px !important
               }
               .bannerDivider {
                 border: none !important
               }
               .visa_m_vertical_pad {
                 padding-top: 34px !important;
                 padding-bottom: 34px !important
               }
               .mobileContent * {
                 max-width: none !important;
                 max-height: none !important
               }
               .mobileCard_b_pad {
                 padding-bottom: 15px !important
               }
               .flag {
                 padding-left: 12px !important;
                 padding-right: 12px !important
               }
               .headline {
                 font-size: 36px !important;
                 padding-bottom: 35px !important
               }
               .header_illustrator {
                 margin: 0 auto !important
               }
               .header_icon {
                 margin: 0 0 0 auto
               }
               .mobile_img {
                 width: 100% !important;
                 height: auto !important;
                 max-width: 100% !important;
                 max-height: none !important
               }
               .desktopContent {
                 display: none !important
               }
               .mobileContent {
                 display: block !important
               }
               .total_head {
                 font-size: 26px !important;
                 line-height: 32px !important
               }
               .receipt_body {
                 max-width: none !important
               }
             }
             @media screen and (max-width:415px) {
               .header_bg_rider {
                 background-image: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/01/receipt/R-Default-1M.png) !important
               }
               .header_bg_eats_default {
                 background-image: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/01/receipt/E-Default-1M.png) !important
               }
               .header_bg_eats_tip_added {
                 background-image: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/01/receipt/E-Tip-2M.png) !important
               }
               .header_bg_eats_refund {
                 background-image: url(https://d1a3f4spazzrp4.cloudfront.net/emails/2017/01/receipt/E-Refund-3M.png) !important
               }
               .header_headline {
                 font-size: 24px !important
               }
               .bannerDivider_eats {
                 border: none !important
               }
               .eats_footer_table {
                 max-width: none !important;
                 width: 100% !important
               }
               .eats_footer_table * {
                 text-align: left !important
               }
               .eats_option_item {
                 padding-left: 15px !important
               }
               .header_h3 {
                 font-size: 34px !important;
                 line-height: 38px !important
               }
               .header_Uber18_text_p1 {
                 font-size: 20px !important
               }
               .logo {
                 padding-top: 25px !important
               }
               .total_head {
                 font-size: 34px !important
               }
               .flag {
                 padding-left: 11px !important;
                 padding-right: 10px !important
               }
               .desktopContent {
                 display: none !important
               }
               .mobileContent {
                 display: block !important
               }
               .p1b_20_16 {
                 font-size: 16px !important
               }
             }
             @media screen and (max-width:350px) {
               .eats_option_item {
                 padding-left: 0 !important
               }
             }
             .cta {
               font-size: 14px;
               line-height: 20px;
               font-family: UberMoveText, open sans, helvetica neue, Helvetica, sans-serif !important;
               font-weight: 600
             }
           </style>
       
           <!--[if (gte mso 9)|(IE)]><style>.desktopPipe{display:block!important}.bannerDivider{border-right:1px solid #fff!important}</style><![endif]-->
         </head>
         <body style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;background-color:#d6d6d5;margin:0;min-width:100%;padding:0;width:100%">
           <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color:#d6d6d5;border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%" bgcolor="#d6d6d5">
             <tr>
               <td align="center">
       
                 <!--[if (gte mso 9)|(IE)]><table width="700" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
                 <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;max-width:700px;mso-table-lspace:0;mso-table-rspace:0;width:100%" class="wrapper">
                   <tr>
                     <td style="background-color:#fff" align="center">
                       <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;margin:auto;max-width:700px;mso-table-lspace:0;mso-table-rspace:0;width:100%" class="tron">
                         <tr>
                           <td align="center">
                             <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color:#fff;border:none;border-collapse:collapse;border-spacing:0;margin:auto;mso-table-lspace:0;mso-table-rspace:0;width:100%" bgcolor="#ffffff" class="basetable">
                               <tr>
                                 <td align="center">
       
                                   <!--[if (gte mso 9)|(IE)]><table width="700" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td align="center"><![endif]-->
                                   <table width="100%" border="0" cellpadding="0" cellspacing="0" class="basetable" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                     <tr>
                                       <td align="center" style="background-color:#fff">
                                         <table border="0" cellpadding="0" cellspacing="0" width="100%" class="basetable" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                           <tr>
                                             <td>
       
                                               <!--[if (gte mso 9)|(IE)]><table width="700" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
                                               <table border="0" cellpadding="0" cellspacing="0" width="100%" class="basetable" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                 <tr>
                                                   <td bgcolor="#ffffff">
       
                                                     <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
                                                     <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                       <tbody>
                                                         <tr>
                                                           <td align="left" style="direction:ltr;text-align:left">
                                                             <table border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                               <tbody>
                                                                 <tr>
                                                                   <td bgcolor="#fedacd" style="direction:ltr;text-align:left">
                                                                     <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                       <tbody>
                                                                         <tr>
                                                                           <td width="14" style="direction:ltr;text-align:left">&nbsp;</td>
                                                                           <td align="left" style="direction:ltr;text-align:left">
                                                                             <table border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                               <tbody>
                                                                                 <tr>
                                                                                   <td align="center">
       
                                                                                     <!--[if (gte mso 9)|(IE)]><table width="616" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
                                                                                     <table border="0" cellpadding="0" cellspacing="0" class="t11of12 layout" align="center" style="border:none;border-collapse:collapse;border-spacing:0;max-width:616px;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                                       <tbody>
                                                                                         <tr>
                                                                                           <td align="center" style="font-size:1px;height:1px;line-height:1px;padding-left:0!important;padding-right:0!important">
       
                                                                                             <!--[if (gte mso 9)|(IE)]><table width="560" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
                                                                                             <table border="0" cellpadding="0" cellspacing="0" class="t10of12 layout" align="center" style="border:none;border-collapse:collapse;border-spacing:0;max-width:560px;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                                               <tbody>
                                                                                                 <tr>
                                                                                                   <td width="12" style="font-size:1px;height:1px;line-height:1px;padding-left:0!important;padding-right:0!important;direction:ltr;text-align:left">&nbsp;</td>
                                                                                                   <td style="font-size:1px;height:1px;line-height:1px;padding-left:0!important;padding-right:0!important;direction:ltr;text-align:left">
                                                                                                     <table border="0" cellpadding="0" cellspacing="0" width="100%" align="left" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;width:100%">
                                                                                                       <tbody>
                                                                                                         <tr>
                                                                                                           <td style="direction:ltr;text-align:left">
                                                                                                             <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                                                               <tbody>
                                                                                                                 <tr>
                                                                                                                   <td class="logo" align="left" style="padding-top:45px;padding-bottom:40px;direction:ltr;text-align:left" valign="middle">
                                                                                                                     <table border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                                                                       <tbody>
                                                                                                                         <tr>
                                                                                                                         <td class="Uber18_text_p1 black" valign="top" align="left" width="65" height="65" style="color:#000;font-family:UberMoveText,open sans,helvetica neue,Helvetica,sans-serif;line-height:30px;padding-right:12px;padding-top:5px;direction:ltr;text-align:left;display:flex"><img src="https://www.ownlink.live/static/media/logo-3d-2.def374ebc20e2f4daf5e.png" border="0" width="65" height='65' style="-ms-interpolation-mode:bicubic;clear:both;display:block;height:auto;outline:none;text-decoration:none">
                                                                                                                                         
                                                                                                                         </td>                                                                                                                           <td class="Uber18_text_p1" width="80%" align="right" style="color:#000;font-family:UberMoveText,open sans,helvetica neue,Helvetica,sans-serif;font-size:12px;line-height:18px;text-align:right;direction:ltr" valign="middle">
                                                                                                                             <div>Cancellation Fee
                                                                                                                               <span class="Uber18_text_p2" style="color:#000;font-family:UberMoveText,open sans,helvetica neue,Helvetica,sans-serif;font-size:12px;line-height:18px">₹49</span>
                                                                                                                           </td>
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
                                                                                                   </td>
                                                                                                   <td width="12" style="font-size:1px;height:1px;line-height:1px;padding-left:0!important;padding-right:0!important;direction:ltr;text-align:left">&nbsp;</td>
                                                                                                 </tr>
                                                                                               </tbody>
                                                                                             </table>
       
                                                                                             <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                                                                                           </td>
                                                                                         </tr>
                                                                                       </tbody>
                                                                                     </table>
       
                                                                                     <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                                                                                   </td>
                                                                                 </tr>
                                                                               </tbody>
                                                                             </table>
                                                                           </td>
                                                                           <td width="14" style="direction:ltr;text-align:left">&nbsp;</td>
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
                                                     <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                       <tbody>
                                                         <tr>
                                                           <td align="left" style="direction:ltr;text-align:left">
                                                             <table border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                               <tbody>
                                                                 <tr>
                                                                   <td background="https://d1a3f4spazzrp4.cloudfront.net/emails/2017/01/receipt_18_headerbg.png" bgcolor="#fedacd" width="700" valign="top" style="background-repeat:no-repeat;background-position:100% 100%;direction:ltr;text-align:left">
       
                                                                     <!--[if gte mso 9]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:700px;"><v:fill type="frame" origin="0, 1" position="0,1" src="https://d1a3f4spazzrp4.cloudfront.net/emails/2017/01/receipt_18_headerbg.png" color="#FEDACD"><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><![endif]-->
                                                                     <div>
                                                                       <div style="font-size:0;line-height:0">
                                                                         <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                           <tbody>
                                                                             <tr>
                                                                               <td width="14" style="direction:ltr;text-align:left">&nbsp;</td>
                                                                               <td align="left" style="direction:ltr;text-align:left">
                                                                                 <table border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                                   <tbody>
                                                                                     <tr>
                                                                                       <td align="center">
       
                                                                                         <!--[if (gte mso 9)|(IE)]><table width="616" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
                                                                                         <table border="0" cellpadding="0" cellspacing="0" class="t11of12 layout" align="center" style="border:none;border-collapse:collapse;border-spacing:0;max-width:616px;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                                           <tbody>
                                                                                             <tr>
                                                                                               <td align="center" style="font-size:1px;height:1px;line-height:1px;padding-left:0!important;padding-right:0!important">
       
                                                                                                 <!--[if (gte mso 9)|(IE)]><table width="560" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
                                                                                                 <table border="0" cellpadding="0" cellspacing="0" class="t10of12 layout" align="center" style="border:none;border-collapse:collapse;border-spacing:0;max-width:560px;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                                                   <tbody>
                                                                                                     <tr>
                                                                                                       <td width="12" style="font-size:1px;height:1px;line-height:1px;padding-left:0!important;padding-right:0!important;direction:ltr;text-align:left">&nbsp;</td>
                                                                                                       <td style="font-size:1px;height:1px;line-height:1px;padding-left:0!important;padding-right:0!important;direction:ltr;text-align:left">
                                                                                                         <table border="0" cellpadding="0" cellspacing="0" width="100%" align="left" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;width:100%">
                                                                                                           <tbody>
                                                                                                             <tr>
                                                                                                               <td style="direction:ltr;text-align:left">
                                                                                                                 <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                                                                   <tbody>
                                                                                                                     <tr>
                                                                                                                       <td align="left" style="font-size:0;direction:ltr;text-align:left">
       
                                                                                                                         <!--[if (gte mso 9)|(IE)]><table width="392" align="left" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
                                                                                                                         <table border="0" cellpadding="0" cellspacing="0" class="t7of12 layout" style="border:none;border-collapse:collapse;border-spacing:0;display:inline-block;max-width:392px;mso-table-lspace:0;mso-table-rspace:0;vertical-align:bottom;width:100%">
                                                                                                                           <tbody>
                                                                                                                             <tr>
                                                                                                                               <td style="font-size:1px;height:1px;line-height:1px;padding-left:0!important;padding-right:0!important;direction:ltr;text-align:left">
                                                                                                                                 <table border="0" cellpadding="0" cellspacing="0" width="100%" align="left" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                                                                                   <tbody>
                                                                                                                                     <tr>
                                                                                                                                       <td class="Uber18_p3 header_h3" style="color:#000;font-family:uber18-medium,Helvetica,Arial,sans-serif;font-size:34px;line-height:38px;padding-bottom:13px;direction:ltr;text-align:left">Your order has been canceled</td>
                                                                                                                                     </tr>
                                                                                                                                     <tr>
                                                                                                                                       <td class="Uber18_text_p1" style="color:#000;font-family:UberMoveText,open sans,helvetica neue,Helvetica,sans-serif;font-size:16px;line-height:28px;direction:ltr;text-align:left">
       
                                                                                                                                         <!--[if (gte mso 9)|(IE)]><table width="308" align="left" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
                                                                                                                                         <table border="0" cellpadding="0" cellspacing="0" class="t6of12 layout" align="left" style="border:none;border-collapse:collapse;border-spacing:0;max-width:308px;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                                                                                           <tbody>
                                                                                                                                             <tr>
                                                                                                                                               <td style="font-size:1px;height:1px;line-height:1px;padding-left:0!important;padding-right:0!important;direction:ltr;text-align:left">
                                                                                                                                                 <table border="0" cellpadding="0" cellspacing="0" width="100%" align="left" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;width:100%">
                                                                                                                                                   <tbody>
                                                                                                                                                     <tr>
                                                                                                                                                       <td class="Uber18_text_p1 header_Uber18_text_p1" style="color:#000;font-family:UberMoveText,open sans,helvetica neue,Helvetica,sans-serif;font-size:20px;line-height:26px;padding-bottom:40px;direction:ltr;text-align:left">Thank you for shopping with us.</td>
                                                                                                                                                     </tr>
                                                                                                                                                   </tbody>
                                                                                                                                                 </table>
                                                                                                                                               </td>
                                                                                                                                             </tr>
                                                                                                                                           </tbody>
                                                                                                                                         </table>
       
                                                                                                                                         <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                                                                                                                                       </td>
                                                                                                                                     </tr>
                                                                                                                                   </tbody>
                                                                                                                                 </table>
                                                                                                                               </td>
                                                                                                                             </tr>
                                                                                                                           </tbody>
                                                                                                                         </table>
       
                                                                                                                         <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
       
                                                                                                                         <!--[if (gte mso 9)|(IE)]></td><td valign="bottom"><![endif]-->
       
                                                                                                                         <!--[if (gte mso 9)|(IE)]><table width="144" align="left" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
                                                                                                                         <table border="0" cellpadding="0" cellspacing="0" class="t3of12 layout gmail_header_icon_table" style="border:none;border-collapse:collapse;border-spacing:0;display:inline-block;max-width:144px;mso-table-lspace:0;mso-table-rspace:0;vertical-align:bottom;width:100%">
                                                                                                                           <tbody>
                                                                                                                             <tr>
                                                                                                                               <td style="font-size:1px;height:1px;line-height:1px;padding-left:0!important;padding-right:0!important;direction:ltr;text-align:left">
                                                                                                                                 <table border="0" cellpadding="0" cellspacing="0" width="100%" align="left" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;width:100%">
                                                                                                                                   <tbody>
                                                                                                                                     <tr>
                                                                                                                                       <td style="padding-top:0;direction:ltr;text-align:left"><img class="header_icon" src="https://d1a3f4spazzrp4.cloudfront.net/receipt_v3/receipt_20_eats_cancel.png" width="144" height border="0" style="-ms-interpolation-mode:bicubic;clear:both;display:block;height:auto;margin:0 0 0 auto;width:144px;max-height:144px;max-width:144px;outline:none;text-decoration:none" alt></td>
                                                                                                                                     </tr>
                                                                                                                                   </tbody>
                                                                                                                                 </table>
                                                                                                                               </td>
                                                                                                                             </tr>
                                                                                                                           </tbody>
                                                                                                                         </table>
       
                                                                                                                         <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                                                                                                                       </td>
                                                                                                                     </tr>
                                                                                                                   </tbody>
                                                                                                                 </table>
                                                                                                               </td>
                                                                                                             </tr>
                                                                                                           </tbody>
                                                                                                         </table>
                                                                                                       </td>
                                                                                                       <td width="12" style="font-size:1px;height:1px;line-height:1px;padding-left:0!important;padding-right:0!important;direction:ltr;text-align:left">&nbsp;</td>
                                                                                                     </tr>
                                                                                                   </tbody>
                                                                                                 </table>
       
                                                                                                 <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                                                                                               </td>
                                                                                             </tr>
                                                                                           </tbody>
                                                                                         </table>
       
                                                                                         <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                                                                                       </td>
                                                                                     </tr>
                                                                                   </tbody>
                                                                                 </table>
                                                                               </td>
                                                                               <td width="14" style="direction:ltr;text-align:left">&nbsp;</td>
                                                                             </tr>
                                                                           </tbody>
                                                                         </table>
                                                                       </div>
                                                                     </div>
       
                                                                     <!--[if gte mso 9]></v:textbox></v:rect><![endif]-->
                                                                   </td>
                                                                 </tr>
                                                               </tbody>
                                                             </table>
                                                           </td>
                                                         </tr>
                                                       </tbody>
                                                     </table>
                                                     <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%;margin-bottom:20px">
                                                       <tr>
                                                         <td align="center" style="background-color:##ffffff">
                                                           <table border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                             <tr>
                                                               <td align="center">
       
                                                                 <!--[if (gte mso 9)|(IE)]><table width="648" align="center" cellpadding="0" cellspacing="0" border="0" style="border:none;border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0"><tr><td align="center" style="text-align:center" bgcolor="#ffffff"><![endif]-->
                                                                 <table class="receipt_body" width="100%" border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%" bgcolor="#ffffff">
                                                                   <tr>
                                                                     <td class="outsidegutter" align="left" bgcolor="#ffffff" style="padding:45px 14px 0;direction:ltr;text-align:left">
                                                                       <table border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                         <tr>
                                                                           <td align="center">
       
                                                                             <!--[if (gte mso 9)|(IE)]><table width="560" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
                                                                             <table border="0" cellpadding="0" cellspacing="0" class="t10of12" style="border:none;border-collapse:collapse;border-spacing:0;max-width:560px;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                               <tr>
                                                                                 <td style="padding-left:0;padding-right:0">
                                                                                   <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                                     <tr>
                                                                                       <td align="left" style="padding-left:12px;padding-right:12px">
                                                                                         <table border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                                           <tbody>
                                                                                             <tr>
                                                                                               <td class="Uber18_p3 total_head" valign="top" align="left" style="color:#000;font-family:UberMoveText,open sans,helvetica neue,Helvetica,sans-serif;font-size:44px;line-height:44px;padding-right:12px;direction:ltr;text-align:left">Total</td>
                                                                                               <td class="Uber18_p3 total_head" valign="top" align="right" style="color:#000;font-family:UberMoveText,open sans,helvetica neue,Helvetica,sans-serif;font-size:44px;line-height:44px;text-align:right;direction:ltr">₹49</td>
                                                                                             </tr>
                                                                                           </tbody>
                                                                                         </table>
                                                                                       </td>
                                                                                     </tr>
                                                                                   </table>
                                                                                   <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                                   <tr>
                                                                                     <td align="left" style="padding-left:12px;padding-right:12px"></td>
                                                                                   </tr>
                                                                                 </table>
                                                                                 <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                                   <tr>
                                                                                     <td align="left" style="padding-left:12px;padding-right:12px">
                                                                                       <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;width:100%">
                                                                                         <tbody>
                                                                                           <tr>
                                                                                             <td style="padding-top:26px;padding-bottom:26px">
                                                                                               <table border="0" cellpadding="0" cellspacing="0" width="100%" align="left" style="border:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;table-layout:fixed;width:100%">
                                                                                                 <tbody>
                                                                                                   <tr>
                                                                                                     <td valign="top" align="left" style="font-size:1px;line-height:1px;background-color:#bdbdbd">&nbsp;</td>
                                                                                                   </tr>
                                                                                                 </tbody>
                                                                                               </table>
                                                                                             </td>
                                                                                           </tr>
                                                                                         </tbody>
                                                                                       </table>
                                                                                         
         </body>
       </html>
       `;
};
