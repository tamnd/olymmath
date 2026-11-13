---
tag: D9Y2KRQ2XK
kind: problem
type: answer
answer: All even three-digit numbers except 128 and 512 (448 total).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=246
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-spring
    source: hf-mathnet
    label: Bulgaria Bulgarian Spring Tournament
---
A three-digit natural number $n$ is initially written on the board. Two players, $A$ and $B$, take turns, with $A$ going first. The turner reduces the number on the board by some divisor of his own (i.e., other than $1$ and the number itself). For example, if at some point the number on the board is $6$, it can be reduced by $2$, then the number on the board will now be $4$. Whoever cannot make a move loses, and the other wins. Player $A$ is known to have a way to win as well as player $B$. What are all the possible $n$?
(Ivaylo Kortezov)
