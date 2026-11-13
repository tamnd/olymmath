---
tag: HJ3BMJC5Z3
kind: problem
type: answer
answer: D_{n}=n!(1-\frac{1}{1!}+\frac{1}{2!}-\cdots+(-1)^{n}\frac{1}{n!})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92054
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A permutation $\left\{a_{1}, a_{2}, \cdots, a_{n}\right\}$ of the set $\{1,2, \cdots, n\}$ is called a derangement (or wrong permutation) if $a_{i} \neq i$ $(i=1,2, \cdots, n)$. Find the number of derangements $D_{n}$.
