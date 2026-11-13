---
tag: 3K0THZV22E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 AMC 8
    url: https://artofproblemsolving.com/community/c6h419647
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=67674
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=202962
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc8/2004
    source: hf-ai-mo-aops
    label: 2004 AMC 8
---
The numbers -2, 4, 6, 9 and 12 are rearranged according to these rules:

1. The largest isn't first, but it is in one of the first three places.
2. The smallest isn't last, but it is in one of the last three places.
3. The median isn't first or last.

What is the average of the first and last numbers? $\textbf{(A)}\: 3.5 \textbf{(B)} \:5 \textbf{(C)} \:6.5 \textbf{(D)} \:7.5 \textbf{(E)} \:8$
