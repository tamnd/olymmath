---
tag: RYTB1BFYG7
kind: problem
type: answer
answer: f(x)=xorf(x)=-x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92167
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbf{R} \rightarrow \mathbf{R}$ such that for all $x, y \in \mathbf{R}$, we have
$$
f(x f(y)) + x = x y + f(x).
$$
(2014, Singapore Mathematical Olympiad)
