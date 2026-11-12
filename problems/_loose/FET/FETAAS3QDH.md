---
tag: FETAAS3QDH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747860
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73237
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2020
    source: hf-ai-mo-aops
    label: 2020 Princeton University Math Competition
---
We say that a positive integer $n$ is *divable* if there exist positive integers $1 < a < b < n$ such that, if the base- $a$ representation of $n$ is $\sum_{i=0}^{k_1} a_ia^i$ , and the base- $b$ representation of $n$ is $\sum_{i=0}^{k_2} b_ib^i$ , then for all positive integers $c > b$ , we have that $\sum_{i=0}^{k_2} b_ic^i$ divides $\sum_{i=0}^{k_1} a_ic^i$ . Find the number of non-divable $n$ such that $1 \le n \le 100$ .
