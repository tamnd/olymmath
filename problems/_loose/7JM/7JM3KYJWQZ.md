---
tag: 7JM3KYJWQZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h548797
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65426
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256899
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
A harmonic progression is a sequence of numbers such that their reciprocals are in arithmetic progression.
Let $S_n$ represent the sum of the first $n$ terms of the harmonic progression; for example $S_3$ represents the sum of the first three terms. If the first three terms of a harmonic progression are $3,4,6$ , then: $ \textbf{(A)}\ S_4=20 \textbf{(B)}\ S_4=25 \textbf{(C)}\ S_5=49 \textbf{(D)}\ S_6=49 \textbf{(E)}\ S_2=\frac12 S_4 $
