---
tag: WNZXJ70YVN
kind: problem
type: answer
answer: A=1,B=3,C=5,D=7,E=8,F=9,H=6,J=4,K=2,L=0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=41074
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alphanumeric puzzle. This puzzle is not difficult to solve with the right approach:

$$
\begin{array}{llll}
A \times B=B, & B \times C=AC, & C \times D=BC, & D \times E=CH \\
E \times F=DK, & F \times H=CJ, & H \times J=KJ, & J \times K=E \\
& K \times L=L, & A \times L=L .
\end{array}
$$[^8]

Each letter represents its own digit, and of course, $AC, BC$, etc., are two-digit numbers. Can you determine which digit corresponds to each letter?
