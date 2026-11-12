---
tag: XDXFDYDMG7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1767
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Speler Zero en speler One spelen een spel op een $n \times n$-bord $(n \geq 1)$. De kolommen van dit $n \times n$-bord zijn genummerd met tweemachten, dus we hebben kolom 1 , kolom 2, kolom 4 tot en met kolom $2^{n-1}$. Om en om zetten de spelers hun eigen getal (dus Zero een 0 en One een 1) in één van de lege vakjes. Speler 0 begint. Als het bord vol is, eindigt het spel en ontstaat er in elke rij een (omgekeerd binair) getal door de waardes van de vakjes met een 1 erin bij elkaar op te tellen. Dus als $n=4$ dan hoort bij een rij met 0101 het getal $0 \cdot 1+1 \cdot 2+0 \cdot 4+1 \cdot 8=10$.
a) Voor welke natuurlijke getallen $n$ kan speler One er altijd voor zorgen dat minimaal één van de rijen deelbaar is door 4 ?
b) En voor welke natuurlijke getallen $n$ kan speler One er altijd voor zorgen dat minimaal één van de rijen deelbaar is door 3?
a) Oplossing 1. Merk eerst op dat als $n=1$, het unieke vakje een 0 krijgt omdat speler Zero begint, dus in dit geval is het mogelijk.
We gaan nu bewijzen dat voor alle andere $n$ Zero kan voorkomen dat One wint. Omdat $4 \mid 2^{k}$ voor alle $k \geq 2$, bepalen alleen de eerste twee kolommen wie er wint. Als er een rij is met twee nullen aan het begin, dan wint speler One en anders speler Zero. We gaan bewijzen dat voor alle $n>1$ Zero kan voorkomen dat One wint.
We zeggen "Zero blokkeert One" als Zero zijn 0 naast een 1 in de eerste twee vakjes van een rij zet. We noemen de eerste twee kolommen het linkergebied; het hele bord op de eerste twee kolommen na juist het rechtergebied.
Als $n$ oneven is, zet Zero als eerste een 0 in het rechtergebied. Er zijn dan nog een even aantal vakjes in zowel het rechtergebied als in het linkergebied. Zero speelt nu zo dat deze eigenschap behouden blijft na elke zet van hem, en dat bovendien het buurvakje van elk leeg vakje in het linkergebied ook leeg is. (In elke rij zijn de twee eerste vakjes dus beide leeg of beide bezet.) Elke keer als One een 1 zet in een van de gebieden, is er in dat gebied dus nog minstens 1 vakje meer leeg en speelt Zero een 0 in datzelfde gebied. Voor het linkergebied doet Zero dat door telkens de zojuist gespeelde 1 van One te blokkeren.
Als $n$ even is, zet Zero als eerste een 0 in het linkergebied. Er zijn nu links nog een oneven aantal vakjes en rechts een even aantal vakjes. Als One rechts een 1 speelt, speelt Zero ook rechts een 0 . Als One links een 1 speelt op een nieuwe rij, blokkeert Zero deze meteen. Als One links een 1 speelt in de rij waar al een 0 stond, dan begint Zero links weer een nieuwe rij als dat kan door een 0 te spelen in het linkergebied zodat het vakje daarnaast (in het linkergebied) nog leeg is. Als er geen nieuwe rij is,
dan zij alle rijen links gevuld met 01 of 10 en speelt Zero rechts.
