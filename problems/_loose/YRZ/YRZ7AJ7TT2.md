---
tag: YRZ7AJ7TT2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h2830805
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29858
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229578
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2021
    source: hf-ai-mo-aops
    label: 2021 Argentina National Olympiad
---
The sequence $a_n (n\geq 1)$ of natural numbers is defined as $a_{n+1}=a_n+b_n,$ where $b_n$ is the number that has the same digits as $a_n$ but in the opposite order ( $b_n$ can start with $0$ ). For example, if $a_1=180,$ then $a_2=261, a_3=423.$

a) Decide if $a_1$ can be chosen so that $a_7$ is prime.
b) Decide if $a_1$ can be chosen so that $a_5$ is prime.
