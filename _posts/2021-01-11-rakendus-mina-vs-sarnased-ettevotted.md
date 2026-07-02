---
layout: post
title: "Rakendus: mina vs sarnased ettevõtted"
date: 2021-01-11
categories:
  - "eesti-keeles"
tags:
  - "eesti"
  - "emta"
  - "ettevotlus"
  - "r"
  - "rakendus"
  - "shiny"
image: "/assets/blog/rakendus-mina-vs-sarnased-ettevotted/MISA.png"
---

Üle pika aja on jälle millestki kirjutada. Tegin EMTA avaandmetest veel ühe rakenduse.

Rakenduses saab valida ettevõtte, otsida talle sarnaseid ettevõtteid ja võrrelda nende tulemusi. Rakendus asub [siin](https://annegretepeek.shinyapps.io/MISA/).

 

## Näide kasutamisest

Toon ühe näite võimalikust kasutamisviisist. Näites kasutatud ettevõte on valitud juhuslikult.

Ütleme, et ma töötan Hiiumaa majutusettevõttes nimega Padu Hotell OÜ. Mind huvitab, kas teistele sama suurtele Hiiumaa ja Saaremaa majutusasutustele oli koroona aasta raskem kui minu ettevõttele?

Seega sarnased ettevõtted on ettevõtted, mis töötavad samas EMTAK2 valdkonnas, asuvad Hiiu või Saare maakonnas ja 2019. aasta käive oli enam-vähem sama suur kui Padu Hotellil.

![]({{ '/assets/blog/rakendus-mina-vs-sarnased-ettevotted/valikud.png' | relative_url }})

Rakendus leiab, et nendele kriteeriumitele vastab 9 ettevõtet.

![]({{ '/assets/blog/rakendus-mina-vs-sarnased-ettevotted/sarnased.png' | relative_url }})

Nüüd saan võrrelda, kas nende ettevõtete keskmine käive on 2020. aastal liikunud minu käibe sarnaselt.

![]({{ '/assets/blog/rakendus-mina-vs-sarnased-ettevotted/Kaive.png' | relative_url }})

Nagu näha, siis kõik ettevõtted on sessoonsed, suvel on palju rohkem käivet kui teistel aastaaegadel. Kõigil oli 2020. aasta kevad eelmistest aastatest raskem. Viimasel aastal on ettevõtete suvekäive sarnane; teiste ettevõtete käive on langenud, Padu Hotelli käive on jäänud eelmiste suvede sarnaseks. Seega võib arvata, et koroona mõjutas Padu Hotelli suve vähem kui sarnastel ettevõtetel.

Lisaks käibele saab võrrelda ka muutusi maksudes, töötajate arvus ja makse/käibeid töötaja kohta. Näiteks Padu Hotelli käive töötaja kohta on veidi langenud viimasel suvel, aga sarnastel ettevõtetel on see veidi kasvanud, sest neil oli vähem töölisi palgal.

 

## Tehnilised andmed

Selles rakenduses saab valida äriühingutest ettevõtte, mis deklareeris käivet/töötajaid detsember 2019 - november 2020 (2020 I - IV kvartal [EMTA andmetes](https://www.emta.ee/eraklient/amet-uudised-ja-kontakt/uudised-pressiinfo-statistika/statistika-ja-avaandmed#tasutud-maksud)). EMTA andmetele on lisatud [Statistikaametist](https://www.stat.ee/et/esita-andmeid/andmete-esitamisest/ettevotete-uuringud/majandusuksuste-klassifitseerimise-abiinfo) (01.12.2020 seis*) ettevõtete sektor ja EMTAK2 tase. Kui Statistikameti andmetes ei ole seda ettevõtet, siis EMTAK2 on puudu ja sektor on võetud EMTA andmetest. Valitud ettevõttele saab otsida sarnaseid ettevõtteid. Sarnasust saab defineerida sektori, EMTAK2 taseme, maakonna, aastase käibe ja/või aasta keskmise töötajate arvu järgi. Käibe ja töötajate arvu korral saab valida ka võrreldava aasta. Rakendus annab sarnaste ettevõtete nimed ning joonistab graafikud valitud ettevõtte ja sarnaste ettevõtete keskmistest näitajatest.

Kui soovitakse võrrelda üksikettevõtteid (ehk igal ettevõttel on oma joon), siis soovitan nende ettevõtte nimed lüüa [ajaloo võrdluse rakendusse](https://annegretepeek.shinyapps.io/EMTA_compare/).

Rakenduse link: [https://annegretepeek.shinyapps.io/MISA/](https://annegretepeek.shinyapps.io/MISA/)

Rakenduse koodi Github link: [https://github.com/annegretepeek/MISA](https://github.com/annegretepeek/MISA)

Kui keegi tahab selle rakenduse lokaalselt käima panna, siis ma võin jagada ka andmeid.

**Andmeid on uuendatud 01.12.2025 seisuga.*