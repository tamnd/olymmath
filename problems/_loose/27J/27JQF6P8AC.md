---
tag: 27JQF6P8AC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166644
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let

$$
D(x)= \begin{cases}1, & \text { if } x^{2} \text { is rational, } \\ 0, & \text { if } x^{2} \text { is irrational. }\end{cases}
$$

Prove that $D(x)$ is not a periodic function. A function is not periodic if for any $a \neq 0$, there exists an $x$ such that $D(x) \neq D(x+a)$.
