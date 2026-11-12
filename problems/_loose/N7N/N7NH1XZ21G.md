---
tag: N7NH1XZ21G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2021
    url: https://artofproblemsolving.com/community/c6h3036723
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57241
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2021
    source: hf-ai-mo-aops
    label: Russian TST 2021
---
Given an integer $n \geqslant 3$ the polynomial $f(x_1, \ldots, x_n)$ with integer coefficients is called *good* if $f(0,\ldots, 0) = 0$ and $$f(x_1, \ldots, x_n)=f(x_{\pi_1}, \ldots, x_{\pi_n}),$$for any permutation of $\pi$ of the numbers $1,\ldots, n$ . Denote by $\mathcal{J}$ the set of polynomials of the form $$p_1q_1+\cdots+p_mq_m,$$where $m$ is a positive integer and $q_1,\ldots , q_m$ are polynomials with integer coefficients, and $p_1,\ldots , p_m$ are good polynomials. Find the smallest natural number $D{}$ such that each monomial of degree $D{}$ lies in the set $\mathcal{J}$ .
