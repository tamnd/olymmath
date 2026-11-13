---
tag: G0P1P45HDB
kind: problem
type: answer
answer: s = 0 and s = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0002.parquet#row=80
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil Brazilian Math Olympiad
---
In this problem, a *box* is a parallelepiped $P \in \mathbb{R}^3$. We define the *size* of a box $P$ as $a^s + b^s + c^s$, $a, b, c$ being its dimensions and $s$ a fixed integer.
Find all values of $s$ such that the following statement is true: if a box $P_1$ is inside box $P_0$ then the size of $P_1$ does not exceed size of box $P_0$.
*The boxes are allowed to be in any position; in particular, they need not to have its edges parallel to the axes.*
