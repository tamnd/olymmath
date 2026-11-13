---
tag: Z75NEE36XA
kind: problem
type: answer
answer: f_{n}=\frac{1}{2}(7\cdot8^{n-1}+9\cdot10^{n-1})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105445
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of n-digit positive integers that contain an even number of 5s.
Analysis: Start by analyzing the structure of n-digit decimal numbers that contain an even number of 5s. Let $d=d_{1} d_{2} \cdots d_{n-1} d_{n}$. If $d_{1}, d_{2}, \cdots, d_{n-1}$ contain an even number of 5s, then $d_{n}$ can take any one of the numbers 0, 1, 2, 3, 4, 6, 7, 8, 9 (excluding 5), making $d$ an n-digit decimal number with an even number of 5s; if $d_{1}, d_{2}, \cdots, d_{n-1}$ contain an odd number of 5s, then taking $d_{n}=5$ makes $d$ an n-digit decimal number with an even number of 5s.
