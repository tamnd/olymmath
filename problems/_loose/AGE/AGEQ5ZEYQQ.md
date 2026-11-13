---
tag: AGEQ5ZEYQQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2015543
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36059
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98256
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/1989
    source: hf-ai-mo-aops
    label: 1989 National High School Mathematics League
---
$a_1,a_2,\cdots,a_n$ are positive numbers, satisfying that $a_1a_2\cdots a_n=1$ .
Prove that $(2+a_1)(2+a_2)\cdots(2+a_n)\geq3^n$
