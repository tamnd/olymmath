---
tag: 7HTYK5FXAK
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=296
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo
    source: hf-mathnet
    label: Switzerland SMO - Finalrunde
---
Wir haben ein $8 \times 8$ Brett. Eine innere Kante ist eine Kante zwischen zwei $1 \times 1$ Feldern. Wir zerschneiden das Brett in $1 \times 2$ Dominosteine. Für eine innere Kante $k$ bezeichnet $N(k)$ die Anzahl Möglichkeiten, das Brett so zu zerschneiden, dass entlang der Kante $k$ geschnitten wird. Berechne die letzte Ziffer der Summe, die wir erhalten, wenn wir alle $N(k)$ addieren, wobei $k$ eine innere Kante ist.
