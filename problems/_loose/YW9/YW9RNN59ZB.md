---
tag: YW9RNN59ZB
kind: problem
type: answer
answer: 2n+2-6+\frac{4}{}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102723
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies:
$$
a_{1}=a(a>2), a_{n+1}=\frac{a_{n}^{2}}{2\left(a_{n}-1\right)} \text {. }
$$

Prove: $\sum_{i=1}^{n} a_{i}<2 n+2 a-6+\frac{4}{a}$.
