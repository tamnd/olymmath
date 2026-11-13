---
tag: GJDPA9D83R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92365
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $\left\{x_{n}\right\}$ is a bounded integer sequence, satisfying the recurrence relation
$$
x_{n+5}=\frac{5 x_{n+4}^{3}+x_{n+3}-3 x_{n+2}+x_{n}}{2 x_{n+2}+x_{n+1}^{2}+x_{n+1} x_{n}} .
$$

Prove: $\left\{x_{n}\right\}$ is eventually periodic.
