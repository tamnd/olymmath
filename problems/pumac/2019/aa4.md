---
tag: TX4ND7KTZG
kind: problem
appearances:
  - at: pumac/2019/aa4
    primary: true
  - at: pumac/2019/ab6
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2019 official paper
    url: https://pumac.princeton.edu/s/2019Algebra_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Let $\mathbb{N}_0$ be the set of non-negative integers. There is a triple $(f,a,b)$, where $f$ is a function from $\mathbb{N}_0$ to $\mathbb{N}_0$ and $a,b\in\mathbb{N}_0$, that satisfies the following conditions:

1) $f(1)=2$

2) $f(a)+f(b)\le 2\sqrt{f(a)}$

3) For all $n>0$, we have $f(n)=f(n-1)f(b)+2n-f(b)$

Find the sum of all possible values of $f(b+100)$.
