---
tag: 7B2AAQRDEM
kind: problem
type: answer
answer: (x, y) = (0, \pm 1), (\pm 1, 0), (\pm 4, \pm 3), (\pm 1, \mp 1), (0, 0)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254695
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of relatively prime integers $(x, y)$ that satisfy equality $2 (x^3 - x) = 5 (y^3 - y)$.
