/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her

/* Funksjonen tar imot et tall og deler det på 2. Deretter sammenligner den resultatet 
rundet ned med Math.floor(). Hvis veriene er like, returnerer funksjonen Partall. Hvis
verdiene er ulike, returnerer den Oddetall. */

function checkNumbers(number) {
  if (number / 2 === Math.floor(number / 2)) {
    return "Partall";
  } else {
    return "Oddetall";
  }
}

console.log(checkNumbers(10));
console.log(checkNumbers(13));

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her

// Funksjonen returnerer teksten med store bokstaver og med et utropstegn på slutten.
const catSaysHello = (text) => {
  return text.toUpperCase() + "!";
};

console.log(catSaysHello("Mjew hello world"));

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her

function hilsTid(navn, tid) {
  if (tid === undefined) {
    // Hvis ingen tid er oppgitt, returneres en feilmelding.
    return "Vennligst oppgi en tid";
  } else if (tid < 0 || tid > 23) {
    // Tiden er ugyldig hvis den er under 0 eller over 23.
    return "Ugyldig tid";
  } else if (tid >= 0 && tid <= 5) {
    // Sjekker om tid er større enn eller lik 0 og mindre enn eller lik 5.
    return `God natt ${navn}`;
  } else if (tid >= 6 && tid <= 11) {
    return `God morgen ${navn}`;
  } else if (tid >= 12 && tid <= 17) {
    return `God dag ${navn}`;
  } else if (tid >= 18 && tid <= 23) {
    return `God kveld ${navn}`;
  }
}

console.log(hilsTid("Eivind", 10)); // God morgen Eivind
console.log(hilsTid("Eivind", 24)); // Ugyldig tid
console.log(hilsTid("Eivind")); // Vennligst oppi tid

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her

/* const color = ["Rød", "Grønn", "Blå", "Gul"];
color.pop();
color.shift();
console.log(color); */

// Funksjon som skal ta bort det første og siste i en liste.
const removeFirstLast = (liste) => {
  liste.pop();
  liste.shift();
  return liste;
};

const color = ["Rød", "Grønn", "Blå", "Gul"];
console.log(removeFirstLast(color));

const tall = ["En", "To", "Tre", "Fire", "Fem", "Seks"];
console.log(removeFirstLast(tall));

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her

const eksempel1 = "  Javascript er vanskelig   "; // skal returnere "Javascript er gøy".
const eksempel2 = " Det er vanskelig å bruke metoder "; // skal returnere "Det er gøy å bruke metoder".
const eksempel3 = "   vanskelig        "; // skal returnere "gøy".

// Erstatter "vanskelig" med "gøy" og fjerner mellomrom i starten og slutten.
const endreTekst = (text) => {
  return text.replace("vanskelig", "gøy").trim();
};

console.log(eksempel1);
console.log(endreTekst(eksempel1));
console.log(endreTekst(eksempel2));
console.log(endreTekst(eksempel3));

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for oppgave 6 her

// Steg 1: f
items.shift();
console.log(items);
// Steg 2:
items.splice(2, 1, "Linjal");
console.log(items);
// Steg 3:
items.splice(0, 2, "Markeringspenn");
console.log(items);
// Steg 4:
console.log(items.join(" | "));

// Ekstra utfordring.
// Går igjennom landene og lager en array med de som inneholder liten bokstav av det som blir oppgitt.
const wordWithE = items.filter((item) => item.includes("e"));
const wordWithA = items.filter((item) => item.includes("a"));
console.log(wordWithE);
console.log(wordWithA);
/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her
const eksempelFarger = ["Rød", "Grønn"];
const eksempelTall = ["En", "To", "Tre"];

function oppdatertListe(liste, tekst) {
  // Finnes tekst fra før i listen, fjern teksten fra listen.
  if (liste.includes(tekst)) {
    // fjern teksten fra listen hvis den finnes
    const index = liste.indexOf(tekst);
    liste.splice(index, 1);
  } else {
    // legger til teksten i listen hvis den ikke finnes fra før
    liste.push(tekst);
  }
  return liste;
}

console.log(oppdatertListe(eksempelFarger, "Blå"));
console.log(oppdatertListe(eksempelFarger, "Grønn"));
console.log(oppdatertListe(eksempelTall, "Fire"));
console.log(oppdatertListe(eksempelTall, "To"));

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her

// har valgt å bruke typeof da den skal fortelle hvilke datatyper en verdi har.
// typeof 5 gir "number"
// typeof "5" gir "string"
// typeof true gir "boolean"

function sunnyTimes(verdi) {
  // hvis veriden er en string, returner verdien med 😎 foran og bak
  if (typeof verdi === "string") {
    return `😎${verdi}😎`;
  } // sjekker om verdien er et tall,
  else if (typeof verdi === "number") {
    const doble = verdi * 2;
    const tilTekst = doble.toString();
    return `😎${tilTekst}😎`;
  } else if (typeof verdi === "boolean") {
    if (verdi === true) {
      return `😎Ja😎`;
    } else {
      return `😎Slapp av😎`;
    }
  } else {
    return `😎Kun primitive verdier😎`;
  }
}

console.log(sunnyTimes("Hei"));
console.log(sunnyTimes(5));
console.log(sunnyTimes(true));
console.log(sunnyTimes(false));
console.log(sunnyTimes([]));
