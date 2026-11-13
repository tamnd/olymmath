---
tag: 4SH50QSM3K
kind: problem
type: answer
answer: P\left(-\frac{1}{n}\right) \le 2^{n+1} - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242909
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P(x)$ be a polynomial with degree $n$ and real coefficients. For all $0 \le y \le 1$ holds $\mid p(y) \mid \le 1$. Prove that $p(-\frac{1}{n}) \le 2^{n+1} -1$
