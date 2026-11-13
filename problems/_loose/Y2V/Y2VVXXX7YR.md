---
tag: Y2VVXXX7YR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=358
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
Déterminer toutes les paires $(f, g)$ de fonctions $f, g: \mathbb{R} \rightarrow \mathbb{R}$ telles que pour tous $x, y \in \mathbb{R}$
- $f(x) \geq 0$,
- $f(x+g(y))=f(x)+f(y)+2 y g(x)-f(y-g(y))$.
