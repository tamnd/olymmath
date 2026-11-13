---
tag: TEVMMX9WZZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 South East Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h425244
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7251
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209370
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-smo/2011
    source: hf-ai-mo-aops
    label: 2011 South East Mathematical Olympiad
---
Find all positive integer $n$ , such that for all 35-element-subsets of $M=(1,2,3,...,50)$ ,there exists at least two different elements $a,b$ , satisfing : $a-b=n$ or $a+b=n$ .
