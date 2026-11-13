---
tag: YSNY9CQZS2
kind: problem
type: answer
answer: "213"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267196
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Yatta and Yogi play a game in which they begin with a pile of $n$ stones. The players take turns removing $1$, $2$, $3$, $5$, $6$, $7$, or $8$ stones from the pile. That is, when it is a player's turn to remove stones, that player may remove from $1$ to $8$ stones, but *cannot* remove exactly $4$ stones. The player who removes the last stone *loses*. Yogi goes first and finds that he has a winning position, meaning that so long as he plays perfectly, Yatta cannot defeat him. For how many positive integers $n$ from $100$ to $2008$ inclusive is this the case?
