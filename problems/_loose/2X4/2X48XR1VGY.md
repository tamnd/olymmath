---
tag: 2X48XR1VGY
kind: problem
type: answer
answer: (x, y, z)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220871
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all triples $(x, y, z)$ of non-zero numbers such that
$$
xy(x + y) = yz(y + z) = zx(z + x).
$$
