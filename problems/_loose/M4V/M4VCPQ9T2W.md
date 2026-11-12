---
tag: M4VCPQ9T2W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
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
unplaced:
  - at: pumac/2022
    source: hf-ai-mo-aops
    label: 2022 Princeton University Math Competition
---
Kelvin has a set of eight vertices. For each pair of distinct vertices, Kelvin independently draws an edge between them with probability $p \in (0,1).$ A set $S$ of four distinct vertices is called *good* if there exists an edge between $v$ and $w$ for all $v,w \in S$ with $v \neq w.$ The variance of the number of good sets can be expressed as a polynomial $f(p)$ in the variable $p.$ Find the sum of the absolute values of the coefficients of $f(p).$ (The *variance* of a random variable $X$ is defined as $\mathbb{E}[X^2]-\mathbb{E}[X]^2.$ )
