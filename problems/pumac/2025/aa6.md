---
tag: 774R7GAS9E
kind: problem
appearances:
  - at: pumac/2025/aa6
    primary: true
  - at: pumac/2025/ab8
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2025 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2025_Algebra_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Let $c$ be a real number, and let $f(t)=(t-0.01)+(t^2-c)i$ for every real number $t$. Suppose that $m(t)$ is a (not necessarily continuous) function from $\mathbb{R}$ to $\mathbb{C}$ such that
$$m(t)^2+1+\frac{1}{m(t)^2}=(t-1)(t+1)$$
for every real number $t$. Over all such functions $f(t)$ and $m(t)$, what is the maximum possible number of distinct ordered pairs of real numbers $(a,b)$ such that $f(a)=m(b)$?
