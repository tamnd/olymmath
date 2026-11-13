---
tag: 4HAD0QVK7Q
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231816
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every positive integeer $n>1$, let $k(n)$ the largest positive integer $k$ such that there exists a positive integer $m$ such that $n = m^k$.

Find $$lim_{n \rightarrow \infty} \frac{\sum_{j=2}^{j=n+1}{k(j)}}{n}$$
