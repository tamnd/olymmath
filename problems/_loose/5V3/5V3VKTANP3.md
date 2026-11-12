---
tag: 5V3VKTANP3
kind: problem
type: answer
answer: \frac{100!}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=21027
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a vertical row, numbers from 1 to 100 are written in ascending order. Between them, fractional bars of different sizes are inserted. The calculation starts with the smallest fractional bar and ends with the largest one, for example, $\frac{1}{\frac{5}{3}}=\frac{15}{4}$.

What is the maximum value that the resulting fraction can have?
