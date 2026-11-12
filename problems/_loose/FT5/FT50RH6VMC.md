---
tag: FT50RH6VMC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h3646944
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74211
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2024
    source: hf-ai-mo-aops
    label: 2024 Stanford Mathematics Tournament
---
A group of scientists are researching the population dynamics of a certain bacterial colony. They find that if $P_n$ represents the bacterial population at $n$ minutes from the start, then this population can be modeled in a surprisingly discrete way given by $P_n = \dfrac{P^3_{n-1}}{P^4_{n-3}}$ . Given that in one experiment, $P_0 = 1$ , $P_1 = 1$ , and $P_2 = 7^3$ , find $3 \log_7(P_{100}).$
