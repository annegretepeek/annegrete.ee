---
layout: post
title: "Paneme sektorite palgad järjekorda"
date: 2018-05-07
categories:
  - "eesti-keeles"
tags:
  - "d3-js"
  - "eesti"
  - "palk"
  - "statistikaamet"
image: "/assets/blog/paneme-sektorite-palgad-jarjekorda/sektor_preview.png"
---

Kord lugesin [lehest](https://leht.postimees.ee/4227769/eesti-inimesed-teenivad-ajaloo-korgeimat-palka), et IT palgad läksid pankadest mööda. Kas see on esmakordne möödumine? Kas alati on finantsvaldkonna palgad kõige kõrgemad olnud? Kas ka teised sektorid muudavad oma asukohta järjekorras? Nüüd - rohkem kui 6 kuud hiljem - jõudsin nende uurimiseni. Pikka juttu ma ei kirjuta, vaid annan võimaluse ise avastada ja järeldusi teha.

Tegin joonise, mis kujutab viimase 10 aasta sektorite järjekorda ja selle muutust keskmise palga alusel. Pane tähele, et joonis näitab ainult järjekorda(!). See ei näita palkade suurust või suuruse muutust. Kui sektori joon vajub, siis see ei tähenda otseselt palkade langust. Pigem tähendab see, et teises sektoris kasvasid palgad rohkem.

Hiirega joonisele minnes muudavad valitud sektori nimi ja joon värvi, et oleks lihtsam huvipakkuvate sektorite muutust jälgida. Katseta!

<iframe id="joonis" src="{{ '/assets/blog/paneme-sektorite-palgad-jarjekorda/sektor_small.html' | relative_url }}" width="100%" height="420px" frameborder="0" scrolling="no"></iframe>

([täisekraani versioon]({{ '/assets/blog/paneme-sektorite-palgad-jarjekorda/sektor.html' | relative_url }}))

Teadlikult olen blogiversioonis nimede lõpud ära lõiganud, täisekraani versioonis on nimed pikalt välja kirjutatud.

Info ja side ning finants- ja kindlustustegevused on kogu aeg esimesed olnud. Majutus ja toitlustus ning muud teenindavad tegevused on kogu aeg viimased olnud. Nagu spordivõitlustelgi toimub põhiline kohtade vahetus ikka keskmistel kohtadel.

Millised on sinu järeldused?

<div class="post-sources">
  <div class="post-source-title">Allikad:</div>
  <div class="post-source-row"><a href="https://github.com/annegretepeek/sector_salaries">Github</a></div>
  <div class="post-source-row"><a href="http://andmebaas.stat.ee/Index.aspx?lang=et&amp;DataSetCode=PA5211">Statistikaamet tabel PA5211</a></div>
</div>
