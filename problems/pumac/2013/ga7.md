---
tag: PD449XTK03
kind: problem
appearances:
  - at: pumac/2013/ga7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2013 official paper
    url: https://pumac.princeton.edu/s/PUMaC2013_GeometryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h563729
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10163
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212158
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given triangle $ABC$ and a point $P$ inside it, $\angle BAP=18^\circ$ , $\angle CAP=30^\circ$ , $\angle ACP=48^\circ$ , and $AP=BC$ . If $\angle BCP=x^\circ$ , find $x$ .
