---
tag: 2DDZDY9X71
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=137
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc/2012
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabia Mathematical Competitions 2012
---
Let $P$ be a polynomial with real coefficients and odd degree. Suppose that the number of real solutions to
$$
P(P(x)) = P(x), P(x) \neq x
$$
is finite and odd. Show that there exists a real $c$ such that $P(c) = c$ and the polynomial $P(x) - c$ has a real root of multiplicity at least two. (That is, it is divisible by $(x - r)^2$ for some real $r$.)
