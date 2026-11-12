---
tag: 6HRF9GBRN8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2640
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Soit $n \in \mathbb{N}^{*}$. On place des rectangles $1 \times n$ et $n \times 1$ sur un échiquier $2 n \times 2 n$, de telle manière que deux rectangles ne s'intersectent jamais et que chaque rectangle recouvre exactement n cases. Un ensemble de tels rectangles est dit saturé s'il est impossible d'ajouter un rectangle sans intersecter un rectangle déjà en place.
Trouver le plus petit $k$ tel qu'il existe un ensemble saturé de $k$ rectangles.
