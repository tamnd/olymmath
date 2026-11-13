---
tag: ZX6CEFZ81R
kind: problem
type: answer
answer: minimum 402, maximum 40321
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=119
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
On répartit les entiers de $1,2, \ldots, 8$ en deux ensembles $A$ et $B$, puis on note $P_{A}$ le produit de tous les éléments de $A$ et $P_{B}$ le produit de tous les éléments de $B$.
Quelles sont les valeurs minimale et maximale que peut prendre la somme $P_{A}+P_{B}$ ?

Note : si un ensemble $E$ est vide, on considérera que le produit de ses éléments est égal à 1.
