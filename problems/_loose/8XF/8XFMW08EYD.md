---
tag: 8XFMW08EYD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h3523147
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2940
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Taiwan TST Round 1
---
A country has 2025 cites, with some pairs of cities having bidirectional flight routes between them. For any pair of the cities, the flight route between them must be operated by one of the companies $X, Y$ or $Z$ . To avoid unfairly favoring specific company, the regulation ensures that if there have three cities $A, B$ and $C$ , with flight routes $A \leftrightarrow B$ and $A \leftrightarrow C$ operated by two different companies, then there must exist flight route $B \leftrightarrow C$ operated by the third company different from $A \leftrightarrow B$ and $A \leftrightarrow C$ .

Let $n_X$ , $n_Y$ and $n_Z$ denote the number of flight routes operated by companies $X, Y$ and $Z$ , respectively. It is known that, starting from a city, we can arrive any other city through a series of flight routes (not necessary operated by the same company). Find the minimum possible value of $\max(n_X, n_Y , n_Z)$ .
*Proposed by usjl and YaWNeeT*
