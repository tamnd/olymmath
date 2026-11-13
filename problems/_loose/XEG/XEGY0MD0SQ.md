---
tag: XEGY0MD0SQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236219
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $n$, let $c(n)$ be the largest divisor of $n$ not greater than $\sqrt{n}$ and let $s(n)$ be the least integer $x$ such that $n < x$ and the product $nx$ is divisible by an integer $y$ where $n < y < x$. Prove that, for every $n$, $s(n) = (c(n) + 1) \cdot \left( \frac{n}{c(n)}+1\right)$
