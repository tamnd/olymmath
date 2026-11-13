---
tag: BMZ1W6BFQ3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86160
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=180
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain L Olimpiada Matemática Española
---
Prove that

$$
2014^{2013}-1013^{2013}-1001^{2013}
$$

is a multiple of

$$
2014^{3}-1013^{3}-1001^{3}
$$
