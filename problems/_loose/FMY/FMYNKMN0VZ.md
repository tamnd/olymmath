---
tag: FMYNKMN0VZ
kind: problem
type: answer
answer: the set of all integers
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=134
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
Soit $S$ un ensemble d'entiers relatifs. On dit que $S$ est beau s'il contient tous les entiers de la forme $2^{a}-2^{b}$, où $a$ et $b$ sont des entiers naturels non nuls. On dit également que $S$ est fort si, pour tout polynôme $P(X)$ non constant et à coefficients dans $S$, les racines entières de $P(X)$ appartiennent également à $S$.
Trouver tous les ensembles qui sont à la fois beaux et forts.
