---
tag: HHSDBC5RYB
kind: problem
appearances:
  - at: pumac/2022/aa2
    primary: true
  - at: pumac/2022/ab4
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
    url: https://artofproblemsolving.com/community/c6h3444881
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73368
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P(x,y)$ be a polynomial with real coefficients in the variables $x,y$ that is not identically zero. Suppose that $P(\lfloor 2a \rfloor, \lfloor 3a\rfloor) = 0$ for all real numbers $a.$ If $P$ has the minimum possible degree and the coefficient of the monomial $y$ is $4,$ find the coefficient of $x^2y^2$ in $P.$

(The *degree* of a monomial $x^my^n$ is $m + n.$ The *degree* of a polynomial $P(x,y)$ is then the maximum degree of any of its monomials.)
