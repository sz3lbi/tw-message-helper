# Tribal Wars Message Helper

Narzędzie pomocnicze dla wiadomości w grze Plemiona, które odczytuje je z formatu JSON, automatycznie wypełnia formularz i wysyła go.  
Wartości w polach formularza skryptu są automatycznie aktualizowane, w zależności od informacji zapisanych w Local Storage przeglądarki.

Skrypt został napisany w języku TypeScript i jest kompilowany do języka JavaScript (ES6) z odpowiednimi nagłówkami UserScript przy użyciu webpacka.

*Read this in other languages: [English](README.md), [Polski](README.pl.md).*

## Table of Contents

- [Installation](#installation)
  - [Violentmonkey (recommended)](#violentmonkey-recommended)
  - [Greasemonkey (Firefox only)](#greasemonkey-firefox-only)
  - [Tampermonkey](#tampermonkey)
- [Translations](#translations)
- [Plans for the future](#plans-for-the-future)

## Installation

W zależności od używanej przeglądarki i wybranego rozszerzenia, instalacja może przebiegać w inny sposób.

### Violentmonkey (recommended)

Wejdź na stronę: [Get Violentmonkey](https://violentmonkey.github.io/get-it/). Tam wybierz używaną przez Ciebie przeglądarkę, a następnie, po przekierowaniu do sklepu z rozszerzeniami, zainstaluj Violentmonkey.  
Ze względu na otwarty kod źródłowy, dostępność dla wielu przeglądarek, a także domyślnie włączoną automatyczną aktualizację skryptów, jest to preferowana opcja instalacji.

Po zainstalowaniu rozszerzenia przejdź do pliku ze skryptem. Możesz go znaleźć tutaj: [tw-message-helper.user.js](https://raw.githubusercontent.com/sz3lbi/tw-message-helper/master/userscript/tw-message-helper.user.js)  
Violentmonkey automatycznie wykryje otwarcie pliku `.user.js` i w nowej karcie zaproponuje instalację skryptu. Po potwierdzeniu instalacji przyciskiem "**Potwierdź instalację**" należy zamknąć kartę znajdującym się obok przyciskiem "**Zamknij**".  
Istnieje możliwość, że rozszerzenie nie wykryje automatycznie otwarcia pliku ze skryptem użytkownika. W takim przypadku należy skopiować całą zawartość pliku, nacisnąć na ikonę Violentmonkey na pasku przeglądarki, a następnie symbol plusa w prawym górnym rogu menu. W nowo otwartej karcie podmień przykładowy kod na ten ze schowka i zapisz. Automatyczne aktualizacje są domyślnie włączone.

### Greasemonkey (Firefox only)

Przeglądarka Firefox oferuje rozszerzenie o nazwie Greasemonkey. Ze względu na jego otwarty kod źródłowy, jest to opcja preferowana ponad Tampermonkey.  
Rozszerzenie można znaleźć na stronie: [Greasemonkey - Firefox Addons](https://addons.mozilla.org/pl/firefox/addon/greasemonkey/)

Po zainstalowaniu rozszerzenia przejdź do pliku ze skryptem. Możesz go znaleźć tutaj: [tw-message-helper.user.js](https://raw.githubusercontent.com/sz3lbi/tw-message-helper/master/userscript/tw-message-helper.user.js)  
Greasemonkey powinno automatycznie wykryć otwarcie pliku ze skryptem użytkownika i otworzyć nowe okno, proponując instalację. W takim przypadku wystarczy nacisnąć zielony przycisk "**Install**".  
W przeciwnym wypadku, kiedy rozszerzenie nie proponuje instalacji, skopiuj całą zawartość otwartego pliku, następnie naciśnij ikonę Greasemonkey na pasku przeglądarki i wybierz "**New user script...**". W nowo otwartej karcie zastąp przykładowy kod skryptu zawartością schowka i zapisz skrypt (ikona dyskietki w lewym górnym rogu lub skrót klawiszowy CTRL+S). Wadą tej ścieżki jest brak automatycznych aktualizacji skryptu, a tym samym konieczność wykonywania ich samodzielnie (poprzez usunięcie i ponowną instalację skryptu).

### Tampermonkey

Jeśli korzystasz z innej przeglądarki lub z innych powodów nie chcesz korzystać z Violentmonkey i Grasemonkey, zainstaluj rozszerzenie Tampermonkey z linku: [Tampermonkey.net](https://www.tampermonkey.net/)  
Strona ta powinna automatycznie wykryć jakiej przeglądarki używasz i wyświetlić odpowiednią wersję rozszerzenia.

Po zainstalowaniu rozszerzenia przejdź do pliku ze skryptem. Możesz go znaleźć tutaj: [tw-message-helper.user.js](https://raw.githubusercontent.com/sz3lbi/tw-message-helper/master/userscript/tw-message-helper.user.js)  
Tampermonkey wykryje, że otworzyłeś plik `.user.js` i otworzy zakładkę, w której możesz zainstalować skrypt.  
Jeżeli nic się nie stanie, możesz kliknąć ikonę Tampermonkey na pasku przeglądarki, następnie "**Dodaj nowy skrypt**" i zastąpić całą zawartość nowo otwartego okna tą, którą skopiowałeś z pliku. Pamiętaj, aby zapisać skrypt. Następnie możesz zamknąć zakładkę.

W przypadku wykorzystanie drugiej ścieżki instalacji, po zainstalowaniu skryptu powinieneś kliknąć na ikonę Tampermonkey w pasku przeglądarki, następnie "**Panel sterowania**" i nazwę zainstalowanego skryptu, czyli `tw-message-helper`. Przejdź z zakładki "**Edytor**" do zakładki "**Ustawienia**" i upewnij się, że zaznaczyłeś pole wyboru "**Sprawdzaj dostępność aktualizacji**" w sekcji "**Aktualizacje**". Jeśli tego nie zrobisz, Twój skrypt nie będzie automatycznie aktualizowany do najnowszej wersji, gdy zostanie ona wydana. Pamiętaj, aby przed zamknięciem zakładki kliknąć przycisk "**Zapisz**" znajdujący się poniżej.

## Translations

Obecnie skrypt jest dostarczany tylko w angielskiej wersji językowej.

## Plans for the future

1. Dodanie wielu wersji językowych.

Masz pomysł na usprawnienie rozszerzenia? Podziel się swoją propozycją tutaj: [Issues](https://github.com/sz3lbi/tw-message-helper/issues)
