---
tag: 1J8XW0J7PD
kind: problem
appearances:
  - at: pumac/2023/ca2
    primary: true
  - at: pumac/2023/cb4
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
    url: https://artofproblemsolving.com/community/c6h3414938
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73438
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\oplus$ denote the xor binary operation. Define $x \star y=(x+y)-(x\oplus y).$ Compute $$ \sum_{k=1}^{63} (k \star 45). $$ (*Remark:* The xor operation works as follows: when considered in binary, the $k$ th binary digit of $a \oplus b$ is $1$ exactly when the $k$ th binary digits of $a$ and $b$ are different. For example, $5 \oplus 12 = 0101_2 \oplus 1100_2=1001_2=9.$ )
