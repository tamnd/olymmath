---
tag: TE82WRTQEJ
kind: problem
type: answer
answer: "48"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221472
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$ not divisible by $211$, let $f(n)$ denote the smallest positive integer $k$ such that $n^k - 1$ is divisible by $211$. Find the remainder when $$\sum_{n=1}^{210} nf(n)$$ is divided by $211$.

*Proposed by ApraTrip*
