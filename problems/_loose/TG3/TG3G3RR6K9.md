---
tag: TG3G3RR6K9
kind: problem
type: answer
answer: 1,4,5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56715
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The game "Nim". There are several piles of stones. Two players take stones from them in turns. In one move, it is allowed to take any (non-zero) number of stones, but only from one pile. The player who takes the last stone wins. For the analysis of the game, each set of piles of stones $m_{1}, m_{2}, \ldots, m_{1}$ is assigned its nim sum $(\underline{5.1})$.

a) Prove that if a player makes a move from a position with a zero nim sum, the result is a position with
b) Prove that from a position with a non-zero nim sum, it is always possible to make a move to a position with a nim sum $n=0$.

c) Describe the winning strategy in the game "Nim".

d) What move should be made if you have three piles: 3, 4, and 5 stones?
