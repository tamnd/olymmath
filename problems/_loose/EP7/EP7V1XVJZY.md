---
tag: EP7V1XVJZY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111592
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are several piles of stones, where the $i$-th pile contains $n_{i}\left(n_{i} \geqslant 1\right)$ stones $(i=1,2, \cdots, k)$. Two players take turns to play the following game: choose one of the piles, permanently remove some stones from it (at least one), and then redistribute the remaining stones (if any) to other piles or keep them in the same pile. If a pile has no stones left, no more stones can be added to that pile. The player who removes the last pile wins. Try to find a winning strategy. Specifically, determine the positive integer tuple $\left(n_{1}, n_{2}, \cdots, n_{k}\right)$ such that the first or second player wins.
（2007 Taiwan Mathematical Olympiad Selection Exam Problem）
