---
tag: WJ6RT7QXG8
kind: problem
type: answer
answer: "278"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9008
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
When establishing a TCP/IP connection between computers $\mathbf{A}$ and $\mathbf{B}$, a so-called "handshake procedure" is used: 1) $\mathbf{A}$ selects a natural number $x$, no greater than 5028, and transmits the value of the function $F(x)$ to $\mathbf{B}$, who responds to $\mathbf{A}$ with the number $F(x+1)$; 2) $\mathbf{B}$ selects a natural number $y$, no greater than 5028, and transmits the number $F(y)$ to $\mathbf{A}$, who responds to $\mathbf{B}$ with the number $F(y+1)$. The value of the function $F$ is the remainder of the argument raised to the third power divided by 5029. Find the sum of the numbers $x$ and $y$ if the numbers observed in the network sequentially were: $4258, 4385, 2243$, and 2279.

Note: The number 5029 is chosen such that the argument is uniquely determined by the value of the function $F$.
