---
layout: post
title: "Peaaegu 4 miljonit sammu"
date: 2019-01-30
categories:
  - "eesti-keeles"
tags:
  - "andmekunst"
  - "r"
  - "sport"
image: "/assets/blog/peaaegu-4-miljonit-sammu/sammud18.png"
---

Üheks 2018. aasta eesmärgiks oli koguda enda kohta rohkem infot. Täpsemalt, plaanisin lugeda oma samme ja sellega hinnata oma aastast aktiivsust. Selle jaoks ostsin uue käekella, mis suudab samme lugeda. Iga päev oli kell mu käe peal. Ehk mul on 365 vaatlust. Mõned tunnid (ja seega mõni tuhat sammu) on küll puudu, aga üldiselt kogusin andmeid väga stabiilselt.

Sammudele seadsin 2 eesmärki:

- Võimalikult paljudel päevadel koguda 10 000 sammu.
- Ühelgi päeval ei tohi jääda sammude arv alla 5 000.

Nüüd on tulemused käes.

 

### Tulemused

Tulemused on näha kaanepildil.

Eesmärkide täitmisega olen pigem rahul. 220 päeval (60% tervest aastast) said täis 10 000 sammu. Ja ainult 6 päeval (2% tervest aastast) jäid sammud alla 5 000.

Statistikuna huvitavad mind nendest numbritest veel rohkem jaotused.

 

### Jaotused

Minu hüpoteesid jaotuste kohta on järgmised:

- Sammude jaotus on sabaga ehk on üksikud päevad, kus sai väga palju samme. Näiteks oli päevi, mil sai terve päev turistina ringi jalutada.
- Kui vaadata ainult tuhandeid (ehk kustutada kolm viimast numbrit igalt arvult), siis on märgatavalt rohkem päevi 5 ja 10 tuhande juures ning vähem 8 ja 9 tuhande juures. Kuna 5 000 ja 10 000 olid eesmärgid, siis õhtud, kui need päris täis ei olnud, siis jalutasin kodus ringi. (Muide, kahetoalises korteris on küllaltki tülikas lisa 1000 sammu saada. :D )
- Kui vaadata sajalisi (kustutada ära tuhanded ja kaks viimast numbrit), siis 0 ja 1 on rohkem, 7,8,9 on vähem. Jälle sama põhjus, kui kellal on ees ...876, siis on huvi see täis tuhandeni kõndida. (Aasta alguses rohkem, aasta lõpus vähem.)
- Kui vaadata kümnelisi, siis jällegi 0, 1, 2 rohkem ja 7, 8, 9 vähem populaarsed aasta jooksul.
- Kui vaadata viimast numbrit, siis ei tohiks olla vahet ja kõiki numbreid (0-9) võiks olla ühtlaselt sama palju.

Palju nendest hüpoteesidest on pidasid andmetel paika? Vaatame igat hüpoteesi eraldi.

 

#### **Jaotus on sabaga**

![](/assets/blog/peaaegu-4-miljonit-sammu/Jaotus1.png)

 

Jaotus on küll sabaga. Üle 20 000 sammu oli ainult 9 päeval.

 

#### **Tuhanded: 5 ja 10 tuhat on rohkem populaarsed (8, 9 vähem populaarsed)**

![](/assets/blog/peaaegu-4-miljonit-sammu/tuhat.png)

Sellelt jooniselt jäid välja 6 päeva, mis olid alla 5000 sammu, ja 7 päeva, mis olid üle 21 tuhande.

5 tuhat ei ole väga populaarne. 10 tuhat on kõige populaarsem. 8 ja 9 tuhat on küllaltki vähe populaarsed.

 

#### **Sajad: 0 ja 1 on populaarsed, 7, 8 ja 9 vähe populaarsed**

![](/assets/blog/peaaegu-4-miljonit-sammu/sada.png)

See hüpotees peab paika.

 

#### **Kümned: 0, 1, 2 on rohkem ja 7, 8, 9 vähem populaarsed**

![](/assets/blog/peaaegu-4-miljonit-sammu/kymme.png)

Wow. 1 on hoopis kõige vähem populaarne. 0 on küll populaarsem kui 7, 8 ja 9, aga mitte kõige populaarsem.

 

#### **Viimane number: kõiki numbreid esineb võrdselt**

![](/assets/blog/peaaegu-4-miljonit-sammu/yks.png)

Eee... See ka ei pea paika.

Kuna 365 ei ole väga suur valim, siis kõikumine on loomulik, aga 6 ja 7 tunduvad kahtlaselt populaarsed. Ei tea, kas need on kella lemmikud numbrid. :D

 

Vabandan, et see postitus ei ole stiililt puhas. Infograafik ja joonised kasutavad erinevaid värve ja fonte.

Ma kasutasin seda postitust võimalusena katsetada nii infograafiku tegemist kui ka R'is xkcd stiili kasutamist. Infograafik tuli küll veidi lihtsakoeline. Järgmine kord võiks kasutada ka ikoone/pilte, aga see kord ei olnud kindel, mis siia juurde sobiks. Parem tehtud kui täiuslik.
