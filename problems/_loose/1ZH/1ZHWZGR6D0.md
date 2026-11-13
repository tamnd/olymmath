---
tag: 1ZHWZGR6D0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Grosman Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3152022
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=45055
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241267
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: il-grossman/2023
    source: hf-ai-mo-aops
    label: 2023 Grosman Mathematical Olympiad
---
The plane is colored with two colors so that the following property holds: for each real $a>0$ there is an equilateral triangle of side length $a$ whose $3$ vertices are of the same color.

Prove that for any three numbers $a,b,c>0$ for which the sum of any two is greater than the third there is a triangle with sides $a$ , $b$ , and $c$ whose $3$ vertices are of the same color.
