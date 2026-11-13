---
tag: 78Y1FVZMY3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77867
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a circle are placed 2 n pieces, each with one white side and one black side. In the initial state, they are all white side up except one which is black side up. The following operations are allowed:

- Choose two adjacent pieces of the same color and flip them both.
- Choose two pieces spaced one piece apart, and of different colors, and flip them both. Is it possible to reach, after a certain number of these operations, the configuration where the pieces all display the side of the opposite color to their initial color?
