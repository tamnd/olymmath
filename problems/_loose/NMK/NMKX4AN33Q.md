---
tag: NMKX4AN33Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231647
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider an infinite strip, divided into unit squares. A finite number of nuts is placed in some of these squares. In a step, we choose a square $A$ which has more than one nut and take one of them and put it on the square on the right, take another nut (from $A$) and put it on the square on the left. The procedure ends when all squares has at most one nut. Prove that, given the initial configuration, any procedure one takes will end after the same number of steps and with the same final configuration.
