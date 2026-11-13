---
tag: AR0B5AHV4F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1896539
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55597
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248964
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1992
    source: hf-ai-mo-aops
    label: 1992 All Soviet Union Mathematical Olympiad
---
A cinema has its seats arranged in $n$ rows $\times m$ columns. It sold mn tickets but sold some seats more than once. The usher managed to allocate seats so that every ticket holder was in the correct row or column. Show that he could have allocated seats so that every ticket holder was in the correct row or column and at least one person was in the correct seat. What is the maximum $k$ such that he could have always put every ticket holder in the correct row or column and at least $k$ people in the correct seat?
