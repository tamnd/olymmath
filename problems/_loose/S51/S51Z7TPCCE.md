---
tag: S51Z7TPCCE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=20
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia 45th Mongolian Mathematical Olympiad
---
Let $f(x)$ be a polynomial with integer coefficients, which has no multiple roots and $\deg f \ge 1$. Prove that for every positive integer $k$,
$$
P_k(f) = |\{p \in \mathbb{P} \mid \mathrm{ord}_p(f(x)) = k, \exists x \in \mathbb{Z}\}| = \infty.
$$
(proposed by G. Batzaya)
