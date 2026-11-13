---
tag: GEFB8X1R3V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80599
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A squirrel has 2021 nuts arranged in a circle and numbered from 1 to 2021 in an arbitrary order. It applies a sequence of 2021 moves. At the $k$-th move, it swaps the positions of the two nuts adjacent to the one numbered $k$.

Show that there exists a value of $k$ such that the $k$-th move swaps two nuts $a$ and $b$ such that $a<k<b$.
