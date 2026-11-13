---
tag: WM2CSMM3XN
kind: problem
type: answer
answer: "12"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We define the weight $W$ of a positive integer as follows: $W(1) = 0$, $W(2) = 1$, $W(p) = 1 + W(p + 1)$ for every odd prime $p$, $W(c) = 1 + W(d)$ for every composite $c$, where $d$ is the greatest proper factor of $c$. Compute the greatest possible weight of a positive integer less than 100.
