---
tag: 58FAG9YCXR
kind: problem
type: answer
answer: n = 2d + 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=247
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina Rioplatense Mathematical Olympiad
---
Let $n > d > 0$ be integers. Ana, Beto and Carlitos play *blind man's bluff* over an infinite grid. Initially, Ana and Carlitos are in cells at distance $n$, and there is a candy in a cell which is at distance $d$ from Carlitos. Carlitos is blindfolded and can only see his own cell, whereas Ana and Beto can see the whole grid. Two movements are performed alternately.
1. Carlitos moves to an adjacent cell. If he finds Ana there, Carlitos loses. If he finds the candy, but not Ana, Carlitos wins. If the cell was empty, Beto shouts "hot" or "cold", at his discretion.
2. Ana moves to an adjacent cell. If she finds Carlitos or the candy, Ana wins. Otherwise, the game continues.
Find, for each $d$, the least $n$ such that Beto and Carlitos can coordinate a strategy to ensure Carlitos' victory, regardless of the initial positions of Ana, Carlitos, and the candy.

*Remark:* Two cells are adjacent if they share a common side. The distance between cells $X$ and $Y$ is the least $p$ for which there is a sequence of cells $X = X_0, X_1, \dots, X_p = Y$ such that $X_i$ is adjacent to $X_{i-1}$ for all $i = 1, \dots, p$.
