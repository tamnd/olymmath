---
tag: MX2GYWMDS4
kind: problem
appearances:
  - at: pumac/2019/nb6
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2019 official paper
    url: https://pumac.princeton.edu/s/2019NT_B_Div.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Let $f$ be a polynomial with integer coefficients of degree $2019$ such that the following conditions are satisfied:

(a) For all integers $n$, $f(n)+f(-n)=2$.

(b) $101^2\mid f(0)+f(1)+f(2)+\cdots+f(100)$.

Compute the remainder when $f(101)$ is divided by $101^2$.
