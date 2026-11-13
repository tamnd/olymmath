---
tag: MSRD6XAPP0
kind: problem
appearances:
  - at: pumac/2023/ca7
    primary: true
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
    url: https://artofproblemsolving.com/community/c6h3415029
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73443
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A utility company is building a network to send electricity to fifty houses, with addresses $0, 1, 2, \ldots , 49. $ The power center only connects directly to house $0$ , so electricity reaches all other houses through a system of wires that connects specific pairs of houses. To save money, the company only lays wires between as few pairs of distinct houses as possible; additionally, two houses with addresses $a$ and $b$ can only have a wire between them if at least one of the following three conditions is met:

- $10$ divides both $a$ and $b.$
- $\lfloor \tfrac{a}{10} \rfloor \equiv \lfloor \tfrac{b}{10}\rfloor \pmod{5}.$
- $\lceil \tfrac{a}{10} \rceil\equiv \lceil \tfrac{b}{10}\rceil\pmod{5}.$

Letting $N$ be the number of distinct ways such a wire system can be configured so that every house receives electricity , find the remainder when $N$ is divided by $1000.$
