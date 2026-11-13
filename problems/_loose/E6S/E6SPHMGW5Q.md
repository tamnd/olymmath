---
tag: E6SPHMGW5Q
kind: problem
type: answer
answer: a_{n}=\frac{6n-1}{6n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190535
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left(a_{n}\right)_{n=1}^{\infty}$ is defined by the recursive formula

$$
a_{\circ}=-1, a_{n}=\frac{2 a_{n-1}-3}{3 a_{n-1}-4}, n \in \mathbb{N} .
$$

Determine the general term $a_{n}$ of the sequence.
