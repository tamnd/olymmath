---
tag: 87NW2XHVWA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189903
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a function $f:[0,1] \rightarrow[0,1]$ such that $0,1 \in f([0,1])$ and for all $x, y \in[0,1]$ it holds that

$$
|f(x)-f(y)| \leq \frac{|x-f(x)|+|y-f(y)|}{2}
$$

Prove that there exists exactly one number $x \in[0,1]$ such that $f(x)=x$.
