---
tag: 4XMCTNV5SD
kind: problem
type: answer
answer: f(x)=-x,f(x)=2x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=171179
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's determine all monotonic functions $ f $ defined on the set of real numbers such that for any real number $ x $,

$$
f(x) + 2x = f(f(x))
$$
