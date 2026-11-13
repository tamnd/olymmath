---
tag: V4JEJQ31YJ
kind: problem
type: answer
answer: P(x) = \frac{1 - x^n}{1 - x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217467
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Prove that there exist polynomials $P$ and $Q$ with real coefficients such that for every real number $x$, we have $P(x) \ge 0$, $Q(x) \ge 0$, and
$$
1 - x^n = (1 - x)P(x) + (1 + x)Q(x).
$$
