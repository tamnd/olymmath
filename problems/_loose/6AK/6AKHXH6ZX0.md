---
tag: 6AKHXH6ZX0
kind: problem
type: answer
answer: A=3,B=6,C=4,D=1,E=2,F=9
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166614
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's determine the distinct digits $A, B, C, D, E, F$ such that the following equalities hold:

$$
\begin{aligned}
& A B C^{2}=D A E C F B \text { and } \\
& C B A^{2}=E D C A B F
\end{aligned}
$$
