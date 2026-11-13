---
tag: XBVE9TEF3R
kind: problem
appearances:
  - at: pumac/2021/aa8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2021_Algebra_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2834911
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73316
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence of Fibonacci numbers $F_0, F_1, F_2, ... $ , given by $F_0 = F_1= 1$ and $F_{n+1} =F_n + F_{n-1}$ for $n\ge 1$ . Define the sequence $x_0, x_1, x_2, ....$ by $x_0 = 1$ and $x_{k+1} = x^2_k + F^2_{2^k}$ for $k \ge 0$ . Define the sequence $y_0, y_1, y_2, ...$ by $y_0 = 1$ and $y_{k+1} = 2x_ky_k - y^2_k$ for $k \ge 0$ . If $$ \sum^{\infty}_{k=0} \frac{1}{y_k}= \frac{a -\sqrt{b}}{c} $$ for positive integers a $, b, c$ with $gcd (a, c) = 1$ , find $a + b + c$ .
