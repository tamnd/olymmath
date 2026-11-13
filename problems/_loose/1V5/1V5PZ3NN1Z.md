---
tag: 1V5PZ3NN1Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=323
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
Soit $a_{1}, a_{2}, a_{3}$ des entiers strictement positifs. Pour tout entier $n \geqslant 3$, on pose
$$
a_{n+1}=\operatorname{ppcm}\left(a_{n}, a_{n-1}\right)-\operatorname{ppcm}\left(a_{n-1}, a_{n-2}\right)
$$
étant entendu que l'on a $\operatorname{ppcm}(0, x)=0$ pour tout entier $x$.

Prouver qu'il existe un entier naturel $k$ tel que $k \leqslant a_{3}+4$ et $a_{k} \leqslant 0$.
