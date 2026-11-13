---
tag: BMZ0XZBER8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h518423
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5366
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207514
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2010
    source: hf-ai-mo-aops
    label: 2010 Olympic Revenge
---
Let $a_n$ and $b_n$ to be two sequences defined as below: $i)$ $a_1 = 1$ $ii)$ $a_n + b_n = 6n - 1$ $iii)$ $a_{n+1}$ is the least positive integer different of $a_1, a_2, \ldots, a_n, b_1, b_2, \ldots, b_n$ .

Determine $a_{2009}$ .
