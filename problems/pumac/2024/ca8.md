---
tag: 5Q1QWB8H01
kind: problem
appearances:
  - at: pumac/2024/ca8
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2024 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2024_Combinatorics_A.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Let the Sierpinski triangle graph $S_n$ be defined as follows. $S_0$ consists of three vertices and three edges in a triangle. $S_1$ consists of 6 vertices and 9 edges. To make $S_{n+1}$, we take three copies of $S_n$ and merge vertices at the corners, where the bottom-left corner of the top copy merges with the top corner of the bottom-left copy, etc. Then the number of cycles on $S_4$, which visit each vertex exactly once and traverse each edge at most once, can be expressed as $p_1^{e_1}p_2^{e_2}$ for some primes $p_1,p_2$ and positive integers $e_1,e_2$. Find $p_1+p_2+e_1+e_2$.
