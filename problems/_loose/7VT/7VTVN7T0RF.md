---
tag: 7VTVN7T0RF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=112
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice and Bob play a game on a $1 \times m$ board using $2012$ cards numbered from $1$ through $2012$. At each step, Alice chooses a card and Bob places it on an empty square of the board. Bob wins the game when numbers on the cards on the board are in an increasing order after $k$ steps where $1 \leq k \leq 2012$, otherwise Alice wins. Find all pairs $(k, m)$ for which Bob can guarantee to win the game.
