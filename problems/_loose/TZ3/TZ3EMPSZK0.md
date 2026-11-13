---
tag: TZ3EMPSZK0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 International Zhautykov Olympiad
    url: https://artofproblemsolving.com/community/c6h386943
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6601
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208724
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: zhautykov/2011
    source: hf-ai-mo-aops
    label: 2011 International Zhautykov Olympiad
---
Find the maximum number of sets which simultaneously satisfy the following conditions:**i)** any of the sets consists of $4$ elements,**ii)** any two different sets have exactly $2$ common elements,**iii)** no two elements are common to all the sets.
