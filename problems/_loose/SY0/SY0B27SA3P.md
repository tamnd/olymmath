---
tag: SY0B27SA3P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2142
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Au début, les 9 cases d'un échiquier $3 \times 3$ contiennent chacune un 0 . A chaque étape, Pedro choisit deux cases partageant un côté, et ajoute soit 1 aux deux cases, soit -1 aux deux cases. Montrer qu'il est impossible d'atteindre en un nombre fini de coups la situation où toutes les cases sont remplies par un 2.
