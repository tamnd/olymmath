---
tag: AB8ZGR4MB7
kind: problem
appearances:
  - at: pumac/2024/ca5
    primary: true
  - at: pumac/2024/cb7
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
    url: https://artofproblemsolving.com/community/c6h3450610
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73471
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is election year in PUMACland, and for the presidential election there are $27$ people voting for either Vraj Patel or Vedant Shah. Each voter selects a candidate uniformly at random, and their ballots are labeled $1$ through $27.$ The election takes place as a series of rounds. In each round, the surviving ballots are sorted by label and separated into consecutive groups of three. From each group, the person with the most votes wins, and exactly one of the ballots bearing the winner's name is allowed to proceed to the next round. This procedure continues until a single ballot remains, and the person whose name is on the ballot wins.

Alice, Bob, and Carol submitted ballots numbered $1, 15,$ and $27,$ respectively. Suppose that Alice, Bob, and Carol had all flipped their votes. If the probability that the outcome of the election would have changed is $\tfrac{a}{b}$ for relatively prime positive integers $a, b,$ find $a + b.$
