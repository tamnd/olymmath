---
tag: 4PRY2VF3CV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h516613
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10035
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212031
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
How many ways are there to choose (not necessarily distinct) integers $a,b,c$ from the set $\{1,2,3,4\}$ such that $a^{(b^c)}$ is divisible by $4$ ?

*Ray Li*
