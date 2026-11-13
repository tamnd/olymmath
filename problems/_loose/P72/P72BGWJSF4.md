---
tag: P72BGWJSF4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1904896
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17899
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219474
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=239
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2019
    source: hf-ai-mo-aops
    label: 2019 Iran MO (3rd Round)
  - at: ir-mo
    source: hf-mathnet
    label: Iran 37th Iranian Mathematical Olympiad
---
Let $T$ be a triangulation of a $100$ -gon.We construct $P(T)$ by copying the same $100$ -gon and drawing a diagonal if it was not drawn in $T$ an there is a quadrilateral with this diagonal and two other vertices so that all the sides and diagonals(Except the one we are going to draw) are present in $T$ .Let $f(T)$ be the number of intersections of diagonals in $P(T)$ .Find the minimum and maximum of $f(T)$ .
