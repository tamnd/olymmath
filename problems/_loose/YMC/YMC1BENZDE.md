---
tag: YMC1BENZDE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263853
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that the 32 computers in a certain network are numbered with the 5-bit integers $00000, 00001, 00010, ..., 11111$ (bit is short for binary digit). Suppose that there is a one-way connection from computer $A$ to computer $B$ if and only if $A$ and $B$ share four of their bits with the remaining bit being $0$ at $A$ and $1$ at $B$. (For example, $10101$ can send messages to $11101$ and to $10111$.) We say that a computer is at level $k$ in the network if it has exactly $k$ 1's in its label $(k = 0, 1, 2, ..., 5)$. Suppose further that we know that $12$ computers, three at each of the levels $1$, $2$, $3$, and $4$, are malfunctioning, but we do not know which ones. Can we still be sure that we can send a message from $00000$ to $11111$?
