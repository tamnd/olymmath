---
tag: JTMZWA1H9H
kind: problem
type: answer
answer: A = \{f(x) = x + a \quad \forall a \in B\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252756
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all finite and non-empty sets $A$ of functions $f: \mathbb{R} \mapsto \mathbb{R}$ such that for all $f_1, f_2 \in A$, there exists $g \in A$ such that for all $x, y \in \mathbb{R}$
$$f_1 \left(f_2 (y)-x\right)+2x=g(x+y)$$
