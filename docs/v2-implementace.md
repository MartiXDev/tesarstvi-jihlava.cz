# V2 implementace - moderni web Tesarstvi Jihlava

## Ucel dokumentu

Tento dokument prevadi zadani z `docs\v2-moderni-web.md` do konkretniho implementacniho smeru pro prvni fazi noveho webu.

Prvni faze byla postavena na peti porovnatelnych, nakodovanych konceptech homepage. Rozhodovaci brana je nyni uzavrena a jako produkcni smer byl vybran koncept `04-material-a-reference`.

## Aktualni stav repozitare

- `src\` aktualne neobsahuje hotovy web, pouze favicon a SVG assety Tesarstvi Jihlava
- `archive\v1-2026-01\Default.htm` obsahuje puvodni jednoduchou jednopage verzi s kontakty a firemnimi udaji
- v repozitari neni build system ani frontend framework
- zadani je tedy vhodne resit jako static-first prototypovani bez zbytecneho toolingu

## Zvoleny technicky baseline

Pro prvni fazi se pouzije:

- ciste staticke `HTML`, `CSS` a pripadne lehke `JavaScript` interakce
- bez Astro, Reactu nebo Tailwindu v teto fazi
- samostatne koncepty ve slozce `src\koncepty\`
- rozcestnik konceptu v `src\index.html`

Tento pristup je zvolen proto, ze:

- umozni rychle porovnat pet ruznych vizualnich smeru
- drzi technickou slozitost nizko
- nenuti finalni reseni do stacku, ktery zatim nemusi byt potreba
- usnadnuje pozdejsi prepis vitezneho konceptu do produkcni struktury

Pokud se po vyberu konceptu ukaze potreba vice stranek, slozitejsi animace nebo modularni spravy obsahu, lze nasledne rozhodnout o zavedeni Astro nebo podobneho stacku.

## Rozhodovaci brana - uzavreno

Po porovnani vsech peti konceptu je jako produkcni zaklad potvrzen koncept `04-material-a-reference`.

Hlavni duvody:

- nejsilnejsi brand fit pro Tesarstvi Jihlava a nejprirozenejsi prace s motivem materialu,
- velmi dobra citelnost, prehledne CTA a nizke mobilni riziko,
- nizsi implementacni a udrzbova slozitost nez u dramatickych nebo motion-heavy variant,
- dobry prostor pro dalsi rozsirovani obsahu o reference, sluzby a navazujici podstranky.

## Sdilena obsahova osnova

Vsechny koncepty budou pracovat nad stejnou osnovou, aby srovnani bylo ferove:

1. Hero sekce s hlavni hodnotou a CTA
2. Prehled sluzeb
3. Duvody, proc zvolit Tesarstvi Jihlava
4. Popis pristupu ke spolupraci nebo typu realizaci
5. Kontaktni a firemni blok
6. Zapati s kreditem MartiX

## Sdileny obsahovy zaklad

Obsah vychazi z puvodniho webu a bude dale rozvinut v cestine. Jako potvrzene zakladni udaje se pouzivaji:

- Nazev prezentace: `Tesarstvi Jihlava`
- Vlastnik: `Stepan Kvasnicka`
- Pravni forma: `Fyzicka osoba`
- ICO: `01992201`
- DIC: `CZ9408064710`
- Adresa: `Telecska 2746/96, 586 01 Jihlava`
- E-mail: `info@tesarstvi-jihlava.cz`
- Telefon: `+420 603 176 612`
- Overovaci odkaz: `https://ares.gov.cz/ekonomicke-subjekty?ico=01992201`

## Jazyk a tonalita

- veskery obsah webu bude pouze v cestine
- veskera dokumentace v repozitari bude pouze v cestine
- anglicke inspiracni dokumenty slouzi pouze jako smerovy podklad
- tonalita ma pusobit profesionalne, sebejiste, remeslne a duveryhodne

## Brand a assety

- primarni identita je Tesarstvi Jihlava
- pouzit se musi SVG assety ze `src\img\svg\`
- barevny zaklad se odvodi z loga, zejmena z tonu `#a25b00` a `#563409`
- pro footer kazdeho konceptu se pouzije i logo MartiX z `src\koncepty\shared\img\`

## Pravidlo pro zapati

Kazdy koncept musi obsahovat zapati, ktere:

- jasne uzavira web Tesarstvi Jihlava
- obsahuje firemni kontaktni a identifikacni informace
- obsahuje sekundarni kredit MartiX s logem a odkazem na `https://martix.dev`
- pouzije svetlou nebo tmavou variantu MartiX loga podle vizualniho rezimu konkretniho konceptu

MartiX je v zapati uveden jako sekundarni kredit nebo partner attribution. Nesmí prebit hlavni znacku Tesarstvi Jihlava.

