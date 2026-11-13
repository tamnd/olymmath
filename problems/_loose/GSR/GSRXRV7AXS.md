---
tag: GSRXRV7AXS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98332
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two integer sequences $\left\{a_{n}\right\}$ and $\left\{b_{n}\right\}$ satisfy the equation
$$
\begin{array}{l}
\left(a_{n}-a_{n-1}\right)\left(a_{n}-a_{n-2}\right)+ \\
\left(b_{n}-b_{n-1}\right)\left(b_{n}-b_{n-2}\right)=0,
\end{array}
$$

where $n=3,4, \cdots$. Prove: there exists a positive integer $k$, such that
$$
a_{k}+b_{k}=a_{k+2018}+b_{k+2018} \text {. }
$$
