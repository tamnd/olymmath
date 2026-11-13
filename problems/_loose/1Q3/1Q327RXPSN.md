---
tag: 1Q327RXPSN
kind: problem
type: answer
answer: k = 64
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244462
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a board there are written the integers from $1$ to $119$. Two players, $A$ and $B$, make a move by turn. A $move$ consists in erasing $9$ numbers from the board. The player after whose move two numbers remain on the board wins and his score is equal with the positive difference of the two remaining numbers. The player $A$ makes the first move. Find the highest integer $k$, such that the player $A$ can be sure that his score is not smaller than $k$.
