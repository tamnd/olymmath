---
tag: AA3P5JW5GB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1734
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We spelen een spelletje stoelendans met $n$ stoelen genummerd 1 tot en met $n$. Je hangt $n$ blaadjes, genummerd 1 tot en met $n$, op de stoelen zodanig dat het nummer op een blaadje niet overeenkomt met het nummer op de stoel.

Op elke stoel zit een speler. Wanneer je klapt, kijkt elke speler naar het nummer op het blaadje aan zijn huidige stoel en gaat op de stoel zitten met dat nummer. Bewijs dat het voor elke $m$ die geen priem-macht is met $1<m \leq n$ mogelijk is om de blaadjes zo op te hangen dat na $m$ klappen voor het eerst iedereen weer op hun eigen stoel zit.
