---
tag: RF5XQJP126
kind: problem
appearances:
  - at: pumac/2019/na5
    primary: true
  - at: pumac/2019/nb8
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2019 official paper
    url: https://pumac.princeton.edu/s/2019NT_A_Div.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Call a positive integer $n$ *compact* if for any infinite sequence of distinct primes $p_1,p_2,\ldots$ there exists a finite subsequence of $n$ primes $p_{x_1},p_{x_2},\ldots p_{x_n}$ (where the $x_i$ are distinct) such that
$$p_{x_1}p_{x_2}\cdots p_{x_n}\equiv 1\pmod{2019}$$
Find the sum of all *compact* numbers less than $2\cdot 2019$.
