---
tag: 528HENSDNQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1620286
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16807
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218447
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Compute the number of ordered quadruples $(a,b,c,d)$ of distinct positive integers such that $ \binom{\binom{a}{b}}{\binom{c}{d}}=21$ .

*Proposed by Luke Robitaille*
