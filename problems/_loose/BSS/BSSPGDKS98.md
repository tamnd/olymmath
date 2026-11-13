---
tag: BSSPGDKS98
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187204
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A type 1 sequence is a sequence with each term 0 or 1 which does not have $0,1,0$ as consecutive terms. A
type 2 sequence is a sequence with each term 0 or 1 which does not have $0,0,1,1$ or $1,1,0,0$ as consecutive terms. Show that there are twice as many type 2 sequences of length $n+1$ as type 1 sequences of length $n$.
