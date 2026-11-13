---
tag: KSZA12J0TS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h455119
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66585
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199578
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
Some marbles in a bag are red and the rest are blue. If one red marble is removed, then one-seventh of the remaining marbles are red. If two blue marbles are removed instead of one red, then one-fifth of the remaining marbles are red. How many marbles were in the bag originally? $ \textbf{(A)}\ 8 \textbf{(B)}\ 22 \textbf{(C)}\ 36 \textbf{(D)}\ 57 \textbf{(E)}\ 71 $
