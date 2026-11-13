---
tag: 4XD18KRGJQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182603
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{i} \in\{+1, -1\}$ with $i=1, 2, 3, \ldots, 1980$ and $\prod_{i=1}^{1980} x_{i}>0$. Prove that then:

$$
\sum_{i=1}^{990} x_{2 i-1} x_{2 i} \neq 0
$$
