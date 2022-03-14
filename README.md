# Tribal Wars Message Helper

A Tribal Wars game message helper tool that reads messages from JSON format, automatically fills in a form and sends it.  
The values in the script's form fields are automatically updated, depending on the information stored in the browser's Local Storage.

The script has been written in the TypeScript language and is compiled to the JavaScript (ES6) with suitable UserScript headers using webpack.

*Read this in other languages: [English](README.md), [Polski](README.pl.md).*

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Translations](#translations)
- [Plans for the future](#plans-for-the-future)

## Installation

Tutorial: [UserScipt Installation tutorial](https://github.com/sz3lbi/userscipt-installation-tutorial/blob/main/README.md)

You can find the script file here: [tw-message-helper.user.js](https://raw.githubusercontent.com/sz3lbi/tw-message-helper/master/userscript/tw-message-helper.user.js)  

## Usage

Example JSON input:

```json
[
  { "recipient": "Bill", "content": "example message 001" },
  { "recipient": "John", "content": "example message 002" }
]
```

## Translations

Currently, the script is provided only in the English language.

## Plans for the future

1. Add multiple language versions.

Do you have an idea for improving the extension? Share your suggestion here: [Issues](https://github.com/sz3lbi/tw-message-helper/issues)
