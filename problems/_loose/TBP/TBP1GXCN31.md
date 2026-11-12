---
tag: TBP1GXCN31
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2294
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On considère une grille $2019 \times 2019$. On note $C_{i, j}$ la case sur la i-ième colonne et la j-ième ligne pour $1 \leqslant \mathfrak{i}, \mathfrak{j} \leqslant 2019$. Un coloriage de la grille est formidable s'il n'existe pas $1 \leqslant \mathfrak{i}<\ell \leqslant 2019$ et $1 \leqslant j<k \leqslant 2019$ tels que les cases $C_{i, j}, C_{i, k}$ et $C_{\ell, j}$ soient de la même couleur. Quel est le plus petit entier N tel qu'il existe un coloriage formidable avec N couleurs?
