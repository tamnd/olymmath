---
tag: 6BCJMDBM7H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33871
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a non-negative random variable. Find the conditional probabilities

$$
\mathrm{P}(X \leqslant x \mid \lfloor X \rfloor) \text { and } \mathrm{P}(X \leqslant x \mid \lceil X \rceil)
$$

where $\lfloor X \rfloor$ is the greatest integer not exceeding $X$ (this number is also denoted by $[X]$), and $\lceil X \rceil$ is the smallest integer greater than or equal to $X$.
