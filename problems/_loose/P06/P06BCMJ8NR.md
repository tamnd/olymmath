---
tag: P06BCMJ8NR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h565598
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10012
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212008
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
How many integers $n$ are there such that $(n+1!)(n+2!)(n+3!)\cdots(n+2013!)$ is divisible by $210$ and $1 \le n \le 210$ ?

*Proposed by Lewis Chen*
