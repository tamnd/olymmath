---
tag: N58H5YPYQD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h57090
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66388
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199363
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
$(1+x^2)(1-x^3)$ equals $ \text{(A)}\ 1 - x^5 \text{(B)}\ 1 - x^6 \text{(C)}\ 1+ x^2 -x^3 \text{(D)}\ 1+x^2-x^3-x^5 \text{(E)}\ 1+x^2-x^3-x^6 $
