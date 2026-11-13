---
tag: Q9CMQ9SD9J
kind: problem
type: answer
answer: "1998"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128083
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $k$, find the greatest common divisor $d$ of all positive even integers $x$ that satisfy the following conditions:
(1) $\frac{x+2}{k}$ and $\frac{x}{k}$ are both integers, and the difference in the number of digits of these two numbers equals the difference between these two numbers;
(2) The product of the digits of $\frac{x}{k}$ is a perfect cube.
