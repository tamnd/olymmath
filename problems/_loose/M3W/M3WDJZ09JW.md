---
tag: M3WDJZ09JW
kind: problem
type: answer
answer: "8320"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181621
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alberto and Barbara are sitting next to each other in front of a table on which they have arranged in a row, from left to right, 15 chocolates. Some of the chocolates are milk, and the others are dark. Taking turns, starting with Alberto, they play the following game: during their turn, each of them must eat a strictly positive number of consecutive chocolates, always starting from the leftmost of those remaining and ensuring that the number of chocolates of the same type as the first one is odd (for example, if at a certain turn the sequence of remaining chocolates is LLFLF, where L stands for milk and F for dark, the player whose turn it is can eat the first chocolate from the left, the first 4 from the left, or all 5 chocolates).

The player who eats the last chocolate wins.

Among the $2^{15}$ possible initial sequences of the flavors of the chocolates, how many are those for which Barbara has a winning strategy?
