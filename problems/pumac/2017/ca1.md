---
tag: RXBPVMMH5Q
kind: problem
appearances:
  - at: pumac/2017/ca1
    primary: true
  - at: pumac/2017/cb3
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2017 official paper
    url: https://pumac.princeton.edu/s/PUMaC2017_Combo_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1564385
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15913
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $2017$ turtles in a room. Every second, two turtles are chosen uniformly at random and combined to form one super-turtle. (Super-turtles are still turtles.) The probability that after $2015$ seconds (meaning when there are only two turtles remaining) there is some turtle that has never been combined with another turtle can be written in the form $\tfrac{p}{q}$ where $p$ and $q$ are relatively prime positive integers. Find $p + q$ .
