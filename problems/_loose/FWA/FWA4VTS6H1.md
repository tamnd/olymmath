---
tag: FWA4VTS6H1
kind: problem
type: answer
answer: f(x)=where\in[1,2[
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f$ such that for all real numbers $x, y$ we have:

$$
f(x\lfloor y\rfloor)=\lfloor f(x)\rfloor f(y)
$$

where $\lfloor x\rfloor$ denotes the greatest integer $n$ such that $n \leq x$.
