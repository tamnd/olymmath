---
tag: RYXP1YG6DZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Rioplatense Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2977703
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27631
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228019
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2022
    source: hf-ai-mo-aops
    label: 2022 Rioplatense Mathematical Olympiad
---
In a board, the positive integer $N$ is written. In each round, Olive can realize any one of the following operations:
I - Switch the current number by a positive multiple of the current number.
II - Switch the current number by a number with the same digits of the current number, but the digits are written in another order(leading zeros are allowed). For instance, if the current number is $2022$ , Olive can write any of the following numbers $222,2202,2220$ .
Determine all the positive integers $N$ , such that, Olive can write the number $1$ after a finite quantity of rounds.
