---
tag: PWMYDXSCYX
kind: problem
type: answer
answer: (3,5)or(8,13)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144311
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are two piles of stones, one with 11 stones and the other with 13 stones, denoted as $(11,13)$. Two players, A and B, take turns to remove stones, following these rules: one can take any number of stones from one pile or the same number of stones from both piles, but must take at least one stone. The player who takes the last stone wins. Now, A goes first. When A first takes to $(\ldots)$, A is guaranteed to win.
