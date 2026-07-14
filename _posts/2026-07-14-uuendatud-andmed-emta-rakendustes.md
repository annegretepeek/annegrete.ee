---
layout: post
title: "Uuendatud andmed EMTA rakendustes"
date: 2026-07-14
categories:
  - "eesti-keeles"
tags:
  - "eesti"
  - "emta"
  - "ettevotlus"
  - "r"
  - "rakendus"
  - "shiny"
image: "/assets/blog/uuendatud-andmed-emta-rakendustes/rakenduste-naide.png"
---
<p class="image-caption">Näide rakenduste kasutamisest. Leian  MISA rakendusest sarnased ja uurin nende ettevõtete aegridu ajaloo võrdlemise rakenduses.</p>

## EMTA rakendused

Aastaid tagasi tegin kolm rakendust, mis kasutavad EMTA (Eesti Maksu- ja Tolliameti) avaandmeid.

Esimene neist võimaldas kõrvutada kuni kolme ettevõtte viimase kvartali näitajaid. Ettevõtted sai valida lihtsast menüüst ning tulemused kuvati tabelina. Rakenduse tutvustus on [siin](https://annegrete.ee/blog/2017/10/ettevotete-vordlus/).

Teiseks valmis *Ettevõtete ajaloo võrdlus*, kus saab võrrelda mitme ettevõtte erinevate näitajate aegridu, sealhulgas ka viimase kvartali andmeid. Rakendust tutvustav postitus on [siin](https://annegrete.ee/blog/2018/01/mida-tegi-sinu-ettevote-2017-aastal/) ning rakenduse leiab [siit](https://annegretemolloka.shinyapps.io/EMTA_compare/). 

Kolmas rakendus on *Mina vs sarnased* (MISA). Seal saab valida ühe ettevõtte ning leida talle sarnased ettevõtted. Sarnaste ettevõtete kohta kuvatakse valitud näitajate keskmised. Kui eesmärk on vaadata iga ettevõtte individuaalset aegrida, tuleb kasutada eelmist rakendust. Sarnasust saab määrata tegevusvaldkonna, käibe, töötajate arvu ja maakonna järgi. Lisaks tuleb valida aasta, mille põhjal sarnaseid ettevõtteid otsitakse. Andmeid kuvatakse alates valitud võrdlusaastast. Rakenduse tutvustus on [siin](https://annegrete.ee/blog/2021/01/rakendus-mina-vs-sarnased-ettevotted/) ning rakendus ise on [siin](https://annegretemolloka.shinyapps.io/MISA/).

Kuna *Ettevõtete ajaloo võrdlus* sisaldab kogu esimese rakenduse funktsionaalsust, siis rakenduste ümberkolimisel (oma serverist ShinyApps.io-sse) ma esimest rakendust enam üle ei toonud.

Kõik rakendused on koondatud aadressile [https://annegrete.ee/rakendused/](https://annegrete.ee/rakendused/).

## Andmete uuendamine

Ma polnud neid andmeid väga ammu uuendanud. Vahepeal oli EMTA muutnud nii andmete asukohta ([link](https://www.emta.ee/eraklient/amet-uudised-ja-kontakt/uudised-pressiinfo-statistika/statistika-ja-avaandmed#tasutud-maksud)) kui ka formaati. 

Varem oli iga kvartali kohta eraldi fail. Nüüd on 2022–2024. aasta andmed failis *tasutud_maksud_varasemad_aastad.csv* ning 2025–2026. aasta andmed failis *tasutud_maksud_kaesolev_aasta.csv*. Muutunud on ka failide ülesehitus: kui varem vastas üks rida ühe ettevõtte ühele kvartalile, siis nüüd sisaldab üks rida ühe ettevõtte kõiki nelja kvartalit. Lisaks ei ole enam võimalik EMTA lehelt alla laadida 2022. aastast vanemaid andmeid. Õnneks olin varasemad failid juba aastaid tagasi salvestanud ning seetõttu ulatuvad minu aegread tagasi 2017. aasta algusesse.

Nüüd on mul olemas skirpt, mida saab käivitada iga kord, kui EMTA avaldab uued andmed. Nii pikeneb aegrida automaatselt ühe kvartali võrra, eeldusel et EMTA ei muuda failide asukohta ega formaati.

Automaatseks uuendamiseks seadistasin GitHub Actioni, mis laadib iga aasta *11. jaanuaril, aprillil, juulil ja oktoobril* EMTA lehelt uued andmed, töötleb need ning salvestab rakenduste jaoks sobivasse formaati. Lisaks on mõlema alles jäänud rakenduse repos eraldi GitHub Action, mis saadab uuendatud andmed ShinyApps.io-sse ja taaskäivitab rakenduse.

Juuli oli esimene kord, kui kogu see protsess ajastatult käivitus. Nagu esimesel korral ikka, ei läinud kõik päris plaanipäraselt – puudu oli ühe R-paketi sõltuvus ning vahepeal olin muutnud oma ShinyApps.io kasutajakontot. Loodetavasti kulgeb järgmine uuendus juba täiesti automaatselt.

Nüüdseks on rakendused jälle ajakohased ning loodetavasti jäävadki seda olema. Pöidlad pihku!

### Tehnilised märkused

Rakendused põhinevad [EMTA avaandmel](https://www.emta.ee/eraklient/amet-uudised-ja-kontakt/uudised-pressiinfo-statistika/statistika-ja-avaandmed#tasutud-maksud). Kuvatakse ainult äriühinguid.

Oluline on teada, et EMTA kvartalid ei lange kokku kalendrikvartalitega:

* I kvartal (Q1): detsember–veebruar
* II kvartal (Q2): märts–mai
* III kvartal (Q3): juuni–august
* IV kvartal (Q4): september–november

Kui soovid võrrelda konkreetsete ettevõtete aegridu, soovitan kasutada [Ettevõtete ajaloo võrdluse rakendust](https://annegretemolloka.shinyapps.io/EMTA_compare/).

Kui soovid leida oma ettevõttele sarnaseid ettevõtteid, tasub proovida [MISA rakendust](https://annegretemolloka.shinyapps.io/MISA/).

GitHubi lähtekood:

* Esimene rakendus (enam kasutusel ei ole): [https://github.com/annegretepeek/company_compare_EMTA](https://github.com/annegretepeek/company_compare_EMTA
* *Ettevõtete ajaloo võrdlus*: [https://github.com/annegretepeek/benchmarking_EMTA](https://github.com/annegretepeek/benchmarking_EMTA)
* *MISA*: [https://github.com/annegretepeek/MISA](https://github.com/annegretepeek/MISA)

