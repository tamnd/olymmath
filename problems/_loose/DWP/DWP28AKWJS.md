---
tag: DWP28AKWJS
kind: problem
type: answer
answer: (x)=x-2017
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85085
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the strictly monotonic function $f: R \rightarrow R$. Determine all functions $g: R \rightarrow R$ such that

$$
f(g(x+2017)) \geq f(x) \geq f(g(x)+2017),(\forall) x \in R
$$
