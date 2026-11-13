---
tag: MHTRWXJV3X
kind: problem
type: answer
answer: D_{n}=n!(1-\frac{1}{1!}+\frac{1}{2!}-\cdots+\frac{(-1)^{n}}{n!})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138813
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Derangement Formula) Prove: For $n$ elements $1,2, \cdots, n$, the number of all permutations where $i$ is not in the $i$-th position $(i=1,2, \cdots, n)$ is
$$
D_{n}=n!\left(1-\frac{1}{1!}+\frac{1}{2!}-\cdots+\frac{(-1)^{n}}{n!}\right) .
$$
