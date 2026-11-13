---
tag: FTYTRH3FXZ
kind: problem
type: answer
answer: 1/2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=30
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
Trouver toutes les valeurs possibles pour $f(2018)$ où $f$ est une fonction de $\mathbb{Q}$ dans $\mathbb{R}_{+}$ vérifiant les trois conditions suivantes:
- $f(2)=1 / 2$ ;
- pour tout rationnel $x$, si $f(x) \leqslant 1$, alors $f(x+1) \leqslant 1$;
- $f(x y)=f(x) f(y)$ pour tous rationnels $x$ et $y$.
