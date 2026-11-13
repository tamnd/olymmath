---
tag: Y8Q9PYV5MK
kind: problem
type: answer
answer: \begin{cases}\sqrt{\frac{n-1}{n+1}}&
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146832
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n(n>1)$ is a positive integer, let $a_{k}=\left(\frac{n-k}{k}\right)^{k-\frac{n}{2}}(0<k \leqslant n, k \in \mathbf{N})$. Find the maximum value of the sequence $\left\{a_{k}\right\}$.
