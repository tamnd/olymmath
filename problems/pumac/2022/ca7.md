---
tag: M4VCPQ9T2W
kind: problem
appearances:
  - at: pumac/2022/ca7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2022 official paper
    url: https://pumac.princeton.edu/s/Combinatorics_A_2022_.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3444939
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73383
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Kelvin has a set of eight vertices. For each pair of distinct vertices, Kelvin independently draws an edge between them with probability $p \in (0,1).$ A set $S$ of four distinct vertices is called *good* if there exists an edge between $v$ and $w$ for all $v,w \in S$ with $v \neq w.$ The variance of the number of good sets can be expressed as a polynomial $f(p)$ in the variable $p.$ Find the sum of the absolute values of the coefficients of $f(p).$ (The *variance* of a random variable $X$ is defined as $\mathbb{E}[X^2]-\mathbb{E}[X]^2.$ )
