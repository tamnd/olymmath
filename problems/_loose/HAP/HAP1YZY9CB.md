---
tag: HAP1YZY9CB
kind: problem
type: answer
answer: "-1002"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265640
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S(N)$ be the number of 1's in the binary representation of an integer $N$, and let $D(N) = S(N + 1) - S(N)$. Compute the sum of $D(N)$ over all $N$ such that $1 \le N \le 2017$ and $D(N) < 0$.
