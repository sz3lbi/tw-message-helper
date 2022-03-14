# Tribal Wars Message Helper

Narzędzie pomocnicze dla wiadomości w grze Plemiona, które odczytuje je z formatu JSON, automatycznie wypełnia formularz i wysyła go.  
Wartości w polach formularza skryptu są automatycznie aktualizowane, w zależności od informacji zapisanych w Local Storage przeglądarki.

Skrypt został napisany w języku TypeScript i jest kompilowany do języka JavaScript (ES6) z odpowiednimi nagłówkami UserScript przy użyciu webpacka.

*Read this in other languages: [English](README.md), [Polski](README.pl.md).*

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Translations](#translations)
- [Plans for the future](#plans-for-the-future)

## Installation

Przewodnik: [Przewodnik instalacji skryptu użytkownika (UserScript)](https://github.com/sz3lbi/userscipt-installation-tutorial/blob/main/README.pl.md)

Plik skryptu można znaleźć tutaj: [tw-message-helper.user.js](https://raw.githubusercontent.com/sz3lbi/tw-message-helper/master/userscript/tw-message-helper.user.js)  

## Usage

Przykładowe dane wejściowe JSON:

```json
[
  { "recipient": "Bill", "content": "przykładowa wiadomość 001" },
  { "recipient": "John", "content": "przykładowa wiadomość 002" }
]
```

## Translations

Obecnie skrypt jest dostarczany tylko w angielskiej wersji językowej.

## Plans for the future

1. Dodanie wielu wersji językowych.

Masz pomysł na usprawnienie rozszerzenia? Podziel się swoją propozycją tutaj: [Issues](https://github.com/sz3lbi/tw-message-helper/issues)
