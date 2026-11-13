---
tag: M16N5HAWPX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Ukraine National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h606292
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=62994
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254581
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/1999
    source: hf-ai-mo-aops
    label: 1999 Ukraine National Mathematical Olympiad
---
find all function such that **$f:N->N$** for every **$ n\in\mathbb{N} $**, **$f(f(n))+f(n)=2n$**

PLZ->(solution not to use characterastic equation)<-
