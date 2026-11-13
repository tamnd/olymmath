---
tag: FGDPD4C68P
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84296
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Seven cases of a chessboard $(8 \times 8)$ are on fire. At each step, a case catches fire if at least two of its neighbors (by a side, not a corner) are on fire. Is it possible for the fire to spread everywhere? If not, how many cases initially on fire are needed at a minimum for the fire to be able to spread everywhere?
