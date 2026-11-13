---
tag: GA131DVT3A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Bosnia And Herzegovina - Regional Olympiad
    url: https://artofproblemsolving.com/community/c6h1714498
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31774
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230960
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ba-mo/2009
    source: hf-ai-mo-aops
    label: 2009 Bosnia And Herzegovina - Regional Olympiad
---
Decomposition of number $n$ is showing $n$ as a sum of positive integers (not neccessarily distinct). Order of addends is important. For every positive integer $n$ show that number of decompositions is $2^{n-1}$
