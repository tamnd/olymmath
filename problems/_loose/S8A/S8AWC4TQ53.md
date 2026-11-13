---
tag: S8AWC4TQ53
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2021
    url: https://artofproblemsolving.com/community/c6h3036711
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57238
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250057
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2021
    source: hf-ai-mo-aops
    label: Russian TST 2021
---
Given an integer $m > 1$ , we call the number $x{}$ dangerous if $x{}$ divides the number $y{}$ , which is obtained by writing the digits of $x{}$ in base $m{}$ in reverse order, with $x\neq y$ . Prove that if there exists a three-digit (in base $m$ ) dangerous number for a given $m$ , then there exists a two-digit (in base $m$ ) dangerous number.
