---
tag: BV4KR2NZWY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=1
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania Romanian Mathematical Olympiad
---
Consider $a, b \in \mathbb{N}^*$. Define the sequence $(x_n)_{n \in \mathbb{N}}$ by $x_0 = 0, x_1 = 1$ and
$$
x_{n+2} = a x_{n+1} + b x_n, \forall n \in \mathbb{N}
$$
and the matrix $A$, by
$$
A = \begin{bmatrix} a & b \\ 1 & 0 \end{bmatrix}.
$$

a) Prove that
$$
A^n = \begin{bmatrix} x_{n+1} & b x_n \\ x_n & b x_{n-1} \end{bmatrix}, \forall n \in \mathbb{N}^*.
$$
