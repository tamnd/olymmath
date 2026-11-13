---
tag: BN82VP1NW6
kind: problem
appearances:
  - at: pumac/2018/na7
    primary: true
  - at: pumac/2018/nb8
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
Find the smallest positive integer $G$ such that there exist distinct positive integers $a,b,c$ with the following properties:

- $\gcd(a,b,c)=G$.
- $\operatorname{lcm}(a,b)=\operatorname{lcm}(a,c)=\operatorname{lcm}(b,c)$.
- $\frac{1}{a}+\frac{1}{b}$, $\frac{1}{a}+\frac{1}{c}$, and $\frac{1}{b}+\frac{1}{c}$ are reciprocals of integers.
- $\gcd(a,b)+\gcd(a,c)+\gcd(b,c)=16G$.
