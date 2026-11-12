---
tag: VF2CTSZ57A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1946 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1878527
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56599
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38237
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1946
    source: hf-ai-mo-aops
    label: 1946 Moscow Mathematical Olympiad
---
Prove that for any positive integer $n$ the following identity holds $\frac{(2n)!}{n!}= 2^n \cdot (2n - 1)!!$
