---
tag: PXGWED915K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251575
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f : R \to R$ be a function from the set $R$ of real numbers to itself. Find all such functions $f$ satisfying the two properties:
(a) $f(x + f(y)) = y + f(x)$ for all $x, y \in R$,
(b) the set $\{ \frac{f(x)}{x} :x$ is a nonzero real number $\}$ is finite
