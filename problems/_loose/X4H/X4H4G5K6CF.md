---
tag: X4H4G5K6CF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77289
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be a set of integers. We say that $S$ is beautiful if it contains all integers of the form $2^{a}-2^{b}$, where $a$ and $b$ are non-zero natural numbers. We also say that $S$ is strong if, for any non-constant polynomial $P(X)$ with coefficients in $S$, the integer roots of $P(X)$ also belong to $S$.

Find all sets that are both beautiful and strong.
