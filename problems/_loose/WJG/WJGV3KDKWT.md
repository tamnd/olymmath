---
tag: WJGV3KDKWT
kind: problem
type: answer
answer: "608"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=200636
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The following analog clock has two hands that can move independently of each other.

Initially, both hands point to the number $12$. The clock performs a sequence of hand movements so that on each movement, one of the two hands moves clockwise to the next number on the clock face while the other hand does not move.
Let $N$ be the number of sequences of $144$ hand movements such that during the sequence, every possible positioning of the hands appears exactly once, and at the end of the $144$ movements, the hands have returned to their initial position. Find the remainder when $N$ is divided by $1000$.
