---
tag: 7E4RYXY7J1
kind: problem
appearances:
  - at: pumac/2013/cb2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2013 official paper
    url: https://pumac.princeton.edu/s/PUMaC2013_CombinatoricsB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h563835
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10166
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212161
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The number of positive integer pairs $(a,b)$ that have $a$ dividing $b$ and $b$ dividing $2013^{2014}$ can be written as $2013n+k$ , where $n$ and $k$ are integers and $0\leq k<2013$ . What is $k$ ? Recall $2013=3\cdot 11\cdot 61$ .
