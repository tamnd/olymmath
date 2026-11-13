---
tag: FZW64DZK4N
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90944
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=97
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the $O-E$ game, a round starts with player $A$ paying $c$ cents to player $B$. Then $A$ secretly arranges the numbers $1,3,5,7,9,11,13$ in some order as a sequence $a_{1}, a_{2}, \ldots, a_{7}$, and $B$ secretly arranges $2,4,6,8,10,12,14$ as a sequence $b_{1}, b_{2}, \ldots, b_{7}$. Finally, the players show their sequences and $B$ pays $A$ one cent for each $i$ in $X=\{1,2,3,4,5,6,7\}$ such that $a_{i}<b_{i}$. This finishes the round. What number $c$ would make the game fair? (The game is fair if the total payments by $A$ to $B$ equals the total payments by $B$ to $A$ after all possible distinct rounds are played exactly once.)
