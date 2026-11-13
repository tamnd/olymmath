---
tag: GW3SGY7K8M
kind: problem
type: answer
answer: f(x,y,z)=(y-z)(z-x)(x-y)(xyz+x+y+z)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115834
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Factorize $f(x, y, z)=\left(y^{2}-z^{2}\right)(1+x y)(1+x z)+\left(z^{2}-x^{2}\right)(1+y z)(1+$ $x y)+\left(x^{2}-y^{2}\right)(1+y z)(1+x z)$.
