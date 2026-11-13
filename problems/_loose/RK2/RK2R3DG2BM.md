---
tag: RK2R3DG2BM
kind: problem
type: answer
answer: \binom{2015}{5}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253558
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be the set of all 3-tuples $(a, b, c)$ of positive integers such that $a + b + c = 2013$. Find $$\sum_{(a,b,c)\in S} abc.$$
