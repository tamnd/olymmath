---
tag: K4S907ZTPC
kind: problem
type: answer
answer: (x, y) = (0, 0) \text{ and } \left(\frac{1}{2}, \frac{1}{2}\right)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242977
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of real numbers $(x, y)$ for which the inequality $y^2 + y + \sqrt{y - x^2 -xy} \le 3xy$ holds.
