---
tag: 4AT15S3MHR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2521138
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48628
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244541
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2002
    source: hf-ai-mo-aops
    label: 2002 Mongolian Mathematical Olympiad
---
Let $a_0,a_1,\ldots$ be an infinite sequence of positive numbers. Prove that the inequality $1+a_n>\sqrt[n]2a_{n-1}$ holds for infinitely many positive integers $n$ .
