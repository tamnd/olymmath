---
tag: 8N8NN2FJQA
kind: problem
appearances:
  - at: pumac/2023/ca1
    primary: true
  - at: pumac/2023/cb3
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2023 official paper
    url: https://pumac.princeton.edu/s/Combinatorics_A_2023.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3414930
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73437
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alien Connor starts at $(0,0)$ and walks around on the integer lattice. Specifically, he takes one step of length one in a uniformly random cardinal direction every minute, unless his previous four steps were all in the same directionin which case he randomly picks a new direction to step in. Every time he takes a step, he leaves toxic air on the lattice point he just left, and the toxic cloud remains there for $150$ seconds. After taking $5$ steps total, the probability that he has not encountered his own toxic waste canb be written as $\tfrac{a}{b}$ for relatively prime positive integers $a,b.$ Find $a+b.$
