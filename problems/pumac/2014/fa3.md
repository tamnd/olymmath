---
tag: HRK9X23QW2
kind: problem
appearances:
  - at: pumac/2014/fa3
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2014 official paper
    url: https://pumac.princeton.edu/s/PUMaC2014_FinalsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
There are $n$ coins lying in a circle. Each coin has two sides, $+$ and $-$. A *flop* means to flip every coin that has two different neighbors simultaneously, while leaving the others alone. For instance, $++-+$, after one *flop*, becomes $+---$.

For $n$ coins, let us define $M$ to be a *perfect number* if for any initial arrangement of the coins, the arrangement of the coins after $M$ *flops* is exactly the same as the initial one.

(a) When $n=1024$, find a perfect number $M$.

(b) Find all $n$ for which a perfect number $M$ exist.
