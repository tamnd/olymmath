---
tag: 3B4P1PD6ZT
kind: problem
type: answer
answer: 2^{k}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56054
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a grid strip (one cell wide), infinite in both directions. Two cells of the strip are traps, with $-N$ cells between them, one of which is occupied by a grasshopper. On each move, we call out a natural number, after which the grasshopper jumps that number of cells to the left or right (at its choice). For which $N$ can we call out numbers such that we can guarantee to drive the grasshopper into one of the traps, no matter where it initially is between the traps and how it chooses the directions of its jumps? (We always see where the grasshopper is sitting.)
