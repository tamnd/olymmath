---
tag: 5HAE80YXYW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h3300179
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2022
    source: hf-ai-mo-aops
    label: 2022 Belarusian National Olympiad
---
A sequence of positive integer numbers $a_1,a_2,\ldots$ for $i \geq 3$ satisfies $$ a_{i+1}=a_i+gcd(a_{i-1},a_{i-2}) $$ Prove that there exist two positive integer numbers $N, M$ , such that $a_{n+1}-a_n=M$ for all $n \geq N$
