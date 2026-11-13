---
tag: SA6EFSP6SC
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=76
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus 66th Belarusian Mathematical Olympiad
---
Let polynomials $P(x)$ and $Q(x)$ have the same degree. Let $P_Q(x)$ denote the polynomial such that its coefficients of even degree variables coincide with the corresponding coefficients of $P(x)$ and its coefficients of odd degree variables coincide with the corresponding coefficients of $Q(x)$. (For example, if $P(x) = x^3 + 2x^2 + 4x + 1$ and $Q(x) = 3x^3 + x^2 + 2$, then $P_Q(x) = 3x^3 + 2x^2 + 1$, and $Q_P(x) = x^3 + x^2 + 4x + 2$.)

a) Prove that there exist $P(x)$ and $Q(x)$ such that they have no real roots but both $P_Q(x)$ and $Q_P(x)$ have at least one real root.

b) Find the smallest degree of $P(x)$ and $Q(x)$ satisfying a).
