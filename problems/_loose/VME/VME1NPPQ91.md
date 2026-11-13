---
tag: VME1NPPQ91
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162781
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0001.parquet#row=90
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo
    source: hf-mathnet
    label: Slovenia National Math Olympiad in Slovenia
---
On the table, there are three piles of tokens: one with $a$ tokens, one with $b$ tokens, and one with $c$ tokens, where $a \geq b \geq c > 0$. Players $A$ and $B$ take turns moving tokens. Player $A$ starts. In each move, a player first selects two piles and then moves at least one token from the pile with fewer tokens to the pile with more tokens. If the selected piles have the same number of tokens, the player moves at least one token from either pile to the other. The player who, after their move, has all the tokens in one pile wins. Determine who has a winning strategy, depending on $a$, $b$, and $c$.
