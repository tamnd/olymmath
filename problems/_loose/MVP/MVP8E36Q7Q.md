---
tag: MVP8E36Q7Q
kind: problem
type: answer
answer: "2016"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78238
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the smallest integer $N$ such that one can find 125 distinct integers $a_{1}, a_{2}, \ldots, a_{125}$ in a line so that:

(1) each of these integers is strictly positive, and less than or equal to $N$;

(2) each of the 123 integers $a_{2}, \ldots, a_{124}$ is strictly greater than the arithmetic mean of the integer written to its left and the integer written to its right.

N.B. The arithmetic mean of $a$ and $b$ is the number $\frac{a+b}{2}$.
