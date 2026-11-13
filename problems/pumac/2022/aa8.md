---
tag: 1WRAEJ05N9
kind: problem
appearances:
  - at: pumac/2022/aa8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2022 official paper
    url: https://pumac.princeton.edu/s/Algebra_A_2022_.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3444897
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73374
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $f$ sends sequences to sequences in the following way: given a sequence $\{a_n\}_{n=0}^{\infty}$ of real numbers, $f$ sends $\{a_n\}_{n=0}^{\infty}$ to the sequence $\{b_n\}_{n=0}^{\infty},$ where $b_n=\sum_{k=0}^n a_k \tbinom{n}{k}$ for all $n \ge 0.$ Let $\{F_n\}_{n=0}^{\infty}$ be the Fibonacci sequence, defined by $F_0=0, F_1=1,$ and $F_{n+2}=F_{n+1}+F_n$ for all $n \ge 0.$ Let $\{c_n\}_{n=0}^{\infty}$ denote the sequence obtained by applying the function $f$ to the sequence $\{F_n\}_{n=0}^{\infty}$ $2022$ times. Find $c_5 \pmod{1000}.$
