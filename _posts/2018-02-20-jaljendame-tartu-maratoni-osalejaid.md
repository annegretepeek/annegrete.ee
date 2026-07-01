---
layout: post
title: "Jäljendame Tartu Maratoni osalejaid"
date: 2018-02-20
categories:
  - "eesti-keeles"
tags:
  - "d3-js"
  - "kaart"
  - "sport"
  - "tartu"
image: "/assets/blog/jaljendame-tartu-maratoni-osalejaid/TM18.png"
---

Sel nädalavahetusel toimus üks Eesti olulisemaid spordisündmusi - Tartu Maraton.

Mina üritusel ei osalenud, aga ootasin selle toimumist pikkisilmi. Mul oli suur plaan jäljendada ühte visualiseeringut. Päris nii nagu lootsin, see välja ei tulnud, aga olen tulemusega rahul.

## Inspiratsioon

Umbes pool aastat tagasi nägin 2014. aasta Hongkongi Maratoni tulemuste graafikut ajalehe [South China Morning Posti lehel](http://widgets.scmp.com/infographic/20140217/marathon2014/). Siin on iga lõpetaja kujutatud punktina ja ära toodud lõpetamise jaotus.

Minu arust on see suurepärane joonis. Infot on küll palju, kuid üldpilti edastab väga hästi. Esimesed jooksjad tulevad üksikult, alguses ja lõpus on lõpetajaid vähe, keskosas on neid väga palju. Enamus jooksjatest lõpetas vahemikus 3-5 tundi. Väga ilusasti on kasutatud värve ja interaktiivsust, et andmetega lähemalt tutvuda.

Koheselt tekkis huvi teha sama mõne Eesti spordisündmusega. Jäin ootama Tartu Maratoni.

Esimene katsetus näitas, et see lahendus Tartu Maratonile ei sobi. Tartu Maraton kestab umbes 9 tundi, mis teeb joonise peaaegu poole pikemaks. See ei anna päris sama tunnetuse. Tuleb teha midagi muud.

Mis oleks kui paneks punktid rajale liikuma? Prooviks jäljendada sõitjaid arvutiekraanil?

Selleks jagas [Klubi Tartu Maraton](https://www.tartumaraton.ee/) minuga raja koordinaate. Aitäh teile!

Kohe alguses tuli ilmseks, et kõiki 2500 punktikest ei ole mõtet samaaegselt rajale panna. Nii kirjust pildist ei saa midagi aru. Otsustasin vähendada kujutatavaid andmeid.

## Tulemus

Valminud graafikul saab lugeja ise valida lõpetaja, kes teda kõige rohkem huvitab. Osalejad on järjestatud perekonnanime järgi ning otsing lubab ka nime trükkimist.

Korraga saabki vaadata ühte lõpetajat, kuid konteksti andmiseks lisan esimese ja viimase lõpetaja ning keskmise (mediaan) nais- ja meeslõpetaja.

Iga punkt läbib raja vastavalt tegelikule raja läbimise ajale. Arvutiekraanil raja läbimine on 1000 korda kiirem kui raja läbimine looduses. Kui tegelikul rajal oli võitja aeg 3:08:16 ehk 11 296 sekundit, siis ekraaniraja läbimiseks läheb võitjal 11,296 sekundit.

Paneme osalejad joonele. START!

<iframe id="joonis" src="/assets/blog/jaljendame-tartu-maratoni-osalejaid/rada.html" width="100%" height="650px" frameborder="0" scrolling="no"></iframe>

([täisekraani versioon](/assets/blog/jaljendame-tartu-maratoni-osalejaid/rada.html))

NB! See on osalejate jäljendamine ja ei näita tegelikku pilti, sest ei ole teada inimeste tegelikke kiiruseid rajal. Siin on eeldatud, et kõik osalejad läbisid raja stabiilse kiirusega.

Kui mõni nimi juhuslikult ei tööta, siis palun sellest märku anda meilile annegretemolloka@gmail.com.
