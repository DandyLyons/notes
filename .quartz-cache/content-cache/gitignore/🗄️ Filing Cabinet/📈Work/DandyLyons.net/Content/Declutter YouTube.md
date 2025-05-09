---
PublishDate:
title:
subjects:
url:
ContentStatus: "✍🏼 Writing"
slug:
post_num:
---
%% TEMPLATE: [Content Plan TEMPLATE](Content%20Plan%20TEMPLATE.md) %%
## Checklist
- [ ] Proofread
	- [ ] Check all code is working. 
	- [ ] Check all links are working. 
- [ ] Set `draft` frontmatter to `false`
- [ ] Deploy Push commit to `deploy-netlify` branch
	- [ ] Check that deploy was successful
	- [ ] Copy URL
- [ ] Write social media post
	- [ ] Generate social media image 
		- Try using ray.so in raycast
			- [Codeshot](Codeshot.md)  
	- [ ] Generate image alt text: [Free AI Alt Text Generator for Images](https://popupsmart.com/tools/ai-alt-text-generator) 
- [ ] Manually Publish the Netlify deploy at [Deploys \| dandylyons \| Netlify](https://app.netlify.com/sites/dandylyons/deploys)[^1]
- [ ] Validate social preview metadata
	- [ ] [Social Share Preview – Check social media link previews](https://socialsharepreview.com/) 
		- Generate social preview image using [placid](https://placid.app/tools/free-open-graph-image-generator) 
- [ ] Schedule social media post on Buffer (Mastodon, Bluesky, X)
- [ ] Schedule next content from [Content for DandyLyons.net](Content%20for%20DandyLyons.net) 

## Sources
- 

## The Content

### The Problem

#### So so many distractions

#### Can't live with YouTube, Can't Live Without it
### Tools
- [No Clutter Clean YouTube Viewer](https://jaruzel.com/apps/youtube/#)
- Arc Browser zaps
- [YouTube Transcript Generator \| Extract & Download Video Transcripts](https://www.youtube-transcript.io/)
- youtube-nocookie.com
	- change a `youtube.com` url to `yout-ube.com`
	- [YouTube - Create link for "no clutter" video - YouTube](https://www.youtube-nocookie.com/embed/P8VxEsDrLq4?playlist=P8VxEsDrLq4&autoplay=1&iv_load_policy=3&loop=1&start=) 

# Footnotes

[^1]: Currently I have Netlify set up so that my site will NOT auto-publish. This means if I push to `deploy-netlify` it will build, but it will not publish until I manually publish it. 