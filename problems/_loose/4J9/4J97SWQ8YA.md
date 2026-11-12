---
tag: 4J97SWQ8YA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h426103
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73918
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2006
    source: hf-ai-mo-aops
    label: 2006 Stanford Mathematics Tournament
---
In a given sequence $\{S_1,S_2,...,S_k\}$ , for terms $n\ge3$ , $S_n=\sum_{i=1}^{n-1} i\cdot S_{n-i}$ . For example, if the first two elements are 2 and 3, respectively, the third entry would be $1\cdot3+2\cdot2=7$ , and the fourth would be $1\cdot7+2\cdot3+3\cdot2=19$ , and so on. Given that a sequence of integers having this form starts with 2, and the 7th element is 68, what is the second element?
