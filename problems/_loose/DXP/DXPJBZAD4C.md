---
tag: DXPJBZAD4C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=397
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
Soit $k$ un entier premier avec $n$ vérifiant $1 \leqslant k < n$. Augustin colorie les entiers de $\{1,2, \ldots, n-1\}$ avec autant de couleurs qu'il le souhaite. Cependant, si $j$ est un entier vérifiant $1 \leqslant j \leqslant n-1$, les entiers $j$ et $n-j$ sont de la même couleur. De plus, si $i$ est un entier vérifiant $1 \leqslant i \leqslant n$ et $i \neq k$, les entiers $i$ et $|i-k|$ sont de la même couleur.

Démontrer que Augustin a colorié tous les entiers de la même couleur.
