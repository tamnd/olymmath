---
tag: XH28M77XFF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 25th Philippine MO Area Stage
    url: https://artofproblemsolving.com/community/c6h3501206
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50739
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154597
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=349
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
There are three novel series Peter wishes to read. Each consists of 4 volumes that must be read in order, but not necessarily one after the other. Let $N$ be the number of ways Peter can finish reading all the volumes. Find the sum of the digits of $N$ . (Assume that he must finish a volume before reading a new one.)
