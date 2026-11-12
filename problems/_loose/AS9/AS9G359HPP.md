---
tag: AS9G359HPP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h1832733
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17877
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2019
    source: hf-ai-mo-aops
    label: 2019 Iran MO (2nd Round)
---
Ali and Naqi are playing a game. At first, they have Polynomial $P(x) = 1+x^{1398}$ .
Naqi starts. In each turn one can choice natural number $k \in [0,1398]$ in his trun, and add $x^k$ to the polynomial. For example after 2 moves $P$ can be : $P(x) = x^{1398} + x^{300} + x^{100} +1$ . If after Ali's turn, there exist $t \in R$ such that $P(t)<0$ then Ali loses the game. Prove that Ali can play forever somehow he never loses the game!
