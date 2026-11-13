---
tag: JG5PSXWZ5S
kind: problem
appearances:
  - at: pumac/2020/na8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/PuMaC_Number_Theory_A_2020.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747863
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73240
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263161
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
What is the smallest integer $a_0$ such that, for every positive integer $n$ , there exists a sequence of positive integers $a_0, a_1, ..., a_{n-1}, a_n$ such that the first $n-1$ are all distinct, $a_0 = a_n$ , and for $0 \le i \le n -1$ , $a_i^{a_{i+1}}$ ends in the digits $\overline{0a_i}$ when expressed without leading zeros in base $10$ .
