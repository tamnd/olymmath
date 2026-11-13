---
tag: 95TV0CFAF7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1896557
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55610
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248977
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Soviet_Union/train/0001.parquet#row=272
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
An $m \times n$ rectangle is divided into mn unit squares by lines parallel to its sides. A gnomon is the figure of three unit squares formed by deleting one unit square from a $2 \times 2$ square. For what $m, n$ can we divide the rectangle into gnomons so that no two gnomons form a rectangle and no vertex is in four gnomons?
