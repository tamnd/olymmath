---
tag: P3ME0T0CBX
kind: problem
appearances:
  - at: pumac/2016/aa6
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2016 official paper
    url: https://pumac.princeton.edu/s/PUMaC2016_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Let $[a,b]=ab-a-b$. Shaq sees the numbers $2,3,\ldots,101$ written on a blackboard. Let $V$ be the largest number that Shaq can obtain by repeatedly choosing two numbers $a,b$ on the board and replacing them with $[a,b]$ until there is only one number left. Suppose $N$ is the integer with $N!$ nearest to $V$. Find the nearest integer to $10^6\cdot\frac{|V-N!|}{N!}$.
