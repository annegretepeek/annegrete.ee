---
layout: post
title: "Eesti palgakasv"
date: 2017-09-25
categories:
  - eesti-keeles
tags:
  - d3-js
  - eesti
  - ettevotlus
  - palk
  - postimees
  - statistikaamet
image: "/assets/blog/eesti-palgakasv/palk.png"
---

Eestis on palgad tõusnud.

Sellest kirjutas Postimees 30.augustil ([artikkel](http://pluss.postimees.ee/4227769/eesti-inimesed-teenivad-ajaloo-korgeimat-palka)). Artiklit täiendas päris kirju joonis. Ühele pildile oli ära mahutatud keskmise palga muutus, maakondade keskmised palgad, sektorite keskmised palgad ja mõned eurod.

Sõnum on positiivne. Eestis on keskmine palk kasvanud, lausa 15 aastaga rohkem kui 3 korda.

Mind häirib veidi, et räägitud on absoluutarvudest. Kas kasvanud on ka ostujõud? Kas me oleme ka suhteliselt rikkamaks muutunud? Näiteks võrreldes naabritega?

Võtsin samad andmed Statistikaametist, vaatasin ka tarbijahinnaindeksit, et arvutada inflatsioon. Lisaks otsisin need näitajad ka soomlaste kohta. Leidsin tarbijahinnaindeksiga parandatud palgad (baasiks 2017 II kvartal). Ja lõpuks vaatasin, kui suure osa Eesti keskmine palk moodustab Soome keskmisest palgast.

Tulemus on siin: 

<iframe id="joonis" src="{{ '/assets/blog/eesti-palgakasv/palk.html' | relative_url }}" width="100%" height="550" frameborder="0" scrolling="no"></iframe>

([täisekraani versioon]({{ '/assets/blog/eesti-palgakasv/palk.html' | relative_url }}))

2002\. aasta I kvartalis oli Eesti keskmine palk 366€, mis on väärtuselt sama kui 584€ täna (tarbijahinnaindeksiga kohandatud palga joon), II kvartalis 406€ (tänane väärtus 639€). 2017. aasta II kvartalis oli Eesti keskmine palk 1242€.

Aus on võrrelda erinevate aastate samu kvartaleid, sest esimese ja kolmanda kvartali palgad on madalamad kui teise ja neljanda kvartali palgad.

Võrreldes 2002. ja 2017. aasta II kvartalit on tõesti absoluutne palk tõusnud rohkem kui kolm korda. Kui võrdleme tarbijahinnaindeksiga kohandatud palkasid, siis kasv on peaaegu kahekordne. See tähendab, et ostujõud on kasvanud pea kaks korda.

Lisaks võrdlen Eesti tarbijahinnaindeksiga kohandatud palka ja Soome tarbijahinnaindeksiga kohandatud palka. 2002. aastal oli Eesti keskmine palk 23% Soome keskmisest palgast, nüüd on  see osakaal 37%. See tähendab, et palgalõhe Eesti ja Soome vahel on vähenenud 14%. Positiivne uudis, aga pikk tee on veel ees.

NB! Võrreldes Eestit Soomega peame meeles pidama, et siin on kasutatud brutopalkasid, makse pole arvesse võetud. Lisaks ei kajastu siin kuidagi elukalliduse tase erinevates riikides.

<div class="post-sources">
  <div class="post-source-title">Andmed:</div>
  <div class="post-source-row">http://pub.stat.ee/px-web.2001/Dialog/varval.asp?ma=IA02&ti=TARBIJAHINNAINDEKS%2C+1997+%3D+100+%28KUUD%29&path=../Database/Majandus/04Hinnad/&lang=2</div>
  <div class="post-source-row">http://pub.stat.ee/px-web.2001/Dialog/varval.asp?ma=PA010&ti=KESKMINE+BRUTOKUUPALK+JA+BRUTOTUNNIPALK+P%D5HITEGEVUSALA+%28EMTAK+2008%29+J%C4RGI+%28KVARTALID%29&path=../Database/Majandus/12Palk\_ja\_toojeukulu/01Palk/04Luhiajastatistika/&lang=2</div>
  <div class="post-source-row">http://pxnet2.stat.fi/PXWeb/pxweb/fi/StatFin/StatFin\_Vanha\_\_pal\_\_ati/030\_ati\_tau\_103.px/?rxid=1b9c5f39-1a8c-4f2c-9cd3-cc70816adb36</div>
  <div class="post-source-row">http://pxnet2.stat.fi/PXWeb/pxweb/fi/StatFin/StatFin\_Vanha\_\_hin\_\_khi/030\_khi\_tau\_103.px/?rxid=1b9c5f39-1a8c-4f2c-9cd3-cc70816adb36</div>
</div>
