---
tag: VF12X7XF6Y
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102484
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For non-negative integers $n, f(n)$ is determined by $f(0)=0, f(1)=1, f(n)$ $=f\left(\left[\frac{1}{2} n\right]\right)+n-2\left[\frac{1}{2} n\right]$, find the maximum value of $f(n)$ when $0 \leqslant n \leqslant 1997$.
