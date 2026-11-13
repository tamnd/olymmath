---
tag: R2YCETZZ3A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81379
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider 2007 real numbers $x_{1}, \ldots, x_{2007}$ such that for any $I \subset\{1,2, \ldots, 2007\}$ of cardinality 7, there exists $J \subset\{1,2, \ldots, 2007\}$ of cardinality 11 satisfying

$$
\frac{1}{7} \sum_{i \in I} x_{i}=\frac{1}{11} \sum_{j \in J} x_{j}
$$

Show that all the $x_{i}$ are equal.
