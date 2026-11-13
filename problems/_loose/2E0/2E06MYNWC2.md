---
tag: 2E06MYNWC2
kind: problem
type: answer
answer: P=\(xy+x^{2}-z+w),Q=\(x+y)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79036
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Determine the polynomials $P(x, y, z, w)$ and $Q(x, y, z, w)$ satisfying:

$$
(x y+z+w)^{2}-\left(x^{2}-2 z\right)\left(y^{2}-2 w\right)=(P(x, y, z, w))^{2}-\left(x^{2}-2 z\right)(Q(x, y, z, w))^{2}
$$
