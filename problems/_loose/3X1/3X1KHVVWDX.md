---
tag: 3X1KHVVWDX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2303
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Une grille de taille $\mathrm{n} \times \mathrm{n}$ contient $\mathrm{n}^{2}$ cases. Chaque case contient un entier naturel compris entre 1 et $\boldsymbol{n}$, de telle sorte que chaque entier de l'ensemble $\{1, \ldots, n\}$ apparaît exactement $n$ fois dans la grille. Montrer qu'il existe une colonne ou une ligne de la grille contenant au moins $\sqrt{n}$ nombres différents.
