---
tag: BMD2VFNV70
kind: problem
type: answer
answer: "25920"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=26
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France Préparation Olympique Française de Mathématiques
---
On place les entiers de $1$ à $9$ dans chacune des cases d'une grille $3 \times 3$. Pour $i=1$, $2$ et $3$, on note $\ell_{i}$ le plus grand entier présent dans la $i^{\text{ème}}$ ligne et $c_{i}$ le plus petit entier présent dans la $i^{\text{ème}}$ colonne.

Combien existe-t-il de grilles telles que $\min \left\{\ell_{1}, \ell_{2}, \ell_{3}\right\}=\max \left\{c_{1}, c_{2}, c_{3}\right\}=4$ ?
