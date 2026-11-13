---
tag: YAWKFGN8SS
kind: problem
type: answer
answer: n=0,n=-p,n=(\frac{p-1}{2})^{2},n=-(\frac{p+1}{2})^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89005
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a given prime number $p$, find all integers $n$ such that $\sqrt{n^{2}+p n}$ is an integer.
