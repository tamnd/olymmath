---
tag: NH5D08ZZWE
kind: problem
type: answer
answer: (a, a, a, 0) for any positive integer a
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=389
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France PRÉPARATION OLYMPIQUE FRANÇAISE DE MATHÉMATIQUES
---
Déterminer tous les quadruplets $\left(a, b, c, d\right)$ d'entiers positifs avec $a, b, c$ strictement positifs tels que
$$
\begin{aligned}
& \operatorname{PPCM}(b, c)=a+d \\
& \operatorname{PPCM}(c, a)=b+d \\
& \operatorname{PPCM}(a, b)=c+d
\end{aligned}
$$
