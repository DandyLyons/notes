---
publish: true
contentPublished: "2016-10-27"
subjects:
  - "[[Topics/Software Development/Web Development/Hosting/Netlify/index|Netlify]]"
Status: "INTERESTING"
---
In this tutorial, we will be reviewing how to set up your existing [[GitHub]] repo on [[Topics/Software Development/Web Development/Hosting/Netlify/index|Netlify]] for continuous deployment (that means all you have to do is push your code and Netlify will do the rest of your publishing tasks for you). If you haven’t quite discovered the amazing power of version control with GitHub you can always drag and drop your static files [here](https://app.netlify.com/) (just drop your zipped files in the dashed box).

## Getting started on Netlify

In this section, we will show you how easy it is to launch your site on Netlify. If you are not already a Netlify user, go ahead and sign up for free [here](https://app.netlify.com/signup) first.

### Step 1: Add Your New Site

![Screenshot of Netlify UI showing a user has clicked on the add new site button, which has opened a menu with three options and the import an existing project option is highlighted](https://cdn.sanity.io/images/o0o2tn5x/production/b07b1a247adac7572e4cff50666247b9798ebe41-3680x2382.png?w=700)

Creating a new site on Netlify is simple. Once you’ve logged in, you’ll be taken to [https://app.netlify.com](https://app.netlify.com/). If you’re just starting out, there’s only one option, Click the **Add new site** button shown above.

### Step 2: Link to Your GitHub (or supported version-control tool of choice)

Clicking “Import an existing project” brings you to this screen:

![Screenshot of Netlify UI asking the user to connect to Git provider. The options are GitHub, GitLab and Bitbucket](https://cdn.sanity.io/images/o0o2tn5x/production/9bc8d83a67040e796f2cf2d980be1b8b5fd08d4f-3680x2382.png?w=700)

Be sure to push your repo to GitHub, so that all we’ll need to do is link Netlify to GitHub. Click the **GitHub** button as illustrated in the screenshot above.

### Step 3: Authorize Netlify

![A screenshot of the Auth flow connecting GitHub to Netlify](https://cdn.sanity.io/images/o0o2tn5x/production/14a3480897901f967c139ecdab46249d5634a016-2356x2174.png?w=700)

It’s time to allow Netlify and GitHub to talk to each other. Clicking the **Authorize Netlify** button will do just that. Like it says in the image below, Netlify doesn’t store your GitHub access token on our servers. If you’d like to know more about the permissions Netlify requests and why we need them, you can visit our [documentation on Git provider permissions](https://docs.netlify.com/configure-builds/repo-permissions-linking/).

### Step 4: Select Your Repo

![Screenshot of Netlify UI showing that a user has searched for a repo on GitHub named my cool website, which is appearing in the list below](https://cdn.sanity.io/images/o0o2tn5x/production/c48aaea9e6c4cb3004bfe343a39d9420b657db2f-3680x2382.png?w=700)

Now that you’ve connected Netlify and GitHub, you can see a list of your Git repos. Select your static site or single-page app.

### Step 5: Configure Your Settings

![Screenshot of Netlify UI showing build settings including owner, branch to deploy, base directory, build command and publish directory](https://cdn.sanity.io/images/o0o2tn5x/production/421b77f4adb9bf3bc6643db8bd0e58d722ede1aa-3680x2382.png?w=700)

Here you can configure your options (if necessary). For example, if we were using the [Victor Hugo](https://github.com/netlify/victor-hugo) boilerplate when building our static site, we would need to set our build directory to `dist/` and our build command to `npm run build`. If your site is not using any preprocessors or compiling software then just set the directory to `/` and leave the build command blank.

When you’re satisfied with your configurations, click the **Deploy site** button to continue.

### Step 6: Build Your Site

![Screenshot showing the deploy log UI screen where the main message is that Netlify's robots are busy building and deploying your site to our CDN](https://cdn.sanity.io/images/o0o2tn5x/production/a0cd4cd245e42f54c84cf37934866f6d84002f11-3680x2382.png?w=700)

Now it’s time to sit back and relax. You did your part let Netlify take care of the rest — it’ll only take a minute.

### Step 7: All Done

![A screenshot of the production deploys screen, showing one deploy in the list](https://cdn.sanity.io/images/o0o2tn5x/production/d1f61d0cfea007144cb34f6762b7db21d6609162-3680x2382.png?w=700)

Netlify went ahead and gave your site a temporary name. Let’s quickly update that to make it look a little prettier:

![Screenshot of the site details area of the Netlify UI showing the site is being renamed in a popup modal to my-great-netlify-site](https://cdn.sanity.io/images/o0o2tn5x/production/b81f7d9824f0370d8c730f730929f8dedf76c06f-3680x2382.png?w=700)

BOOM! You now have your site hosted on Netlify with blazing fast speeds, powerful CDNs, simple management, and ironclad security. Wasn’t that easy? Take it a step further and setup your custom domain (Learn how to do that [here](https://docs.netlify.com/domains-https/custom-domains/)). Congratulations, and thanks for using Netlify!