---
tag: N3RZE0K4C3
kind: problem
type: answer
answer: \neq4k+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ be a positive integer, and the sequence $\left\{u_{n}\right\}$ is defined as follows:
$$
u_{1}=2, u_{2}=a^{2}+2, u_{n}=a u_{n-2}-u_{n-1}(n \geqslant 3)
$$

To ensure that the sequence $\left\{u_{n}\right\}$ does not contain any multiples of 4, what conditions should $a$ satisfy?
