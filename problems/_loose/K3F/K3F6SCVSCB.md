---
tag: K3F6SCVSCB
kind: problem
type: answer
answer: (z-x)\int_{y}^{z} f(u) \, \mathrm{d}u \ge (z-y)\int_{x}^{z} f(u) \, \mathrm{d}u
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213313
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f: [0,\infty)\to \mathbb{R}$ a non-decreasing function. Then show this inequality holds for all $x,y,z$ such that $0\le x<y<z$.
\begin{align*} & (z-x)\int_{y}^{z}f(u)\,\mathrm{du}\ge (z-y)\int_{x}^{z}f(u)\,\mathrm{du} \end{align*}
