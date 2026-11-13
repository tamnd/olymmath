---
tag: Z3DAW9F3FS
kind: problem
type: answer
answer: \frac{\pi}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178921
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $n \in \mathbb{N}^{*}$ consider the function $f_{n}:[0, n] \rightarrow \mathbb{R}$ given by $f_{n}(x)=\operatorname{arctg}([x])$, where $[x]$ represents the integer part of the real number $x$. Show that $f_{n}$ is integrable and determine $\lim _{n \rightarrow \infty} \frac{1}{n} \int_{0}^{n} f_{n}(x) \mathrm{d} x$.
