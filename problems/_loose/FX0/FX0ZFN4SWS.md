---
tag: FX0ZFN4SWS
kind: problem
type: answer
answer: k = 45
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254145
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $k$ piles and there are $2019$ stones totally. In every move we split a pile into two or remove one pile. Using finite moves we can reach conclusion that there are $k$ piles left and all of them contain different number of stonws. Find the maximum of $k$.
