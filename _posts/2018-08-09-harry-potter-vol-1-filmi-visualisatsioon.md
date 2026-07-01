---
layout: post
title: "Harry Potter vol 1: filmi visualisatsioon"
date: 2018-08-09
categories:
  - "eesti-keeles"
tags:
  - "harry-potter"
  - "r"
image: "/assets/blog/harry-potter-vol-1-filmi-visualisatsioon/Potter_plot2.png"
---

Seekord jälle midagi teistsugust.

Lugesin David Robinsoni väga lahedat [postitust](http://varianceexplained.org/r/love-actually-network/) filmi ["Love Actually"](https://www.imdb.com/title/tt0314331/) analüüsist, kus ta vaatas filmitegelaste võrgustikku. Mina proovin ka selle koodi ära ehk rakendan Davidi koodi enda andmetel.

Mina valisin andmeteks filmi ["Harry Potter ja tarkade kivi"](https://www.imdb.com/title/tt0241527/) käsikirja. See on minu esimene postitus Harry Potteri andmetest. Äkki kunagi jõuan teiste filmide, raamatute või muude andmete analüüsini.

PS! Postituses võivad esineda SPOILERID!!

### Eeltöö

Andmete leidmiseks googeldasin "Harry Potter and the Sorcerer's Stone script" ja leidsin sobiva lehekülje. Tekstis esinevad üksikud vead parandasin käsitsi.

See andmestik on pandud kokku vestluste põhjal ehk andmestikus on ainult tegelased, kel oli rääkiv roll antud stseenis.

![](/assets/blog/harry-potter-vol-1-filmi-visualisatsioon/Potter_data.png) 

<p class="image-caption">Käsikiri tabeli kujul.</p>

Kuna kood on Davidi lehel olemas, kuvan siin postituses ainult tulemusi.

### Tulemused

Esimene joonis on hierarhilisest klasterdamisest.

![](/assets/blog/harry-potter-vol-1-filmi-visualisatsioon/Potter_plot1.png)

 

Mida madalamalt on tegelased ühendatud, seda rohkem esinevad nad stseenides koos.

Esinevad väga loogilised seosed, kui on tädi Petunia, siis on ka onu Vernon (ja Dudley). Samuti Hermione ja Ron on ninapidi koos. Harry on neist veidi eraldatud, sest Harryl on stseene ka teiste inimestega. Võib olla veidi vähem loogiline seos on Malfoy  ja professor McGonagalli vahel. Aga nad olid tõesti stseenides üldiselt koos.

Vaatame lähemalt igat stseeni (v.a stseenid, kus ainult 1 inimene räägib) ja uurime, kes esinevad koos.

![](/assets/blog/harry-potter-vol-1-filmi-visualisatsioon/Potter_plot2.png)

Tõin esile mõned põnevamad stseenid, mis on fännidele tuttavad. Muideks, esineb vähe stseene, kus Harry ei räägiks.

Näeme, et tädi Petunia, onu Vernon, Dudley esinevad ainult filmi alguses. Hagridi saabumine toob muutuse tegelaste koosseisus. Rongijaamas ilmub tegelaste nimekirja Ron, järgneb Hermione ja seiklused algavad.

Viimasena vaatame klassikalist võrgustiku joonist. Iga pallike on üks tegelane ja joone paksus näitab, kui palju on  ühiseid stseene nendel tegelastel.

![](/assets/blog/harry-potter-vol-1-filmi-visualisatsioon/Potter_plot3.png)

Davidi Love Actually joonisel ei ole kellelgi nii tugevad seosed kui Harryl, Ronil ja Hermionel. Võib öelda, et see on väga Harry-Roni-Hermione põhine film.
