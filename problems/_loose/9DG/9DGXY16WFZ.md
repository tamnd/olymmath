---
tag: 9DGXY16WFZ
kind: problem
type: answer
answer: a_{n}=(n+1)2^{n-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9936
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of natural numbers $a_{n}, n=1,2, \ldots$ is such that $a_{1}=1$ and $a_{n}=\frac{n+1}{n-1}\left(a_{1}+a_{2}+\ldots+a_{n-1}\right)$ for all $n=2,3, \ldots$. Find the formula for the "general term" of the sequence, that is, a formula that explicitly expresses $a_{n}$ in terms of $n$ for any $n$.
