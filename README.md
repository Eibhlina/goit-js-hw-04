# Zadanie 1. Pakowanie towarów

Napisz funkcję isEnoughCapacity(products, containerSize), która oblicza, czy wszystkie towary zmieszczą się w kontenerze podczas pakowania.

Funkcja deklaruje dwa parametry:

* products — obiekt, w którym klucze zawierają nazwy towarów, a ich wartości — ilość tych towarów. Na przykład { apples: 2, grapes: 4 }.
* containerSize — liczba, maksymalna ilość jednostek towaru, którą może pomieścić kontener.

Funkcja powinna zwrócić wynik sprawdzenia, czy wszystkie towary zmieszczą się w kontenerze. Czyli policzyć łączną ilość towarów w obiekcie products i zwrócić true, jeśli jest ona mniejsza lub równa containerSize, i false, jeśli nie.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Zadanie 2. Obliczanie kalorii

Napisz funkcję calcAverageCalories(days), która zwraca średnią dzienną wartość liczby kalorii, które sportowiec spożywał w ciągu tygodnia. Funkcja oczekuje jednego parametru: 
* days — tablicy obiektów. Każdy obiekt opisuje dzień tygodnia oraz liczbę kalorii calories, spożytych przez sportowca tego dnia. 

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# Zadanie 3. Profil gracza

Obiekt profile opisuje profil użytkownika na platformie do gier. W jego właściwościach przechowywane są nazwa profilu username oraz liczba aktywnych godzin playTime, spędzonych w grze.

Uzupełnij obiekt profile metodami do pracy z jego właściwościami.

* Metoda changeUsername(newName) powinna przyjmować ciąg znaków (nową nazwę) w parametrze newName i zmieniać wartość właściwości username na nową. Niczego nie zwraca.
* Metoda updatePlayTime(hours) powinna przyjmować liczbę (ilość godzin) w parametrze hours i zwiększać o nią wartość właściwości playTime. Niczego nie zwraca.
* Metoda getInfo() powinna zwracać ciąg znaków w formacie <Username> ma <amount> aktywnych godzin!, gdzie <Username> to nazwa profilu, a <amount> to liczba godzin spędzonych w grze.
