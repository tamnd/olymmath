---
tag: VE5A3ZKQWB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Romania Team Selection Tests
    url: https://artofproblemsolving.com/community/c6h2121139
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54656
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248161
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=181
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2018
    source: hf-ai-mo-aops
    label: 2018 Romania Team Selection Tests
  - at: ro-tst
    source: hf-mathnet
    label: Romania 69th NMO Selection Tests for BMO and IMO
---
Given an integer $n \geq 2$ determine the integral part of the number $ \sum_{k=1}^{n-1} \frac {1} {({1+\frac{1} {n}}) \dots ({1+\frac {k} {n})}}$ - $\sum_{k=1}^{n-1} (1-\frac {1} {n}) \dots(1-\frac{k}{n})$
