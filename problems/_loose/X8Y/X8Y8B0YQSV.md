---
tag: X8Y8B0YQSV
kind: problem
type: answer
answer: \binom{2021}{1010} - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253644
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A nonempty set $S$ is called *Bally* if for every $m\in S$, there are fewer than $\frac{1}{2}m$ elements of $S$ which are less than $m$. Determine the number of Bally subsets of $\{1, 2, . . . , 2020\}$.
