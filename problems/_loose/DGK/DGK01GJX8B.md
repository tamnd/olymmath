---
tag: DGK01GJX8B
kind: problem
type: answer
answer: (x,y)=(102,72)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8991
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
When establishing a connection between computers A and B, the following variant of the so-called "handshake procedure" is used: 1) A selects a natural number $x$, not greater than 5250, and sends B the value of the function $F(x)$, and then B sends A the number $F(x+1)$; 2) now B selects a natural number $y$, not greater than 5250, and sends A the number $F(y)$, and A responds with $F(y+1)$. In this case, $F(t)=r_{\text{525}}\left(t^{3}\right)$, where $r_{\text{5251}}(t)$ is the remainder of the integer $t$ divided by 5251. Find the numbers $x$ and $y$ if the numbers observed in the network sequentially are: 506, 519, 229, and 231. Note: it is known that computers A and B implement a procedure for solving the equation $r_{\text{5251}}\left(x^{3}\right)=a$, where $x$ is an unknown integer, $0 \leq x \leq 5250$, and the number 5251 is chosen such that this equation has a unique solution.
