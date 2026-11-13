---
tag: 95SWP7PDGB
kind: problem
appearances:
  - at: pumac/2019/ca5
    primary: true
  - at: pumac/2019/cb7
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
A candy store has $100$ pieces of candy to give away. When you get to the store, there are five people in front of you, numbered from $1$ to $5$. The $i$th person in line considers the set of positive integers congruent to $i$ modulo $5$ which are at most the number of pieces of candy remaining. If this set is empty, then they take no candy. Otherwise they pick an element of this set and take that many pieces of candy. For example, the first person in line will pick an integer from the set $\{1,6,\ldots,96\}$ and take that many pieces of candy. How many ways can the first five people take their share of candy so that after they are done there are at least $35$ pieces of candy remaining?
