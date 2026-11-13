---
tag: PTVTD7HC4G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90060
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Ten tokens are arranged in a circle. Each token is white on one side and black on the other. At the beginning, all tokens are facing the white side. The allowed moves are:

- flipping any four consecutive tokens,
- in any sequence of five consecutive tokens, flipping all except the middle token.

Can a sequence of allowed moves achieve the following:

(a) exactly one token is flipped to the black side?

(b) exactly two tokens are flipped to the black side, and there is exactly one token between these two tokens?

(c) exactly two tokens are flipped to the black side, and these two tokens are consecutive?
