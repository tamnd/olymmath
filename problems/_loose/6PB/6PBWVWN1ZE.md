---
tag: 6PBWVWN1ZE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Spain Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h423246
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7255
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209374
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome/2011
    source: hf-ai-mo-aops
    label: 2011 Spain Mathematical Olympiad
---
The sequence $S_0,S_1,S_2,\ldots$ is defined by
- $S_n=1$ for $0\le n\le 2011$ , and
- $S_{n+2012}=S_{n+2011}+S_n$ for $n\ge 0$ .
Prove that $S_{2011a}-S_a$ is a multiple of $2011$ for all nonnegative integers $a$ .
