---
tag: Y27525E4RM
kind: problem
appearances:
  - at: pumac/2024/aa5
    primary: true
  - at: pumac/2024/ab7
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2024 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2024_Algebra_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3450592
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73461
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Real numbers $a,b,c$ satisfy $\tfrac{1}{ab} = b+2c, \tfrac{1}{bc} = 2c+3a, \tfrac{1}{ca}=3a+b.$ Then, $(a+b+c)^3$ can be written as $\tfrac{m}{n}$ for relatively prime positive integers $m$ and $n.$ Find $m+n.$
