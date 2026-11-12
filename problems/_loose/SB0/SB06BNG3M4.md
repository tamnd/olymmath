---
tag: SB06BNG3M4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33909
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $Y=A X+b$, where $X=\left(X_{1}, \ldots, X_{n}\right), Y=\left(Y_{1}, \ldots, Y_{n}\right)$, matrix $A$ of order $n \times n$ is such that $|\operatorname{det} A|>0$, and $b$ is an $n$-dimensional vector. Show that

$$
f_{Y}(y)=\frac{1}{|\operatorname{det} A|} f_{X}\left(A^{-1}(y-b)\right)
$$
