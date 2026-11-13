---
tag: CT9DJ99DJX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[0,+\infty) \rightarrow \mathbb{R}$ be a function for which $\lim _{\substack{x \rightarrow 0 \\ x>0}} f(x)$ exists and is finite.

Show that if $f\left(\frac{x+y}{2}\right)=f(\sqrt{x y})$ for all $x, y>0$, then $f$ is a constant function.
