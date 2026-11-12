---
tag: F144DNZZYB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2546
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On considère un échiquier classique $8 \times 8$. Un zigzag est un chemin sur les cases blanches, qui part d'une case (quelconque) de la ligne du bas, et monte de ligne en ligne jusqu'à atteindre celle du haut (sur n'importe quelle case) : à chaque étape, on monte d'une case en diagonale. Combien y a-t-il de zigzags?
