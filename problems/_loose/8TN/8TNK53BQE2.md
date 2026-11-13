---
tag: 8TNK53BQE2
kind: problem
type: answer
answer: f(x)=x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99586
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Try to find all mappings $f: \mathbf{R} \rightarrow \mathbf{R}$, such that for all $x$, $y \in \mathbf{R}$, we have
$$
f\left(x^{2}+f(y)\right)=y+(f(x))^{2} .
$$
