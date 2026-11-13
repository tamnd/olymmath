---
tag: S1W2W1SJR1
kind: problem
type: answer
answer: (1, 1), (2, 2), (3, 3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231894
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of positive integers $(m,n)$ such that
$$lcm(1,2,\dots,n)=m!$$
where $lcm(1,2,\dots,n)$ is the smallest positive integer multiple of all $1,2,\dots n-1$ and $n$.
