---
tag: GT43WK2CD4
kind: problem
type: answer
answer: "89"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141816
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice has two boxes $A$ and $B$. Initially box $A$ contains $n$ coins and box $B$ is empty. On each turn, she may either move a coin from box $A$ to box $B$, or remove $k$ coins from box $A$, where $k$ is the current number of coins in box $B$. She wins when box $A$ is empty.
(a) If initially box $A$ contains 6 coins, show that Alice can win in 4 turns.
(b) If initially box $A$ contains 31 coins, show that Alice cannot win in 10 turns.
(c) What is the minimum number of turns needed for Alice to win if box $A$ initially contains 2018 coins?
