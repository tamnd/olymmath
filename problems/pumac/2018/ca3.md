---
tag: D33AJGTQWS
kind: problem
appearances:
  - at: pumac/2018/ca3
    primary: true
  - at: pumac/2018/cb5
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2018 official paper
    url: https://pumac.princeton.edu/s/Combinatorics-A-Test.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Alex starts at the origin $O$ of a hexagonal lattice. Every second, he moves to one of the six vertices adjacent to the vertex he is currently at. If he ends up at $X$ after $2018$ moves, then let $p$ be the probability that the shortest walk from $O$ to $X$ (where a valid move is from a vertex to an adjacent vertex) has length $2018$. Then $p$ can be expressed as $\frac{a^m-b}{c^n}$, where $a$, $b$, and $c$ are positive integers less than $10$; $a$ and $c$ are not perfect squares; and $m$ and $n$ are positive integers less than $10000$. Find $a+b+c+m+n$.
