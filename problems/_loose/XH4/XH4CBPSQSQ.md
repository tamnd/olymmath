---
tag: XH4CBPSQSQ
kind: problem
type: answer
answer: 2^{n+1}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166926
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the $n$-degree polynomial $P(x)$, it holds that $P(j)=2^{j-1}$, if $j=1,2, \ldots, n, n+1$. What is the value of $P(n+2)$?
