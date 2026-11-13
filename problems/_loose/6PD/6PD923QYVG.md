---
tag: 6PD923QYVG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220632
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$X$ is a set of $2020$ distinct real numbers. Prove that there exist $a,b\in \mathbb{R}$ and $A\subset X$ such that
$$\sum_{x\in A}(x-a)^2 +\sum_{x\in X\backslash A}(x-b)^2\le \frac{1009}{1010}\sum_{x\in X}x^2$$
