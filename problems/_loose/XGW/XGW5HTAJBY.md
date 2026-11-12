---
tag: XGW5HTAJBY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Alibaba Global Math Competition
    url: https://artofproblemsolving.com/community/c6h2992028
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19795
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: alibaba/2021
    source: hf-ai-mo-aops
    label: 2021 Alibaba Global Math Competition
---
For the complex-valued function $f(x)$ which is continuous and absolutely integrable on $\mathbb{R}$ , define the function $(Sf)(x)$ on $\mathbb{R}$ : $(Sf)(x)=\int_{-\infty}^{+\infty}e^{2\pi iux}f(u)du$ .
(a) Find the expression for $S(\frac{1}{1+x^2})$ and $S(\frac{1}{(1+x^2)^2})$ .
(b) For any integer $k$ , let $f_k(x)=(1+x^2)^{-1-k}$ . Assume $k\geq 1$ , find constant $c_1$ , $c_2$ such that the function $y=(Sf_k)(x)$ satisfies the ODE with second order: $xy''+c_1y'+c_2xy=0$ .
