---
layout: post
title: "Kuidas kujutada ajajoont?"
date: 2017-12-27
categories:
  - "eesti-keeles"
tags:
  - "ajajoon"
  - "opetus"
image: "/assets/blog/kuidas-kujutada-ajajoont/blog_timeline-1.png"
---

Aeg-ajalt on vaja näidata kellelegi sündmuste järjekorda. Olgu see siis ajalootund, mõni koolitöö, ettevõtte areng või tulevikueesmärgid.

Alati on võimalus teha kuupäevade loend või slaidid. Ma tutvustan kahte tasuta _online_\-tööriista, millega saab visualiseerida ajajoont, TimelineJS ja TimeLineCurator. TimelineJS sobib ühe ajajoone kuvamiseks. TimeLineCurator sobib, kui info on tekstis või kui soovitakse kuvada kahte või enamat ajajoont ühel joonisel.

 

### TimelineJS

[TimelineJS](https://timeline.knightlab.com/#make) on väga lihtne tööriist, kus saad ajajoont teha nelja sammuga. Lehel on ka ingliskeelne videoõpetus.

1\. Võta nende andmetabeli mall (nupp "Get the Spreadsheet Template") ja salvesta see oma Google Sheets'i ("Make a copy" nupp järgmisel lehel). Täida tabel oma andmetega. Failis ei tohi muuta veergude nimesid, veergusid kustudada ega jätta tühje ridu. Ainuke vajalik väli on alguse aasta (välja arvatud juhul kui tüübiks on _title_).

[![](/assets/blog/kuidas-kujutada-ajajoont/TimelineJS1-300x31.png)](/assets/blog/kuidas-kujutada-ajajoont/TimelineJS1.png)

Punased veerud on algusaja kohta, helehallid lõpuaja kohta. Tabelis on ka veerud pealkirjade, lisainfo, lisatavate meediate ning ajajoone tausta kohta. Igale sündmusele saad lisada pildi, youtube'i või vimeo video, soundcloundi heli või muu.

2\. Oma tabel tuleb teha avalikuks:  File -> Publish to the web... -> Publish -> OK. Pane väike aken kinni ja kopeeri tabeli URL.

3\. Kopeeri Google Sheets'i URL kolmanda sammu väljale. Lisaseadmete alt saad valida ka eesti keele.

[![](/assets/blog/kuidas-kujutada-ajajoont/TimelineJS2-300x153.png)](/assets/blog/kuidas-kujutada-ajajoont/TimelineJS2.png)

4.  Saad vaadata ajajoone eelvaadet. Ning see leht annab jagatava lingi, mida huvilistele saata, või võimaluse lisada see oma lehele.

Minu tulemus:
[![](/assets/blog/kuidas-kujutada-ajajoont/blog_timeline-1.png)](/assets/blog/kuidas-kujutada-ajajoont/blog_timeline-1.png)
 

### TimeLineCurator

[TimeLineCurator](http://timelinecurator.org/) sobib hästi, kui ajajoon põhineb tekstil. See tööriist oskab üldiselt ise tekstist kuupäevad välja otsida.

Eestikeelsete tekstidega võib esineda probleeme, sest rakendus ei tea eestikeelseid kuude nimetusi ja ei leia aastaarve, kui aastaarvul on punkt lõpus (nagu eesti keeles tihti kohane). Eestikeelses tekstis peaks kuupäevad muutma arvutile arusaadamaks (nt 01.01.2016 või 2016 aasta).

[![](/assets/blog/kuidas-kujutada-ajajoont/TimeLineCurator0-300x142.png)](/assets/blog/kuidas-kujutada-ajajoont/TimeLineCurator0.png)

 

Tekste saad lisada ekraani keskel oleva "+" kaudu. Siin kasutan näitena [eelmises postituses](/blog/2017/11/eesti-vs-dominikaan/) kasutatud Eesti ja Dominikaani ajaloosündmuseid. Üksikuid sündmusi saad lisada paremal ääres oleva "+" kaudu.

[![](/assets/blog/kuidas-kujutada-ajajoont/TimeLineCurator1-1-300x139.png)](/assets/blog/kuidas-kujutada-ajajoont/TimeLineCurator1-1.png)

Andmete lisamiseks saad anda soovitud teksti URL või kopeerida huvitatud lõik. Lisaks saad valida ajajoone värvi. Kui soovid lisada mitu ajajoont ühele joonisele, siis korrata andmete lisamist uue värviga. Kokku saad lisada kuue erineva värviga ajajooni.

Mina lisasin oma ajajoonele [Dominikaani sündmused](http://www.worldatlas.com/webimage/countrys/namerica/caribb/dominicanrepublic/dotimeln.htm) alates 1900. aastast (sinine), [Eesti sündumused](https://www.worldatlas.com/webimage/countrys/europe/estonia/eetimeln.htm) alates 1900. aastast (roheline) ja lisaks ka  [Eesti tänapäeva info](https://et.wikipedia.org/wiki/Eesti#T%C3%A4nap%C3%A4ev) Wikipediast (kollane). Tulemus on  järgmisel joonisel.

[![](/assets/blog/kuidas-kujutada-ajajoont/TimeLineCurator2-300x142.png)](/assets/blog/kuidas-kujutada-ajajoont/TimeLineCurator2.png)

Nüüd kui kõik andmed on sisseloetud, saad iga sündmuse käsitsi üle käia. Näiteks kui on vaja muuta sündmuse pealkirja, täiendada sündmuse kirjeldust/aega või lisada pilt/video. Seda kõike saab teha all paremal. Kui mõni sündmus on vaja ära kustutada, siis seda saad teha "Add Media" nupu all oleva "X" nupuga.

Lisaks saad projektile panna nime ja lisada kirjelduse.

Joonisel on täpina kujutatud konkreetsel hetkel toimunud sündmused ja joon kolmnurkadest otstega kujutab perioodi. Täpi või joone peale vajutades avaneb all paremal info sündmuse kohta.

Paremal üleval on ka näitatud kuupäevad/ajad, millest tööriist täpselt aru ei saanud. Minu näitel on need "_more than 50 year_" ja "_four decades_".

Kui sündmused on üle käidud ja oled projektiga rahul, saad seda projekti eksportida. Eksportimiseks on kaks võimalust _TLC Export_ või _TimelineJS Export._

[![](/assets/blog/kuidas-kujutada-ajajoont/TimeLineCurator3-300x141.png)](/assets/blog/kuidas-kujutada-ajajoont/TimeLineCurator3.png)

_TCL Export_ annab ülemise joonise (salvestamine käib pop-up'i kaudu, vaata, kas sul on need keelatud). Igal projektil on unikaalne URL ja seda saab lihtsalt jagada. Siin võib olla probleeme täpitähtede kuvamisega.

[![](/assets/blog/kuidas-kujutada-ajajoont/TimeLineCurator4-300x133.png)](/assets/blog/kuidas-kujutada-ajajoont/TimeLineCurator4.png)

_TimelineJS Export_ annab ülemise joonise. Siin ei ole probleeme täpitähtedega. Iga ajajoon on omaette real. See projekt on ajutine ja ei anna unikaalset URLi, aga kui lähed projekti lehele tagasi,  siis paremal ääres on "↓" nupp, millega saab ZIP faili alla laadida. Seal on index.html fail ja data.json fail. Kui need kaks faili on samas kaustas, siis index faili avamisel näed tulemust.

 

### Boonus!

Mainin boonusena ära veel ühe tööriista, mis aitab ajajoont kuvada. Selleks on Microsofti Timeline Storyteller.

Selles tegin eelmise postituse [ajajoone joonise](/assets/blog/eesti-vs-dominikaan/ajalugu.png). Sel tööriistal on väga palju võimalusi, nendega tutvumiseks ja tutvustamiseks kulub rohkem aega. Programmiga tutvumiseks on lehel näited ja näiteandmestikud, millega katsetada. Soovitan soojalt mõne andmestikuga mängida.
