---
tag: 15JQNCKY01
kind: problem
type: answer
answer: "17"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=317
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-gmo/2024
    source: hf-mathnet
    label: China 2024 CGMO
---
There are 8 cards on the table numbered from 1 to 8. Two players, $A$ and $B$, play the following game. In each round:

* Player $A$ selects two cards from the table
* Player $B$, after seeing the two selected cards, chooses one to keep and discards the other

The game consists of four rounds with the restriction that:

* In rounds 1 and 2, $B$ cannot choose the larger number in both rounds
* In rounds 3 and 4, $B$ cannot choose the larger number in both rounds

Let $S$ be the sum of the numbers on the four cards $B$ holds after four rounds.

Find the largest integer $N$ such that no matter how $A$ selects cards in each round, $B$ can guarantee $S \ge N$.
