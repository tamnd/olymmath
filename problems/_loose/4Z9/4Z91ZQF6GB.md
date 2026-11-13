---
tag: 4Z91ZQF6GB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h2996199
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29820
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229541
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2017
    source: hf-ai-mo-aops
    label: 2017 Argentina National Olympiad
---
We will say that a list of positive integers is *admissible* if all its numbers are less than or equal to $100$ and their sum is greater than $1810$ . Find the smallest positive integer $d$ such that each admissible list can be crossed out some numbers such that the sum of the numbers left uncrossed out is greater than or equal to $1810-d$ and less than or equal to $1810+d$ .
