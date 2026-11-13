---
tag: D4TXJSGW85
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Romania Team Selection Tests
    url: https://artofproblemsolving.com/community/c6h1538024
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54635
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248136
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=416
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2016
    source: hf-ai-mo-aops
    label: 2016 Romania Team Selection Tests
  - at: ro-tst
    source: hf-mathnet
    label: Romania 67th NMO Selection Tests for BMO and IMO
---
Prove that:**(a)** If $(a_n)_{n\geq 1}$ is a strictly increasing sequence of positive integers such that $\frac{a_{2n-1}+a_{2n}}{a_n}$ is a constant as $n$ runs through all positive integers, then this constant is an integer greater than or equal to $4$ ; and **(b)** Given an integer $N\geq 4$ , there exists a strictly increasing sequene $(a_n)_{n\geq 1}$ of positive integers such that $\frac{a_{2n-1}+a_{2n}}{a_n}=N$ for all indices $n$ .
