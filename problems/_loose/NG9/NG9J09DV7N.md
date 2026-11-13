---
tag: NG9J09DV7N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 25th Philippine MO Area Stage
    url: https://artofproblemsolving.com/community/c6h3513782
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50753
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154591
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=342
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-ai-mo-aops
    label: 25th Philippine MO Area Stage
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 25th Philippine Mathematical Olympiad Area Stage
---
Determine the sum of all positive integers $n$ for which $2[\tau(n)]^2=3n$ , where $\tau(n)$ is the number of positive divisors of $n$ .
