---
tag: PZA5E390YD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56204
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a rectangular screen of size $m \times n$, divided into unit cells, more than $(m-1)(n-1)$ cells are lit. If in any $2 \times 2$ square, three cells are not lit, then after some time, the fourth one will also turn off.

Prove that nevertheless, at least one cell will always be lit on the screen.
