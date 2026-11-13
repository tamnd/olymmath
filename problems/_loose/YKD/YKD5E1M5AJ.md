---
tag: YKD5E1M5AJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h455170
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66455
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199474
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
A subset of the integers $1, 2, ..., 100$ has the property that none of its members is 3 times another. What is the largest number of members such a subset can have? $ \textbf{(A)}\ 50 \textbf{(B)}\ 66 \textbf{(C)}\ 67 \textbf{(D)}\ 76 \textbf{(E)}\ 78 $
