---
tag: CWBP4D69S3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242752
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $\{a_n\}_{n\geq 1}$ is defined by a recurrence relation
$$a_1 = 1, a_{n+1} = \log \frac{e^{a_n}-1}{a_n}$$
And a sequence $\{b_n\}_{n\geq 1}$ is defined as $b_n = \prod\limits_{i=1}^n a_i$. Evaluate an infinite series $\sum\limits_{n=1}^\infty b_n$.
