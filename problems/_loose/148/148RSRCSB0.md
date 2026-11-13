---
tag: 148RSRCSB0
kind: problem
type: answer
answer: "290"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=362
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo
    source: hf-mathnet
    label: Switzerland SMO-Selektion
---
Entlang der Küste einer kreisrunden Insel befinden sich 20 verschiedene Dörfer. Jedes dieser Dörfer hat 20 Kämpfer, wobei alle 400 Kämpfer unterschiedlich stark sind.

Jeweils zwei benachbarte Dörfer $A$ und $B$ machen nun einen Wettkampf, indem sich jeder der 20 Kämpfer des Dorfs $A$ mit jedem der 20 Kämpfer des Dorfs $B$ misst. Dabei gewinnt jeweils der stärkere Kämpfer. Wir sagen, dass das Dorf $A$ stärker ist als das Dorf $B$, falls in mindestens $k$ der 400 Kämpfe ein Kämpfer von Dorf $A$ gewinnt.

Es stellt sich heraus, dass jedes Dorf stärker als sein Nachbardorf im Uhrzeigersinn ist. Bestimme den maximalen Wert von $k$, sodass dies der Fall sein kann.
