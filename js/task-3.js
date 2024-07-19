// Obiekt profile opisuje profil użytkownika na platformie do gier. 
// W jego właściwościach przechowywane są nazwa profilu username oraz liczba aktywnych godzin playTime, spędzonych w grze.




const profile = {
    username: "Jacob",
    playTime: 300,
    changeUsername(newName) {
        this.username = newName;
    },
    updatePlayTime(hours) {
        this.playTime += hours;
    },
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`
    },
};



// Uzupełnij obiekt profile metodami do pracy z jego właściwościami.

// Metoda changeUsername(newName) powinna przyjmować ciąg znaków (nową nazwę) 
// w parametrze newName i zmieniać wartość właściwości username na nową. Niczego nie zwraca.
// Metoda updatePlayTime(hours) powinna przyjmować liczbę (ilość godzin) 
// w parametrze hours i zwiększać o nią wartość właściwości playTime. Niczego nie zwraca.
// Metoda getInfo() powinna zwracać ciąg znaków w formacie <Username> ma <amount> aktywnych godzin!, 
// gdzie <Username> to nazwa profilu, a <amount> to liczba godzin spędzonych w grze.



console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"