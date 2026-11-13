---
tag: 6JW9MJXHEX
kind: problem
type: answer
answer: 1+(-1)^{\mathrm{n}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105827
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For positive integers $n \geq 2$, for complex numbers $\alpha_{1}, \alpha_{2}, \ldots, \alpha_{n}$ satisfying $\left|\alpha_{i}\right| \leq 1$ (i=1, 2, \ldots, n), find the minimum possible value of $\sum_{\mathrm{i}=1}^{\mathrm{n}}\left|1+\alpha_{i}\right|+\left|1+\prod_{\mathrm{i}=1}^{\mathrm{n}} \alpha_{i}\right|$.
