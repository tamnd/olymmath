---
tag: 813TMMJE2V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 BMT
    url: https://artofproblemsolving.com/community/c6h2727583
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70312
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2021
    source: hf-ai-mo-aops
    label: 2021 BMT
---
Consider the randomly generated base 10 real number $r = 0.\overline{p_0p_1p_2\ldots}$ , where each $p_i$ is a digit from $0$ to $9$ , inclusive, generated as follows: $p_0$ is generated uniformly at random from $0$ to $9$ , inclusive, and for all $i \geq 0$ , $p_{i + 1}$ is generated uniformly at random from $p_i$ to $9$ , inclusive. Compute the expected value of $r$ .
