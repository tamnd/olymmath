---
tag: ADA8VM0S4Q
kind: problem
appearances:
  - at: pumac/2018/ca7
    primary: true
  - at: pumac/2018/cb8
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
Frankie the Frog starts his morning at the origin in $\mathbb{R}^2$. He decides to go on a leisurely stroll, consisting of $3^1+3^{10}+3^{11}+3^{100}+3^{101}+3^{110}+3^{111}+3^{1000}$ moves, starting with the 1st move. On the $n$th move, he hops a distance of
$$\max\{k\in\mathbb{Z}:3^k\mid n\}+1,$$
then turns $90^\circ$ degrees counterclockwise. What is the square of the distance from his final position to the origin?
