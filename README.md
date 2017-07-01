# Show File in File Explorer Extension

This extension is used to open the current place of the opened file in the file explorer.

## Settings

    "showFileExtension.copyPathToClipBoard": false,
    "showFileExtension.copyWithoutFilename": false

###  CopyPathToClipBoard

If true no file explorer will be opened, but the path to the file will be copied to clipboard.

### CopyWithoutFilename

Only active if copyPathToClipBoard is true. If copyWithoutFilename is true the copied path will be without filename.

## Features

Opens the current file in the file explorer or copies the path to the file to clipboard.

With the extension the filepath will be displayed on the statusbar.

### Open Explorer

![alt text](https://github.com/xamm/ShowFileExtension/raw/master/Images/PathWithIcon.png "Displays current path of the opened file.")

When you click on this path the folder containing the displayed file will be opened.

![alt text](https://github.com/xamm/ShowFileExtension/raw/master/Images/OpenedFolder.png "The folder containing the file.")

### Copy to clipboard

If the setting showFileExtension.copyPathToClipBoard is true the explorer won't be opened but the path will be copied to the clipboard

## Requirements

Currently only works on Mac and Linux.