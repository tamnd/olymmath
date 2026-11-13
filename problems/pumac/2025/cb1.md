---
tag: 4EKNEX9011
kind: problem
appearances:
  - at: pumac/2025/cb1
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2025 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2025_Combinatorics_B.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
There is an alphabet consisting of four shapes; a Segment, a Diamond, a Triangle, and a Pentagon. All of these shapes are regular. Each shape has a marked vertex that indicates its current orientation (as shown below).

Richard creates a password of length $6$ from this four-shape alphabet. Then, every second, Richard rotates each Segment by $180^\circ$, each Diamond by $90^\circ$ clockwise, each Triangle by $120^\circ$ clockwise, and each Pentagon by $72^\circ$ clockwise. It turns out that the shapes are first all oriented the same as in his original password after $20$ seconds. How many distinct passwords could Richard have chosen?

![Figure 1](cb1.fig1.svg)
