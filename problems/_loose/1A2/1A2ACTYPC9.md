---
tag: 1A2ACTYPC9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=363
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
Soit $\left(P_{n}\right)_{n \in \mathbb{N}}$ une suite de polynômes à coefficients entiers. On suppose qu'il existe un polynôme $Q$ unitaire à coefficient entier tel que $P_{n+1}-P_{n}=Q$ pour tout $n \geqslant 0$. On suppose de plus que pour tout $n \geqslant 0$, $P_{n}$ a une racine entière. Montrer qu'on est dans un des deux cas suivants :
- $P_{0}$ et $Q$ ont une racine entière en commun
- Il existe un polynôme à coefficients entiers $R$ tel que $P_{0}=RQ$ et le degré de $R$ est 1 .
