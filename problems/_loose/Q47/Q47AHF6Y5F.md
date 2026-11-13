---
tag: Q47AHF6Y5F
kind: problem
type: answer
answer: "100"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=170883
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call a place every point $(x, y)$ in the plane for which $x$ and $y$ are positive integers, each less than or equal to 20.

Initially, all 400 places are free. Anna and Balázs take turns placing tokens on the places, with Anna starting. On each of her turns, Anna places a new red token on a still free place in such a way that the distance between no two red tokens is equal to $\sqrt{5}$. On each of his turns, Balázs places a new blue token on a still free place. (The distance from a place occupied by a blue token to any other occupied place can be arbitrary.) The game ends when one of the players cannot make a move.

Determine the largest value of $K$ for which it is true that Anna can definitely place $K$ red tokens, no matter how Balázs plays.
