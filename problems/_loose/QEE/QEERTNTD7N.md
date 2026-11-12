---
tag: QEERTNTD7N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1551
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Laat $a$ en $b$ twee positieve gehele getallen zijn die voldoen aan $\operatorname{ggd}(a, b)=1$. Beschouw een pion die op roosterpunt $(x, y)$ staat. Een stap van type A bestaat uit het verplaatsen van de pion naar één van de volgende velden: $(x+a, y+a),(x+a, y-a),(x-$ $a, y+a)$ of $(x-a, y-a)$. Een stap van type B bestaat uit het verplaatsen van de pion naar $(x+b, y+b),(x+b, y-b),(x-b, y+b)$ of $(x-b, y-b)$.
Zet nu een pion op $(0,0)$. Je mag een (eindig) aantal stappen uitvoeren, en wel om en om stappen van type A en type B, beginnend met een stap van type A. Je mag een even aantal of een oneven aantal stappen uitvoeren, dus de laatste stap mag zowel van type A als van type B zijn. Bepaal de verzameling van alle roosterpunten $(x, y)$ die je met zo'n serie van stappen kunt bereiken.
