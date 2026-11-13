---
tag: P8S9APVPV1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h375046
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44155
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240428
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/1998
    source: hf-ai-mo-aops
    label: 1998 Iran MO (3rd Round)
---
Let $n(r)$ be the maximum possible number of points with integer coordinates on a circle with radius $r$ in Cartesian plane. Prove that $n(r) < 6\sqrt[3]{3 \pi r^2}.$
