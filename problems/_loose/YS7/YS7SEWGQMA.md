---
tag: YS7SEWGQMA
kind: problem
type: answer
answer: "616"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203856
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of polynomials is defined by the recursion $P_1(x) = x+1$ and$$P_{n}(x) = \frac{(P_{n-1}(x)+1)^5 - (P_{n-1}(-x)+1)^5}{2}$$for all $n \geq 2$. Find the remainder when $P_{2022}(1)$ is divided by $1000$.

*Proposed by **treemath***
