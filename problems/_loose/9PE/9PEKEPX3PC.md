---
tag: 9PEKEPX3PC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=75
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
The equation $P(x) = Q(y)$ is called **interesting** if both $P$ and $Q$ are polynomials with integer coefficients and degree at least one and the equation has infinitely many solutions in natural numbers. We say that equation $F(x) = G(y)$ **results** from equation $P(x) = Q(y)$, if polynomial $R$ with rational coefficients exists such that $F(x) = R(P(x))$ and $G(y) = R(Q(y))$.

a) Suppose that $S$ is an infinite subset of the set $N \times N$. We say that $S$ **satisfies** the interesting equation $P(x) = Q(y)$, if each element of it satisfies this equation. Prove that an interesting equation $P_o(x) = Q_o(y)$ exists such that every equation that is satisfied by $S$ (if any), has resulted from the equation $P_o(x) = Q_o(y)$.

b) The degree of an interesting equation is defined as the largest degree between the degrees of both $P$ and $Q$. We call an interesting equation **primitive** if it is not resulted from any other interesting equation with a lesser degree. Prove that if $P(x) = Q(y)$ is a primitive interesting equation and both $P$ and $Q$ are monadic polynomials, then the degrees of $P$ and $Q$ are coprime natural numbers.
