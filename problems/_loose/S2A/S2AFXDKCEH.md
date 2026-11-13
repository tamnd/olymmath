---
tag: S2AFXDKCEH
kind: problem
type: answer
answer: f_{1}(x)=x+2006\text{}f_{2}(x)=-x+2006
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75979
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all functions $f: \mathbb{Z} \rightarrow \mathbb{Z}$ such that for all integers $x$, $y$ the following holds:

$$
f(f(x)+y)=x+f(y+2006) .
$$
