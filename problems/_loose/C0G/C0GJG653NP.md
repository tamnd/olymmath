---
tag: C0GJG653NP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Miklós Schweitzer
    url: https://artofproblemsolving.com/community/c6h2965900
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42045
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: schweitzer/2022
    source: hf-ai-mo-aops
    label: 2022 Miklós Schweitzer
---
Original in Hungarian; translated with Google translate; polished by myself.

Let $n$ be a positive integer. Suppose that the sum of the matrices $A_1, \dots, A_n\in \Bbb R^{n\times n}$ is the identity matrix, but $\sum\nolimits_{i = 1}^n\alpha_i A_i$ is singular whenever at least one of the coefficients $\alpha_i \in \Bbb R$ is zero.
a) Show that $\sum\nolimits_{i = 1}^n\alpha_i A_i$ is nonsingular if $\alpha_i\neq 0$ for all $i$ .
b) Show that if the matrices $A_i$ are symmetric, then all of them have rank $1$ .
