---
tag: Z4V6EWTCYA
kind: problem
type: answer
answer: f(x)=0,\quadf(x)=x^{2},\quadf(x)=-x^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91427
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{R} \rightarrow \mathbb{R}$ such that for all real $x, y$ holds

$$
f(f(x)-f(y))=(x-y)^{2} f(x+y)
$$
