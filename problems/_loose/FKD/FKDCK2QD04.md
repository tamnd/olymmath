---
tag: FKDCK2QD04
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2014
    url: https://artofproblemsolving.com/community/c6h3229901
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57143
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249963
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2014
    source: hf-ai-mo-aops
    label: Russian TST 2014
---
Nine numbers $a, b, c, \dots$ are arranged around a circle. All numbers of the form $a+b^c, \dots$ are prime. What is the largest possible number of different numbers among $a, b, c, \dots$ ?
