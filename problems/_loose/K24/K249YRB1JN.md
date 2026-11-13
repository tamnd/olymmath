---
tag: K249YRB1JN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1896535
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55593
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248960
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Soviet_Union/train/0001.parquet#row=270
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
$A$ and $B$ lie on a circle. $P$ lies on the minor arc $AB$ . $Q$ and $R$ (distinct from $P$ ) also lie on the circle, so that $P$ and $Q$ are equidistant from $A$ , and $P$ and $R$ are equidistant from $B$ . Show that the intersection of $AR$ and $BQ$ is the reflection of $P$ in $AB$ .
