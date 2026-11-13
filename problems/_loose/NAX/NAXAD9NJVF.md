---
tag: NAXAD9NJVF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Bangladeshi National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2522748
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19830
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221349
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bd-bdmo/2021
    source: hf-ai-mo-aops
    label: 2021 Bangladeshi National Mathematical Olympiad
---
For a positive integer $n$ , let $s(n)$ and $c(n)$ be the number of divisors of $n$ that are perfect squares and perfect cubes respectively. A positive integer $n$ is called fair if $s(n)=c(n)>1$ . Find the number of fair integers less than $100$ .
