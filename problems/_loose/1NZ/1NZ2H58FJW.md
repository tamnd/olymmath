---
tag: 1NZ2H58FJW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Istmo Centroamericano MO
    url: https://artofproblemsolving.com/community/c6h2667247
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29505
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229410
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: istmo/2018
    source: hf-ai-mo-aops
    label: 2018 Istmo Centroamericano MO
---
Determine all sequences of integers $a_1, a_2,. . .,$ such that:
(i) $1 \le a_i \le n$ for all $1 \le i \le n$ .
(ii) $| a_i - a_j| = | i - j |$ for any $1 \le i, j \le n$
