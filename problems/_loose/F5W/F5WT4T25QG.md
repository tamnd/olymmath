---
tag: F5WT4T25QG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h530239
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55678
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249045
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1996
    source: hf-ai-mo-aops
    label: 1996 All-Russian Olympiad
---
Two piles of coins lie on a table. It is known that the sum of the weights of the coins in the two piles are equal, and for any natural number $k$ , not exceeding the number of coins in either pile, the sum of the weights of the $k$ heaviest coins in the first pile is not more than that of the second pile. Show that for any natural number $x$ , if each coin (in either pile) of weight not less than $x$ is replaced by a coin of weight $x$ , the first pile will not be lighter than the second.

*D. Fon-der-Flaas*
