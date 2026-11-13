---
tag: SARATQT26S
kind: problem
type: answer
answer: x_n = y_n^2 + (y_n + 1)^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251287
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\{x_n\}$ is given by
$$x_n=\frac14\left(\left(2+\sqrt3\right)^{2n-1}+\left(2-\sqrt3\right)^{2n-1}\right), n\in\mathbb N.$$Prove that each $x_n$ is equal to the sum of squares of two consecutive integers.
