---
tag: 37EBH6NVQE
kind: problem
type: answer
answer: 2^{n}(n!)^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \in \mathbf{Z}_{+}$. A volleyball team has $n$ male players and $n$ female players. Initially, each player is assigned to one of the positions numbered $1,2, \cdots, 2 n$, with only positions 1 and $n+1$ being outside the court. During the game, position swaps occur, and each swap involves moving the player in position $i(i=1,2, \cdots, 2 n)$ to position $i+1$, where position $2 n+1$ is the same as position 1. How many different initial allocation methods are there such that, regardless of how many rounds of swapping occur, at least $n-1$ female players are on the court?
