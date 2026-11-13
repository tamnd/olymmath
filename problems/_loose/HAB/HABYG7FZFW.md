---
tag: HABYG7FZFW
kind: problem
type: answer
answer: a = b = c = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=372
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France OLYMPIADES FRANÇAISES DE MATHÉMATIQUES
---
Trouver tous les entiers strictement positifs $a, b$ et $c$ tels que $\operatorname{PGCD}(a, b, c)=1$,
$$
a\mid (b-c)^2, b\mid (a-c)^2, c \mid (a-b)^2
$$
et tels qu'il est possible de construire un triangle non aplati dont les côtés ont pour longueurs $a$, $b$ et $c$.
