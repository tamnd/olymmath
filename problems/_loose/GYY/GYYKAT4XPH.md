---
tag: GYYKAT4XPH
kind: problem
type: answer
answer: \frac{\pi}{8}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241943
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(t)$ be the cubic polynomial for $t$ such that $\cos 3x=f(\cos x)$ holds for all real number $x$.
Evaluate

$$\int_0^1 \{f(t)\}^2 \sqrt{1-t^2}dt$$