## Minimalni kvalitativni standard

Kazdy koncept musi splnit:

- responzivni chovani pro mobil, tablet i desktop
- citelnou hierarchii nadpisu a textu
- semanticke sekce a pristupne odkazy
- vizualne presvedcivy hero blok
- funkcni CTA na telefon a e-mail
- odkaz na ARES
- korektni zobrazeni log Tesarstvi Jihlava a MartiX

## Faze po dokonceni konceptu

Po vytvoreni peti konceptu nasledovalo:

1. porovnani konceptu - dokonceno
2. vyber finalniho smeru - dokonceno, vybran koncept `04-material-a-reference`
3. dopracovani vitezne varianty do produkcni podoby - dalsi krok
4. finalni QA a publikace - navazujici krok po produkcnim dopracovani

## Aktualni vystupy v repozitari

Aktualne jsou v repozitari pripraveny tyto vystupy prvni faze a navazujiciho foto konceptu:

- `src\index.html` - finalni homepage podle vybraneho smeru `04-material-a-reference`
- `src\styles.css` - stylova vrstva finalni homepage
- `src\koncepty\index.html` - samostatne publikovatelny hub vsech sesti konceptu
- `src\koncepty\01-remeslna-editorial-premium\` - tmavy editorial koncept
- `src\koncepty\02-architektonicka-svetla-presnost\` - svetly, mrizkovy koncept
- `src\koncepty\03-tmava-kinematicka-atmosfera\` - tmavy atmosfericky koncept
- `src\koncepty\04-material-a-reference\` - teply materialovy koncept
- `src\koncepty\05-motion-first-showcase\` - nejdynamictejsi koncept s lehkou JS vrstvou
- `src\koncepty\06-chata-vetrny-jenikov\` - foto-orientovana reference s realnymi snimky projektu
- `src\koncepty\shared\img\` - lokalni kopie MartiX log pro footer kredity
- `src\koncepty\shared\gallery\` - publikovatelna vrstva pro projektove galerie a foto koncepty

Kazdy koncept obsahuje vlastni HTML a CSS, pouziva firemni udaje Tesarstvi Jihlava, odkaz na ARES a footer s MartiX kreditem.

Rozhodovaci brana je timto uzavrena a dalsi implementace v `src\` ma vychazet z konceptu `04-material-a-reference`.

## Galerie realizaci a 6. koncept - staticky zaklad

Novy foto koncept vznikl jako samostatna slozka `src\koncepty\06-*`, ale projektove fotografie nejsou ulozene primo uvnitr konkretniho konceptu. Proto je zavedena sdilena publikovatelna vrstva `src\koncepty\shared\gallery\`, kterou je mozne pouzit jak pro 6. koncept, tak pozdeji i pro seznam realizaci nebo detail projektu bez duplikovani assetu.

### Rozdeleni odpovednosti

- `src\gallery\rok\slug\` - zdrojove a plnorozlisene fotografie v repozitari
- `src\koncepty\shared\gallery\projekty\rok\slug\` - webove optimalizovane assety a metadata, ktere uz patri do publikovatelneho baliku `src\koncepty`
- `src\koncepty\06-*` - samotna foto stranka nebo koncept, ktery na assety odkazuje jen pres `..\shared\gallery\`

### Minimalni struktura jednoho projektu

- `projekt.json` - ceska metadata projektu, poradi obrazku a textove podklady
- `uvod\` - siroke exporty pro uvod a klicove rezime projektu
- `nahledy\` - cover a mensi obrazky pro grid nebo vyber projektu
- `galerie\` - detailni obrazky pro projektovou stranku nebo lightbox

### Pravidla pro dalsi realizaci

- zadny odkaz v HTML, CSS ani JS z `src\koncepty\` nesmi smerovat do `..\gallery\`
- z `src\gallery\` se do `src\koncepty\shared\gallery\` kopiruji jen kuratorsky vybrane a webove optimalizovane exporty
- slugy a nazvy souboru drzet bez diakritiky a stabilni v case
- alt texty, nazvy projektu a kratke popisy zustavaji v cestine v `projekt.json`
- budoucni seznam realizaci muze stavet nad `src\koncepty\shared\gallery\projekty.json` bez nutnosti kroku sestaveni

### Prvni pripraveny projekt

Pro `src\gallery\2024\chata-vetrny-jenikov\` je zalozena publikovatelna kostra v `src\koncepty\shared\gallery\projekty\2024\chata-vetrny-jenikov\`. Vyber fotografii, webove exporty i novy koncept `src\koncepty\06-chata-vetrny-jenikov\` jsou jiz pripravene jako prvni realny zaklad budouci galerie realizaci.
