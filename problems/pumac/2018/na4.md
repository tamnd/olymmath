---
tag: GZG3FHXRS7
kind: problem
appearances:
  - at: pumac/2018/na4
    primary: true
  - at: pumac/2018/nb6
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2018 official paper
    url: https://pumac.princeton.edu/s/Number-Theory-A-Test.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Let $n$ be a positive integer. Let $f(n)$ be the probability that, if divisors $a,b,c$ of $n$ are selected uniformly at random with replacement, then $\gcd(a,\operatorname{lcm}(b,c))=\operatorname{lcm}(a,\gcd(b,c))$. Let $s(n)$ be the sum of the distinct prime divisors of $n$. If $f(n)<\frac{1}{2018}$, compute the smallest possible value of $s(n)$.
