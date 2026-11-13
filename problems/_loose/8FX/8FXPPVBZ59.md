---
tag: 8FXPPVBZ59
kind: problem
type: answer
answer: P(x) = m x \prod_{i=1}^{k} (x - ia)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250722
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b$ be given two real number with $a \ne 0$. Find all polynomials $P$ with real coefficients such that
$x P(x - a) = (x - b)P(x)$ for all $x\in R$
