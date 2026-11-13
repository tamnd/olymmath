---
tag: TSMV2X2VXK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 AMC 10
    url: https://artofproblemsolving.com/community/c6h334201
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4599
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=201112
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc10
    source: hf-ai-mo-aops
    label: 2010 AMC 10
---
For a real number $ x$ , define $ \heartsuit (x)$ to be the average of $ x$ and $ x^2$ . What is $ \heartsuit(1) + \heartsuit(2) +\heartsuit(3)$ ? $ \textbf{(A)}\ 3 \textbf{(B)}\ 6 \textbf{(C)}\ 10 \textbf{(D)}\ 12 \textbf{(E)}\ 20$
