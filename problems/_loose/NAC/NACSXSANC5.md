---
tag: NACSXSANC5
kind: problem
type: answer
answer: "2000998"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253836
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$x_{n+1}= \left ( 1+\frac2n \right )x_n+\frac4n$, for every positive integer $n$. If $x_1=-1$, what is $x_{2000}$?

$ \textbf{(A)}\ 1999998
\textbf{(B)}\ 2000998
\textbf{(C)}\ 2009998
\textbf{(D)}\ 2000008
\textbf{(E)}\ 1999999
$
