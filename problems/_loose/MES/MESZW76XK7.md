---
tag: MESZW76XK7
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242604
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$2023$ players participated in a tennis tournament, and any two players played exactly one match. There was no draw in any match, and no player won all the other players. If a player $A$ satisfies the following condition, let $A$ be "skilled player".

**(Condition)** For each player $B$ who won $A$, there is a player $C$ who won $B$ and lost to $A$.

It turned out there are exactly $N(\geq 0)$ skilled player. Find the minimum value of $N$.
