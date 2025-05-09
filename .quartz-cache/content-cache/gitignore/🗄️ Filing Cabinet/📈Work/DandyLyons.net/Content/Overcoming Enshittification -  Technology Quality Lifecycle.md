---
PublishDate:
title: "Overcoming Enshittification -  Technology Quality Lifecycle"
subjects:
url:
ContentStatus: "🔬 Researching"
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
- [ ] Manually Publish the Netlify deploy at [Deploys \| dandylyons \| Netlify](https://app.netlify.com/sites/dandylyons/deploys)[^1]
- [ ] Validate social preview metadata
	- [ ] [Social Share Preview – Check social media link previews](https://socialsharepreview.com/) 
		- Generate social preview image using [placid](https://placid.app/tools/free-open-graph-image-generator) 
- [ ] Write social media post
	- [ ] Generate social media image 
		- Try using ray.so in raycast
			- [Codeshot](Codeshot.md)  
	- [ ] Generate image alt text: [Free AI Alt Text Generator for Images](https://popupsmart.com/tools/ai-alt-text-generator) 
- [ ] Schedule social media post on Buffer (Mastodon, Bluesky, X)
- [ ] Schedule next content from [Content for DandyLyons.net](Content%20for%20DandyLyons.net) 

## Sources
- [[Cory Doctorow]]
	- [[Social Quitting]]
	- [Pluralistic: Tiktok’s enshittification (21 Jan 2023) – Pluralistic: Daily links from Cory Doctorow](https://pluralistic.net/2023/01/21/potemkin-ai/#hey-guys)
- [The Enshittification Lifecycle of Online Platforms](https://kottke.org/23/01/the-enshittification-lifecycle-of-online-platforms)

## The Content
- Key idea: get the free stuff while you still can. 
- True open-sourcing is resistant to [[enshittification]]. 
- Anything that can be proprietary can eventually be reverse engineered and open-sourced. 
- Beware of lock-in and walled gardens. 
	- Have an exit plan. 
# Footnotes

[^1]: Currently I have Netlify set up so that my site will NOT auto-publish. This means if I push to `deploy-netlify` it will build, but it will not publish until I manually publish it. 