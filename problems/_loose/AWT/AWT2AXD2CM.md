---
tag: AWT2AXD2CM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204499
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A, B play a game. In the beginning, they write the numbers $2,3,\ldots,50$ on the blackboard, and fix a non-empty subsets $S$ of $\{2,3,\ldots,50\}$. Then, A erase all numbers in $S$ on the blackboard. From now on, they start with B and take turns doing the following:
- Choose one or more integer(s), such that any of them is not coprime with any number erased in the opponent's last turn. Then erase this nunber or these numbers on the blackboard.
If someone cannot choose at least one number and erase it, the game is over. This people loses and his opponent wins.
How many $S$ are there, in which A always has a strategy to win, regardless of B's actions?
