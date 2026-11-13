---
tag: VNE8G2VW8A
kind: problem
appearances:
  - at: pumac/2025/ca3
    primary: true
  - at: pumac/2025/cb5
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
A stone is placed on a square of a $5\times 5$ grid. Alice and Bob take turns moving the stone to an orthogonally adjacent square (i.e. up/down/left/right). Alice moves first. Once a square has been visited, it cannot be visited again (and they cannot visit the starting square again). A player loses if they cannot make a legal move. For how many starting squares does Alice have a winning strategy?
