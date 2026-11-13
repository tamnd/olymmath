---
tag: KCV5D5E9FF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1987 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1890600
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55492
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25639
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Soviet_Union/train/0001.parquet#row=154
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1987
    source: hf-ai-mo-aops
    label: 1987 All Soviet Union Mathematical Olympiad
  - at: ru-allrussian
    source: hf-mathnet
    label: Soviet Union 21st ASU
---
Prove that for every natural $n$ the following inequality is held: $$ (2n + 1)^n \ge (2n)^n + (2n - 1)^n $$
