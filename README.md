Linux Dashboard
===

Dashboard minimalist and non-intrusive for linux servers. Process monitors real-time CPU, memory and SWAPE using NodeJS and Socket.IO

Dashboard minimalist and non-intrusive for Linux Servers. Monitoring in real-time Proccess, CPU, memory and Swap with NodeJS and Socket.IO

### Pre-Installation:

Linux **: **

`` `
 install:
 CentOS, Redhat, Fedora: lsb_release
 Ubuntu, Debian lsb-release
 
 eg: CentOS
          # Yum -y install redhat-lsb-core *
     Debian
          # Apt-get install lsb-release
`` `


### Installation:

Linux **: **

`` `
 $ Mkdir -p / var / adm / ssoo

 $ Cd / var / adm / ssoo

 $ Git clone https://github.com/mobarrio/dashboard.git

 $ Npm install && cd dashboard
`` `


** Prepare scripts autostart: **
`` `
 $ Npm install -g forever
   
 $ Cp /var/adm/ssoo/dashboard/etc/dashgs.sh /etc/init.d/dashgs
   
 $ Chmod 755 /etc/init.d/dashgs
   
 $ Chkconfig --add dashgs
`` `

 
** Run the app in debug mode: **
`` `
 $ DEBUG = dashboard: server

 $ Npm start
`` `


Run the app STANDALONE **: **
`` `
     $ Node bin / server.js
`` `


** Run the app via init.d (FOREVER): **
`` `
     $ /etc/init.d/dashgs Start
`` `

   
** After you run in a browser: **
`` `
   http: // server: 666 /
`` `
   

### Demo
Output ** TOP **
<Img src = "https://raw.githubusercontent.com/mobarrio/dashboard/master/public/images/Dashboard.png" />

** ** Output IOSTAT
<Img src = "https://raw.githubusercontent.com/mobarrio/dashboard/master/public/images/Dashboard-iostat.png" />

** ** Alerts
<Img src = "https://raw.githubusercontent.com/mobarrio/dashboard/master/public/images/Dashboard02.png" />
<Div style = "text-align: center;">
<Img src = "https://raw.githubusercontent.com/mobarrio/dashboard/master/public/images/Dashboard-info.png" />
<Img src = "https://raw.githubusercontent.com/mobarrio/dashboard/master/public/images/Dashboard-alert.png" />
</ Div>

**Summary**
<Div style = "text-align: center;">
<Img src = "https://raw.githubusercontent.com/mobarrio/dashboard/master/public/images/Dashboard-header.png" />
</ Div>

Credits ###
** This application uses the following libraries: **

`` `
- Socket.IO - by http://socket.io
- TopParser - by https://github.com/devalexqt/topparser
- Bootstrap - by http://getbootstrap.com
- Lumino Bootstrap Admin Template - by http://medialoot.com
# WebAnalyticsKPI
