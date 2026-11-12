---
tag: AWW8HS0XT1
kind: problem
type: answer
answer: 10^{-100}<x_0<10^{-100+10^{-396}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37572
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate the smallest root $x_{0}$ of the equation

$$
x^{2}-\sqrt{\lg x+100}=0
$$

(with a relative error of no more than $10^{-390} \%$ ).
