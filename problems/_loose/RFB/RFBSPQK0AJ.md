---
tag: RFBSPQK0AJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=434
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 75th Romanian Mathematical Olympiad
---
a) Let $a, b \in \mathbb{R}$ be two real numbers, with $a < b$, and $f : [a, b] \to \mathbb{R}$ a strict monotone function such that $\int_a^b f(x) dx = 0$. Show that $f(a) \cdot f(b) < 0$.

b) Determine the convergent sequences $(a_n)_{n \ge 1}$ of real numbers, for which there is a strict monotone function $f : \mathbb{R} \to \mathbb{R}$ such that
$$
\int_{a_{n-1}}^{a_n} f(x) dx = \int_{a_n}^{a_{n+1}} f(x) dx, \text{for any } n \in \mathbb{N}, n \ge 2.
$$
