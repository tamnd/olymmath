---
tag: AWXD7M5M24
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 23rd Philippine MO Qualifying Stage
    url: https://artofproblemsolving.com/community/c6h3497573
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50820
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154720
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=279
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-ai-mo-aops
    label: 23rd Philippine MO Qualifying Stage
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 23rd Philippine Mathematical Olympiad Qualifying Stage
---
For a positive integer $n$ , define $s(n)$ as the smallest positive integer $t$ such that $n$ is a factor of $t!$ . Compute the number of positive integers $n$ for which $s(n)=13$ .
