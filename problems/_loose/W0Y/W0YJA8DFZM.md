---
tag: W0YJA8DFZM
kind: problem
type: answer
answer: \frac{n(n+1)}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87725
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of $n$ white and $n$ black tiles is arranged such that black and white tiles alternate, starting with a white tile. The goal is to rearrange the tiles so that all black tiles are together at the beginning of the sequence, and all white tiles are at the end. The only allowed move is to swap adjacent tiles. What is the minimum number of such swaps needed to achieve the goal?
