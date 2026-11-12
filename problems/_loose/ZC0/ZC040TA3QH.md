---
tag: ZC040TA3QH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h3065261
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74158
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2023
    source: hf-ai-mo-aops
    label: 2023 Stanford Mathematics Tournament
---
Define the Fibonacci numbers via $F_0=0$ , $f_1=1$ , and $F_{n-1}+F_{n-2}$ .

Olivia flips two fair coins at the same time, repeatedly, until she has flipped a tails on both, not necessarily on the same throw. She records the number of pairs of flips $c$ until this happens (not including the last pair, so if on the last flip both coins turned up tails $c$ would be $0$ ). What is the expected value $F_c$ ?
