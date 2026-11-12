---
tag: P6EM0ECP7K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29406
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a non-increasing sequence $a_{1}$, $a_{2}, \ldots, a_{n}$ of positive numbers, the sum of which is 1, and the largest of which is $\frac{1}{2 k}$, where $k$ is an integer:

$\cdot \frac{1}{2 k}=a_{1} \geqslant a_{2} \geqslant a_{3} \geqslant \ldots \geqslant a_{n}>0, a_{1}+a_{2}+\ldots+a_{n}=1$.

Prove that from these numbers, one can select $k$ numbers such that the smallest of them is greater than half of the largest.
