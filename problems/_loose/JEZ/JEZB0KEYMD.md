---
tag: JEZB0KEYMD
kind: problem
type: answer
answer: "404"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203874
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer $n\geq 4$ is called *interesting* if there exists a complex number $z$ such that $|z|=1$ and $$1+z+z^2+z^{n-1}+z^n=0.$$ Find how many interesting numbers are smaller than $2022.$
