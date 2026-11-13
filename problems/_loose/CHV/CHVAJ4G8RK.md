---
tag: CHVAJ4G8RK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1976 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1869549
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55259
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248626
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1976
    source: hf-ai-mo-aops
    label: 1976 All Soviet Union Mathematical Olympiad
---
A row of $1000$ numbers is written on the blackboard. We write a new row, below the first according to the rule:

We write under every number $a$ the natural number, indicating how many times the number $a$ is encountered in the first line. Then we write down the third line: under every number $b$ -- the natural number, indicating how many times the number $b$ is encountered in the second line, and so on.

a) Prove that there is a line that coincides with the preceding one.

b) Prove that the eleventh line coincides with the twelfth.

c) Give an example of the initial line such, that the tenth row differs from the eleventh.
