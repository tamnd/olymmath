---
tag: MFZBWAJDPW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179542
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the matrix $A=\left(\begin{array}{ll}0 & 1 \\ 1 & 1\end{array}\right)$ and the sequence $\left(x_{n}\right)_{n \geq 0}$ defined by $x_{n+2}=x_{n+1}+x_{n}, n \in N, x_{0}=0, x_{1}=1$

a) Show that $A^{n}=\left(\begin{array}{cc}x_{n-1} & x_{n} \\ x_{n} & x_{n+1}\end{array}\right)$, for any $n \in N^{*}$.

b) Show, using part a) if necessary, that $x_{n+1} x_{n-1}-x_{n}^{2}=(-1)^{n}$, for any $n \in N^{*}$.
