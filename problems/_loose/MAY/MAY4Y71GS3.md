---
tag: MAY4Y71GS3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Bosnia And Herzegovina - Regional Olympiad
    url: https://artofproblemsolving.com/community/c6h1709494
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31905
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231091
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ba-mo/2018
    source: hf-ai-mo-aops
    label: 2018 Bosnia And Herzegovina - Regional Olympiad
---
Let $a_1, a_2,...,a_{2018}$ be a sequence of numbers such that all its elements are elements of a set $\{-1,1\}$ . Sum $$ S=\sum \limits_{1 \leq i < j \leq 2018} a_i a_j $$ can be negative and can also be positive. Find the minimal value of this sum
