---
tag: PDARB9V50Z
kind: problem
type: answer
answer: max{m, n} + m + n - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=155
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Wir nennen zwei Personen ein befreundetes Paar, wenn sie sich kennen, und wir nennen sie ein nichtbefreundetes Paar, wenn sie sich nicht kennen (befreundet sein oder nicht befreundet sein ist dabei immer gegenseitig). Seien $m, n$ natürliche Zahlen. Finde die kleinste natürliche Zahl $k$, sodass Folgendes gilt: In jeder Gruppe von $k$ Leuten gibt es stets $2 m$ Leute, die $m$ disjunkte befreundete Paare bilden, oder es gibt $2 n$ Leute, die $n$ disjunkte nichtbefreundete Paare bilden.
