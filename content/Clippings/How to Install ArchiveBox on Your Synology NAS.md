---
title: "How to Install ArchiveBox on Your Synology NAS"
author:
contentPublished: "2024-06-21"
noteCreated: "2024-12-07"
tags:
  - "clippings"
  - "article"
description: "Step by step guide for installing ArchiveBox on your Synology NAS device."
takeaways:
Status: "🙏🏼 Want To Read"
url:
publish: true
---
[[ArchiveBox]] on [[Synology]]. 
## Highlights
![How to Install ArchiveBox on Your Synology NAS](https://mariushosting.com/wp-content/uploads/2023/06/How-to-Install-ArchiveBox-on-Your-Synology-NAS.png)

ArchiveBox is a powerful, self-hosted internet archiving solution to collect, save, and view sites you want to preserve offline. You can feed it URLs one at a time, or schedule regular imports from browser bookmarks or history, feeds like RSS, bookmark services like Pocket/Pinboard, and more. It saves snapshots of the URLs you feed it in several formats: HTML, PDF, PNG screenshots, WARC, and more out-of-the-box, with a wide variety of content extracted and preserved automatically (article text, audio/video, git repos, etc.). The goal of ArchiveBox is to sleep soundly knowing the part of the internet you care about will be automatically preserved in durable, easily accessible formats for decades after it goes down. In this step by step guide I will show you how to install **ArchiveBox** on your **Synology NAS** using Docker & Portainer.

## 

💡**Note:** This guide works perfectly with the latest version of **[ArchiveBox v.0.7.2](https://github.com/ArchiveBox/ArchiveBox/releases/tag/v0.7.2)**

- ## **STEP 1**

[**Please Support My work by Making a Donation**](https://mariushosting.com/support-my-work/).

- ## **STEP 2**

Install **[Portainer using my step by step guide](https://mariushosting.com/synology-30-second-portainer-install-using-task-scheduler-docker/)**. If you already have Portainer installed on your Synology NAS, skip this STEP. **Attention**: [**Make sure you have installed the latest Portainer version**](https://mariushosting.com/synology-how-to-update-portainer/).

- ## **STEP 3**

Make sure you have a synology.me Wildcard Certificate. [**Follow my guide to get a Wildcard Certificate**](https://mariushosting.com/synology-how-to-add-wildcard-certificate/). If you already have a synology.me Wildcard certificate, skip this STEP.

- ## **STEP 4**

Go to **Control Panel** / **Login Portal** / **Advanced** Tab / click **Reverse Proxy**. Follow the instructions in the image below.

![ArchiveBox Synology NAS Set up 1](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-1.png)

- ## **STEP 5**

Now click the “**Create**” button. Follow the instructions in the image below.

![ArchiveBox Synology NAS Set up 2](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-2.png)

- ## **STEP 6**

After you click the Create button, the window below will open. Follow the instructions in the image below.

On the General area, set the Reverse Proxy Name description: type in **ArchiveBox**. After that, add the following instructions:

**Source**:  
Protocol: **HTTPS**  
Hostname: **archivebox.yourname.synology.me**  
Port: **443**

**Check Enable HSTS**

**Destination**:  
Protocol: **HTTP**  
Hostname: **localhost**  
Port: **8460**

![ArchiveBox Synology NAS Set up 3](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-3.png)

- ## **STEP 7**

On the Reverse Proxy Rules click the **Custom Header** tab. Click **Create** and then, from the drop-down menu, click **WebSocket**. After you click on WebSocket, two Header Names and two Values will be automatically added. Click **Save**. Follow the instructions in the image below.

![Synology Proxy WebSocket](https://mariushosting.com/wp-content/uploads/2022/10/Synology-Proxy-WebSocket.png)

- ## **STEP 8**

Go to **Control Panel** / **Network** / **Connectivity** tab/ Check **Enable HTTP/2** then click **Apply**. Follow the instructions in the image below.

![ArchiveBox Synology NAS Set up 4](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-4.png)

- ## **STEP 9**

Go to **Control Panel** / **Security** / **Advanced** tab/ Check **Enable HTTP Compression** then click **Apply**. Follow the instructions in the image below.

![ArchiveBox Synology NAS Set up 5](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-5.png)

- ## **STEP 10**

Go to **File Station** and open the docker folder. Inside the docker folder, create one new folder and name it **archivebox**. Follow the instructions in the image below.  
**Note**: Be careful to enter only lowercase, not uppercase letters.

![ArchiveBox Synology NAS Set up 6](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-6.png)

- ## **STEP 11**

Log into Portainer using your username and password. On the left sidebar in Portainer, click on **Stacks** then **\+ Add stack**. Follow the instructions in the image below.

![1 Synology Portainer Add Stack](https://mariushosting.com/wp-content/uploads/2022/08/1-Synology-Portainer-Add-Stack.png)

- ## **STEP 12**

In the Name field type in **archivebox**. Follow the instructions in the image below.

**Note:** Copy Paste the code below in the Portainer Stacks **Web editor**.

```
version: '3.9'
services:
    archivebox:
        image: archivebox/archivebox:stable
        container_name: ArchiveBox
        hostname: archivebox
        healthcheck:
         test: curl -f http://localhost:8000/ || exit 1
        command: server --quick-init 0.0.0.0:8000
        ports:
           - 8460:8000
        environment:
           - ALLOWED_HOSTS=*
           - CSRF_TRUSTED_ORIGINS=https//archivebox.yourname.synology.me
           - MEDIA_MAX_SIZE=2000m
           - PUID=1026
           - PGID=100
           - PUBLIC_INDEX=False             # set to False to prevent anonymous users from viewing snapshot list. Or set to True.
           - PUBLIC_SNAPSHOTS=False         # set to False to prevent anonymous users from viewing snapshot content. Or set to True.
           - PUBLIC_ADD_VIEW=False           # set to True to allow anonymous users to submit new URLs to archive.
          # - CHECK_SSL_VALIDITY=True         # set to False to disable strict SSL checking (allows saving URLs w/ broken certs)
          # - SAVE_ARCHIVE_DOT_ORG=True       # set to False to disable submitting all URLs to Archive.org when archiving
        volumes:
            - /volume1/docker/archivebox:/data:rw
        restart: on-failure:5
```

**Note**: Before you paste the code above in the Web editor area below, change the value for **CSRF\_TRUSTED\_ORIGINS** and type in your own synology.me DDNS **with** https:// at the beginning that you have previously created at **STEP 6**.  
**Note**: Before you paste the code above in the Web editor area below, change the value numbers for **PUID** and **PGID** with your own PUID and PGID values. ([**Follow my step by step guide on how to do this.**](https://mariushosting.com/synology-find-uid-userid-and-gid-groupid-in-5-seconds/)) **1026** is my personal PUID value and **100** is my personal PGID value. You have to type in your own values.

![ArchiveBox Synology NAS Set up 7 new 2025](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-7-new-2025.png)

- ## **STEP 13**

Scroll down on the page until you see a button named **Deploy the stack**. Click on it. Follow the instructions in the image below. The installation process can take up to a few minutes. It will depend on your Internet speed connection.

![ArchiveBox Synology NAS Set up 8 new 2025](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-8-new-2025.png)

- ## **STEP 14**

If everything goes right, you will see the following message at the top right of your screen: “**Success Stack successfully deployed**“.

![ArchiveBox Synology NAS Set up 9](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-9.png)

- ## **STEP 15**

On the left sidebar in Portainer, click **Containers**. Identify your **ArchiveBox** instance, then click on the little **terminal icon**. Follow the instructions in the image below.

![ArchiveBox Synology NAS Set up 10](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-10.png)

- ## **STEP 16**

After you click on the little terminal icon at **STEP 15**, a new page will open. Click **Connect**. Follow the instructions in the image below.

![ArchiveBox Synology NAS Set up 11](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-11.png)

- ## **STEP 17**

After you click Connect at **STEP 16**, a Console will open. Copy paste the code below and confirm by pressing Enter on your keyboard. Follow the instructions in the image below.

```
su archivebox
```

![ArchiveBox Synology NAS Set up 12](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-12.png)

- ## **STEP 18**

After you press Enter on your Keyboard at **STEP 17**, copy paste the code below and confirm by pressing Enter on your keyboard. Follow the instructions in the image below.

```
archivebox manage createsuperuser
```

![ArchiveBox Synology NAS Set up 13](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-13.png)

- ## **STEP 19**

After you press Enter on your Keyboard at **STEP 18**, you will be asked to type in your own **Username**. Type in your own username and confirm by pressing Enter on your keyboard. Follow the instructions in the image below.

![ArchiveBox Synology NAS Set up 14](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-14.png)

- ## **STEP 20**

After you press Enter on your Keyboard at **STEP 19**, you will be asked to type in your own **Email Address**. Type in your own Email Address and confirm by pressing Enter on your keyboard. Follow the instructions in the image below.

![ArchiveBox Synology NAS Set up 15](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-15.png)

- ## **STEP 21**

After you press Enter on your Keyboard at **STEP 20**, you will be asked to type in your own **Password**. Type in your own Password and confirm by pressing Enter on your keyboard. Follow the instructions in the image below.

![ArchiveBox Synology NAS Set up 16](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-16.png)

- ## **STEP 22**

After you press Enter on your Keyboard at **STEP 21**, you will be asked to type in your **Password** again. Type in your Password again and confirm by pressing Enter on your keyboard. Follow the instructions in the image below.

![ArchiveBox Synology NAS Set up 17](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-17.png)

- ## **STEP 23**

After a few seconds you will get a message in the terminal that says: “**Superuser created successfully.**“.

![ArchiveBox Synology NAS Set up 18](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-18.png)

- ## **STEP 24**

Go back to **STEP 1** or [**you will deal with karma**](https://mariushosting.com/synology-common-docker-issues-and-fixes/) 🙂.

- ## **STEP 25**

Now open your browser and type in your HTTPS/SSL certificate like this **https://archivebox.yourname.synology.me** that you have previously created at **STEP 6**. In my case it’s **https://archivebox.mariushosting.synology.me** If everything goes right, you will see the ArchiveBox Login page. Type in your own **Username** and **Password** that you have previously created at **STEP 19** and **STEP 21**, respectively. Click **Log in**. Follow the instructions in the image below.

![ArchiveBox Synology NAS Set up 19](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-19.png)

- ## **STEP 26**

Click **ADD+** to add your first website. Follow the instructions in the image below.

![ArchiveBox Synology NAS Set up 20](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-20.png)

- ## **STEP 27**

Add **new URLs** to your archive. Follow the instructions in the image below.

![ArchiveBox Synology NAS Set up 21](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-21.png)

- ## **STEP 28**

Scroll down the page then click **Add URLs and archive +**. Follow the instructions in the image below.

![ArchiveBox Synology NAS Set up 22](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-22.png)

- ## **STEP 29**

Wait a few minutes.

![ArchiveBox Synology NAS Set up 23](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-23.png)

- ## **STEP 30**

Your ArchiveBox at a glance!

![ArchiveBox Synology NAS Set up 24](https://mariushosting.com/wp-content/uploads/2023/06/ArchiveBox-Synology-NAS-Set-up-24.png)

Enjoy ArchiveBox!

## **

🆘TROUBLESHOOTING

**

If you encounter issues by using this container, make sure to check out the [**Common Docker issues**](https://mariushosting.com/synology-common-docker-issues-and-fixes/) article.

**Note**: Can I run Docker on my Synology NAS? [**See the supported models**](https://mariushosting.com/can-i-run-docker-on-my-synology-nas/).  
**Note**: Find out [**how to update the ArchiveBox container**](https://mariushosting.com/synology-how-to-update-docker-image/) with the latest image.  
**Note**: [**How to Back Up Docker Containers on your Synology NAS**](https://mariushosting.com/synology-how-to-back-up-docker-containers/).  
**Note**: [**How to Free Disk Space on Your NAS if You Run Docker**](https://mariushosting.com/synology-how-to-free-disk-space-on-your-nas-if-you-run-docker/).  
**Note**: [**How to Schedule Start & Stop For Docker Containers**](https://mariushosting.com/synology-schedule-start-stop-for-docker-containers/).  
**Note**: **[How to Activate Email Notifications](https://mariushosting.com/synology-how-to-activate-email-notifications/)**.  
**Note**: [**How to Add Access Control Profile on Your NAS**](https://mariushosting.com/synology-how-to-add-access-control-profile-on-your-nas/).  
**Note**: [**How to Change Docker Containers Restart Policy**](https://mariushosting.com/synology-how-to-change-docker-containers-restart-policy/).  
**Note**: [**How to Use Docker Containers With VPN**](https://mariushosting.com/synology-how-to-use-docker-containers-with-vpn/).  
**Note**: [**Convert Docker Run Into Docker Compose**](https://mariushosting.com/synology-convert-docker-run-into-docker-compose/).  
**Note**: **[How to Clean Docker](https://mariushosting.com/synology-how-to-clean-docker/)**.  
**Note**: **[How to Clean Docker Automatically](https://mariushosting.com/synology-how-to-clean-docker-automatically/)**.  
**Note**: [**Best Practices When Using Docker and DDNS**](https://mariushosting.com/synology-best-practices-when-using-docker-and-ddns/).  
**Note**: [**Some Docker Containers Need WebSocket**](https://mariushosting.com/synology-some-docker-containers-need-websocket/).  
**Note**: [**Find out the Best NAS Models For Docker**](https://mariushosting.com/synology-best-nas-for-docker/).  
**Note**: [**Activate Gmail SMTP For Docker Containers**](https://mariushosting.com/synology-activate-gmail-smtp-for-docker-containers/).

This post was updated on Wednesday / August 28th, 2024 at 3:25 AM

## My Notes