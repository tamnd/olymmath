---
tag: D91TEBY5Q9
kind: problem
type: answer
answer: "No"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=133
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Player A and B play a painful game on the real line. Player A has a pot of paint with four units of black ink. A quantity $p$ of this ink suffices to blacken a (closed) real interval of length $p$. In every round, player A picks some positive integer $m$ and provides $\frac{1}{2^m}$ units of ink from the pot. Player B then picks an integer $k$ and blackens the interval from $\frac{k}{2^m}$ to $\frac{k+1}{2^m}$ (some parts of this interval may have been blackened before.) The goal of player A is to reach a situation where the pot is empty and the interval $[0, 1]$ is not completely blackened.
Decide whether there exists a strategy for player A to win in a finite number of moves.
