---
tag: 5VZVMZWTH3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=338
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
Given a polynomial $P(x) = a_{n} x^{n} + a_{n-1} x^{n-1} + \cdots + a_{1} x + a_{0}$ of real coefficients. Suppose that $P(x)$ has $n$ real roots (not necessarily distinct), and there exists a positive integer $k$ such that $a_{k} = a_{k-1} = 0$. Prove that $P(x)$ has a real root of multiplicity $k+1$.

(Note: we call a real number $x_{0}$ a root of multiplicity $s$ of a polynomial $R(x)$ of real coefficients if there exists a polynomial $Q(x)$ such that $R(x) = (x - x_{0})^{s} Q(x)$ and $Q(x_{0}) \neq 0$.)
