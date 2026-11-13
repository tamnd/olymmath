---
tag: 3YNY5SH9F6
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181390
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Italy/train/0001.parquet#row=20
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: it-cesenatico
    source: hf-mathnet
    label: Italy Progetto Olimpiadi di Matematica - GARA di SECONDO LIVELLO
---
How many ordered pairs $(x, y)$ of integers satisfy the equation $y^{4}-8 y^{2}+7=8 x^{2}-2 x^{2} y^{2}-x^{4} ?$
