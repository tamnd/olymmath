---
tag: VZRDQNYDF0
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161133
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all digits $n$ and 2018-digit natural numbers $x, x=\overline{a_{2017} \ldots a_{2} a_{1} a_{0}}$, such that

$$
n \cdot x=\overline{\left(a_{2017}+n\right) \ldots\left(a_{2}+n\right)\left(a_{1}+n\right)\left(a_{0}+n\right)}
$$
