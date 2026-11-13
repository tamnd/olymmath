---
tag: 80ZX1SP0GB
kind: problem
type: answer
answer: "31"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116144
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of solutions to $\sin x=\lg x$.
Analysis This is a transcendental equation, which cannot be solved using elementary methods (thus making it impossible to determine the number of solutions directly).
Let $y_{1}=\sin x=f_{1}(x), y_{2}=\lg x=f_{2}(x)$, then the number of solutions to the original equation is converted to the number of intersection points of the graphs of the two functions $f_{1}(x)$ and $f_{2}(x)$. The discussion of the existence and number of intersection points within a certain range relies on the algebraic analysis of the properties of the functions.
