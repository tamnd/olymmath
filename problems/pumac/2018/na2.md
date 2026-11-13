---
tag: Z0WR6BW6W1
kind: problem
appearances:
  - at: pumac/2018/na2
    primary: true
  - at: pumac/2018/nb3
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
For a positive integer $n$, let $f(n)$ be the number of (not necessarily distinct) primes in the prime factorization of $n$. For example, $f(1)=0$, $f(2)=1$, and $f(4)=f(6)=2$. Let $g(n)$ be the number of positive integers $k\le n$ such that $f(k)\ge f(j)$ for all $j\le n$. Find $g(1)+g(2)+\ldots+g(100)$.
