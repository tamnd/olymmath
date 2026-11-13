---
tag: BHCR80AQ70
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246300
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all the quaterns $(x,y,z,w)$ of real numbers (not necessarily distinct) that solve the following system of equations:
$$x+y=z^2+w^2+6zw$$
$$x+z=y^2+w^2+6yw$$
$$x+w=y^2+z^2+6yz$$
$$y+z=x^2+w^2+6xw$$
$$y+w=x^2+z^2+6xz$$
$$z+w=x^2+y^2+6xy$$
