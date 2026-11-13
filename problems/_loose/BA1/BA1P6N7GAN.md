---
tag: BA1P6N7GAN
kind: problem
type: answer
answer: (0, -4), (0, 8), (-2, 0), (-4, 8), (-2, 0), (-6, 6), (0, 0), (-10, 4)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231856
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all pairs of integer numbers $(x, y)$ such that:
$$\frac{(x - y)^2}{x + y} = x - y + 6$$
