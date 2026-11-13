---
tag: 6F7BPET07E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80218
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $F_{n}$ be the Fibonacci sequence: $F_{0}=0, F_{1}=1$ and for any positive integer $n, F_{n+2}=F_{n+1}+F_{n}$. We define the polynomial $P_{n}$ of degree $n$ whose coefficients are the terms of the Fibonacci sequence:

$$
P_{n}(X)=F_{1} X^{n}+F_{2} X^{n-1}+\cdots+F_{n} X+F_{n+1}=\sum_{k=0}^{n} F_{k+1} X^{n-k}
$$

Determine the number of real roots of $P_{n}$ in terms of $n$.

Solved by Gaëtan Dautzenberg and Georges Tézé
