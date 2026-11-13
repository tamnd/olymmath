---
tag: Z9HDBNNXWW
kind: problem
type: answer
answer: a) n = 1. b) All n not congruent to 2 modulo 4; equivalently, n ≡ 0, 1, or 3 (mod 4).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=192
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Player Zero and player One play a game on an $n \times n$-board ($n \ge 1$). The columns of this $n \times n$-board are numbered by powers of two, so we have column 1, column 2, column 4 through column $2^{n-1}$. Alternately, players put their own number (i.e. Zero a 0 and One a 1) in one of the empty squares. Player Zero starts. When the board is full, the game ends and a (reverse binary) number is created in each row by adding the values of the boxes with a 1 in them. So if $n = 4$, then a row with 0101 contains the number $0 \cdot 1 + 1 \cdot 2 + 0 \cdot 4 + 1 \cdot 8 = 10$.

a) For which natural numbers $n$ can player One always ensure that at least one of the rows is divisible by 4?

b) And for which natural numbers $n$ can player One always ensure that at least one of the rows is divisible by 3?
