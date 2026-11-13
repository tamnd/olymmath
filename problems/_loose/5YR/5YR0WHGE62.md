---
tag: 5YR0WHGE62
kind: problem
type: answer
answer: n-3+\frac{n+3}{2^{n}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134355
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A permutation $a_{1}, a_{2}, \cdots, a_{n}$ of $1,2, \cdots, n(n \geqslant 2)$ is called a "good permutation" if there exists a unique $i \in\{2,3, \cdots, n\}$ such that $a_{i}<a_{i-1}$. If the number of good permutations is $p_{n}$, then $\sum_{i=2}^{n} \frac{p_{i}}{2^{i}}=$ $ $
