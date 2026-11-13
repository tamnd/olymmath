---
tag: C8BZSFQETQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95449
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a "position" as a point $(x, y)$ on a Cartesian plane, where $x$ and $y$ are positive integers not exceeding 20. Initially, all 400 positions are empty. Two players, A and B, take turns placing stones, with A starting first. Each time it is A's turn, he places a new red stone on an empty position, with the requirement that the distance between any two red stones is not equal to $\sqrt{5}$. Each time it is B's turn, he places a new blue stone on any empty position (the distance between the blue stone and other stones can be any value). This continues until one of the players can no longer place a stone. Determine the largest integer $K$ such that, regardless of how B places the blue stones, A can always ensure placing at least $K$ red stones.
