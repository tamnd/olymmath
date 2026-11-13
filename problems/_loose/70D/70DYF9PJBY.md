---
tag: 70DYF9PJBY
kind: problem
type: answer
answer: \frac{1}{2} \left(\frac{n+\frac{3}{2}}{n+\frac{1}{2}}\right)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241879
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be positive numbers. Consider the following region on $xy$ plane.

$$ D_n=\left\{(x,y) |\ \frac{x}{n+\frac{1}{2}}\leq y\leq [x+1]-x,\ x\geq 0 \right\}. $$

Here $\ [x]$ is the greatest integer $\ \leq x.$ Find the area of $D_n.$
