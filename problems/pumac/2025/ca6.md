---
tag: 6BRRWSZR79
kind: problem
appearances:
  - at: pumac/2025/ca6
    primary: true
  - at: pumac/2025/cb8
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2025 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2025_Combinatorics_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Charles challenges David to a game of Fraction Fixer. In this game, David first picks two positive integers $m\le n$ that sum to $2025$. Next, Charles picks integers $a$ and $b$ at random, so that $0\le a<m$ and $0\le b<n$, and computes $\frac{a}{m}+\frac{b}{n}$. If the sum is at least $1$, David wins. Otherwise, Charles wins. If David chooses $m$ and $n$ optimally, what is the probability that David wins?
