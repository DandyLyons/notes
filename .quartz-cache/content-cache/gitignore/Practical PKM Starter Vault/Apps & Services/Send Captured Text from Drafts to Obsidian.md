---
category: apps & services
tags:
  - ios
  - drafts
  - workflows
---
Obsidian is great for developing and connecting ideas. But it's not great for capturing them.

For that, I use [Drafts](https://getdrafts.com/).

Drafts is a great app for capturing plain text on the go. It even has a watch complication that I use to capture ideas I get while out for a run. Then when you're ready to move those ideas somewhere else (like Obsidian), it gives you export actions that allow you to do some pretty cool things with the text that you captured.

This tip is all about creating an action so you can easily share your captured text in Drafts to Obsidian. But to do that, you first need to create a _Bookmark_ in Drafts to get around some of the iOS sandboxing limitations.

To set up the bookmark:

1. Tap on the gear icon to go to the _Drafts_ settings
2. Go to the _Storage_ section and tap **Bookmarks**
3. Tap the plus icon to add a bookmark and give it a name
4. Select the folder you want to save text into (if you're using iCloud to sync, you'll want to use something inside _iCloud Drive → Obsidian)_

Once you have the bookmark set up, you can create the Drafts action. To set this up:

1. Tap the Drafts icon in the upper-right
2. Tap the plus button and select **New Action**
3. Name the action, then tap on **Steps**
4. Tap the plus button to add an step and select **File** under the _Services_ section
5. Make sure the name says `[[title]].md `and the _Template_ section includes `[[body]]`. This will put the first link of the Draft as the note title and rest of it as the content of the actual note
6. Under _Destination_, make sure to select the bookmark you created

To use the action, just enter text in Drafts and then use the action you created. The text will be formatted and placed in the correct location, allowing Obsidian to see and edit the file.

![[Drafts.gif]]

If you don't want to build this from scratch, I've shared my Drafts action publicly [here](https://directory.getdrafts.com/a/2BD).