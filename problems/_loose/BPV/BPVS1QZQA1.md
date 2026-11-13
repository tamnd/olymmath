---
tag: BPVS1QZQA1
kind: problem
type: answer
answer: n = 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210919
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the $xy$-plane, for $a>1$ denote by $S(a)$ the area of the figure bounded by the curve $y=(a-x)\ln x$ and the $x$-axis.

Find the value of integer $n$ for which $\lim_{a\rightarrow \infty} \frac{S(a)}{a^n\ln a}$ is non-zero real number.
