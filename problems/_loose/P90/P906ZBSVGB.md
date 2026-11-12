---
tag: P906ZBSVGB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=53798
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Numbers from 1 to 1000000 are painted in two colors - black and white. In one move, it is allowed to choose any number from 1 to 1000000 and repaint it and all numbers that are not coprime with it to the opposite color. Initially, all numbers were black. Is it possible to achieve, in several moves, that all numbers become white?
