---
tag: WSBD3JG02E
kind: problem
appearances:
  - at: pumac/2024/fa3
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2024 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2024_Indiv_Finals_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
There are 2024 perfectly logical assassins in a circle, named 1 to 2024 in clockwise order. Turns move clockwise around the circle among currently alive assassins, starting with assassin 1 and cycling back to the front while more than one assassin is alive. On each assassin's turn, they must kill someone else (they are not allowed to pass on their turn). Each assassin has a bounty associated with them, with $k$ dollars on assassin $k$. At a given assassin's turn, their top priority is to be the last man standing, and the second priority is to kill the assassin that has the highest bounty currently alive (other than themself). Who is the last man standing?
