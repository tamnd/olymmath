---
tag: JVHG3B0S6Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=212
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France Olympiades Françaises de Mathématiques
---
Pour tout entier $k \geqslant 2$, on note $\mathrm{P}(k)$ le plus grand diviseur premier de $k$.
Prouver qu'il existe une infinité d'entiers $n$ tels que
$$
\mathrm{P}(n)<\mathrm{P}(n+1)<\mathrm{P}(n+2)
$$
