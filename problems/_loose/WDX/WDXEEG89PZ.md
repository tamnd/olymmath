---
tag: WDXEEG89PZ
kind: problem
type: answer
answer: "999"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267116
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the game of *Winners Make Zeros*, a pair of positive integers $(m,n)$ is written on a sheet of paper. Then the game begins, as the players make the following legal moves:

- If $m\geq n$, the player choose a positive integer $c$ such that $m-cn\geq 0$, and replaces $(m,n)$ with $(m-cn,n)$.

- If $m<n$, the player choose a positive integer $c$ such that $n-cm\geq 0$, and replaces $(m,n)$ with $(m,n-cm)$.

When $m$ or $n$ becomes $0$, the game ends, and the last player to have moved is declared the winner. If $m$ and $n$ are originally $2007777$ and $2007$, find the largest choice the first player can make for $c$ (on his first move) such that the first player has a winning strategy after that first move.
