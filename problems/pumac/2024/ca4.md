---
tag: 50N0BX7NR4
kind: problem
appearances:
  - at: pumac/2024/ca4
    primary: true
  - at: pumac/2024/cb6
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2024 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2024_Combinatorics_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3450609
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73470
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Michael and Steven are playing the card game War with a deck of $4$ cards numbered $1$ through $4.$ The deck is shuffled randomly and Michael gets a stack of $1$ card and Steven gets a stack of $3$ cards. In each round, the players reveal the top card from their stack, and the player whose card was higher collects both cards to the bottom of their stack in random order. A player wins when they get all four cards in their hand. The probability that Michael wins after exactly $5$ rounds is $\tfrac{m}{n}$ for coprime positive integers $m$ and $n.$ Find $m + n.$
