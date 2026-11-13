---
tag: VGTB09FHVA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Spain Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h389689
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60005
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252106
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome/2000
    source: hf-ai-mo-aops
    label: 2000 Spain Mathematical Olympiad
---
Find the largest integer $N$ satisfying the following two conditions:**(i)** $\left[ \frac N3 \right]$ consists of three equal digits;**(ii)** $\left[ \frac N3 \right] = 1 + 2 + 3 +\cdots + n$ for some positive integer $n.$
