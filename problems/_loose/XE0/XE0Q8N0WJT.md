---
tag: XE0Q8N0WJT
kind: problem
type: answer
answer: A wins if and only if n ≡ 0 or 3 (mod 4); otherwise B wins.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=26
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina Mathematical Olympiad Rioplatense
---
Players $A$ and $B$ play a game as follows. Initially $A$ arranges the numbers $1, 2, \dots, n$ in a row as he wishes; $n$ is a given positive integer. Next, $B$ chooses one number and puts a stone on it. Then $A$ moves the stone to an adjacent number, $B$ does the same and so on. The stone can be placed on number $k$ at most $k$ times, $k = 1, \dots, n$; the initial move of $B$ is counted. The one who cannot move loses. For each $n$ determine who has a winning strategy.
