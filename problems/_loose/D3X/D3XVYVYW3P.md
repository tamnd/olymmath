---
tag: D3XVYVYW3P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Rioplatense Mathematical Olympiad, Level 3
    url: https://artofproblemsolving.com/community/c6h420386
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27543
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227939
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2005
    source: hf-ai-mo-aops
    label: 2005 Rioplatense Mathematical Olympiad, Level 3
---
Consider all finite sequences of positive real numbers each of whose terms is at most $3$ and the sum of whose terms is more than $100$ . For each such sequence, let $S$ denote the sum of the subsequence whose sum is the closest to $100$ , and define the *defect* of this sequence to be the value $|S-100|$ . Find the maximum possible value of the defect.
