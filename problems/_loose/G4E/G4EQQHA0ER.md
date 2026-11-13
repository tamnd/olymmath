---
tag: G4EQQHA0ER
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Abels Math Contest (Norwegian MO) Final
    url: https://artofproblemsolving.com/community/c6h357232
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4506
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206654
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2010
    source: hf-ai-mo-aops
    label: 2010 Abels Math Contest (Norwegian MO) Final
---
Let $n > 2$ be an integer. Show that it is possible to choose $n$ points in the plane, not all of them lying on the same line, such that the distance between any pair of points is an integer (that is, $\sqrt{(x_1 -x_2)^2 +(y_1 -y_2)^2}$ is an integer for all pairs $(x_1, y_1)$ and $(x_2, y_2)$ of points).
