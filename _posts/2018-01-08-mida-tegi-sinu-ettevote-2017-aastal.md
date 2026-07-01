---
layout: post
title: "Mida tegi sinu ettevõte 2017.aastal?"
date: 2018-01-08
categories:
  - "eesti-keeles"
tags:
  - "eesti"
  - "emta"
  - "ettevotlus"
  - "r"
  - "rakendus"
  - "shiny"
image: "/assets/blog/mida-tegi-sinu-ettevote-2017-aastal/benchmarking_EMTA.png"
---

Aasta algus on suurepärane aeg võtta kokku eelmine aasta. Kas sinu 2017. aasta oli suurepärane? Aga kuidas oli aasta sinu ja/või konkurendi ettevõtte jaoks?

Siin artiklis keskendun sellele teisele küsimusele, sest ma saan sind aidata selle vastuse leidmisel. Samas ma loodan, et vastus esimesele küsimusele on JAH!

Ma olen varem ka maininud, et Maksu- ja Tolliamet (EMTA)  avaldab kord kvartalis Eesti ettevõtete majandusnäitajaid oma [kodulehel](https://www.emta.ee/eraklient/amet-uudised-ja-kontakt/uudised-pressiinfo-statistika/statistika-ja-avaandmed#tasutud-maksud).  Nüüd avaldati need neljandat korda ehk aasta jagu andmed on olemas (detsember 2016 - november 2017).

## Ettevõtete viimase kvartali võrdlemine

Uued andmed tähendavad, et on aeg oma ettevõtete võrdluse rakendust uuendada. Nüüd näed seal septembri, oktoobri ja  novembri näitajaid.

Meil on nelja kvartali andmed (alustavatel ja lõpetavatel ettevõtetel vähem). Mis oleks kui paneks need punktid ka joonisele?

Seda ma tegingi.

## Ettevõtete ajaloo võrdlemine

Tutvustan uut rakendust [Eesti ettevõtete ajaloo võrdlus](https://annegretepeek.shinyapps.io/EMTA_compare/).

Siin saab võrrelda ettevõtteid visuaalselt. Näitajad on samad, kuid seekord vaatame korraga kõiki meile teadaolevaid kvartaleid.

Sel rakendusel ei ole otsest võrreldavate ettevõtete ülempiiri, aga ma ei soovita valida rohkem kui viit ettevõtet. Pilt läheb lihtsalt liiga kirjuks.

Joonistel on iga andmepunkt punktina kujutatud ning sama ettevõtte punktid joonega ühendatud. Kui ei ole punkte millega ühendada, siis on joonisel kuvatud ainult punkt(id).

Iga ettevõte on esimesel kahel joonisel olemas, võib-olla ainult ühe punktina, aga on olemas. Kui ettevõtet ei ole teise rea joonistel (käive töötaja kohta ja tööjõumaksud töötaja kohta), siis järelikult ei olnud ettevõttel töölisi. Kui ettevõtet ei ole kolmanda rea joonistel (maksud käibest), siis ei olnud ettevõttel käivet.

### Nipid rakenduse kasutamiseks

See rakendus on tehtud R, Shiny ja plot.ly'ga. Mõned näpunäited neile, kes ei ole varem plot.ly joonistega kokku puutunud:

- Hiirega punkti peale minnes näed ettevõtte nime, aega ja täpset arvulist väärtust.
- Kui vajutad legendil ettevõtte peale, kustutatakse selle ettevõtte joon graafikult. Uuesti vajutades taasilmub joon.
- Kui teed legendil ettevõtte peal topeltkliki, kustutatakse kõik teised ettevõtted jooniselt. Taasilmumiseks pead vajutama legendil ettevõtete nimedele.
- Joonisel saab huvitavat piirkonda suurendada. Selleks (hiire vajutusega) valida sobiv piirkond joonisel. Topeltklikk joonisel kuvab algpildi.

Kui tundub, et käibe või töötajate joonisel on mõni ettevõtte kuvamata, siis proovi ainult selle ettevõtte kuvamist. Äkki see punkt või joon jääb teise värvi taha.

Kui leiad midagi põnevat, siis saad leidu jagada jooniste all oleva "Link jagamiseks" nupu kaudu, mis annab nende ettevõtete URLi. Selle URLi kaudu tulles rakendus teab, mis ettevõtteid soovitakse vaadata, aga  nägemiseks tuleb ikka vajutada "Tee joonised" nuppu.

Nüüd on aeg, et sa lähed ja vaatad, mida tegi sinu ettevõte 2017. aastal.

 

Kui sul on kommentaare/soovitusi, siis võid need kirjutada siia alla, panna mulle meilile annegretemolloka@gmail.com või teha parandused Githubis ([ajaloo rakendus](https://github.com/annegretepeek/benchmarking_EMTA), [viimase kvartali rakendus](https://github.com/annegretepeek/company_compare_EMTA)).
