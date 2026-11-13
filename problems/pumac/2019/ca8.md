---
tag: 1M3EHK0HJA
kind: problem
appearances:
  - at: pumac/2019/ca8
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2019 official paper
    url: https://pumac.princeton.edu/s/2019Combo_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Let $S_n$ be the set of points $(x/2,y/2)\in\mathbb{R}^2$ such that $x,y$ are odd integers and $|x|\le y\le 2n$. Let $T_n$ be the number of graphs $G$ with vertex set $S_n$ satisfying the following conditions:

- $G$ has no cycles.
- If two points share an edge, then the distance between them is $1$.
- For any path $P=(a,\ldots,b)$ in $G$, the smallest $y$-coordinate among the points in $P$ is either that of $a$ or that of $b$. However, multiple points may share this $y$-coordinate.

Find the $100$th-smallest positive integer $n$ such that the units digit of $T_{3n}$ is $4$.
