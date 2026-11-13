---
tag: KN4JAZXAEP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227502
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a four-digit number $\overline{abcd}$ , which starts at $a$ and ends at $d$, is *interchangeable * if there is an integer $n >1$ such that $n \times \overline{abcd}$ is a four-digit number that begins with $d$ and ends with $a$. For example, $1009$ is interchangeable since $1009\times 9=9081$. Find the largest interchangeable number.
