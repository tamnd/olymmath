---
tag: 88BMPZW8AX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h248920
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44164
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240437
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/South_Africa/train/0000.parquet#row=76
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2000
    source: hf-ai-mo-aops
    label: 2000 Iran MO (3rd Round)
  - at: za-samo
    source: hf-mathnet
    label: South Africa South-Afrika 2011-2013
---
Prove that for every natural number $ n$ there exists a polynomial $ p(x)$ with
integer coefficients such that $ p(1),p(2),...,p(n)$ are distinct powers of $ 2$ .
