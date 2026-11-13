---
tag: GT32DV8SPJ
kind: problem
type: answer
answer: a_{}=\sum_{k=0}^{n}(-1)^{k}\binom{n}{k}(n-k)^{}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92836
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Put $n$ labeled balls into $m$ distinct boxes, with no box empty. How many different ways are there to do this?
