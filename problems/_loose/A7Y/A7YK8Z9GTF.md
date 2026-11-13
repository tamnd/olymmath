---
tag: A7YK8Z9GTF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254498
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=399
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 62nd Ukrainian National Mathematical Olympiad
---
In a galaxy far, far away there are $225$ inhabited planets. Between some pairs of inhabited planets there is a bidirectional space connection, and it is possible to reach any planet from any other (possibly with several transfers). The *influence* of a planet is the number of other planets with which this planet has a direct connection. It is known that if two planets are not connected by a direct space flight, they have different influences. What is the smallest number of connections possible under these conditions?

*Proposed by Arsenii Nikolaev, Bogdan Rublov*
