---
tag: 34H1A5QENH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1896545
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55601
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248968
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Soviet_Union/train/0001.parquet#row=258
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1992
    source: hf-ai-mo-aops
    label: 1992 All Soviet Union Mathematical Olympiad
---
Half the cells of a $2m \times n$ board are colored black and the other half are colored white. The cells at the opposite ends of the main diagonal are different colors. The center of each black cell is connected to the center of every other black cell by a straight line segment, and similarly for the white cells. Show that we can place an arrow on each segment so that it becomes a vector and the vectors sum to zero.
