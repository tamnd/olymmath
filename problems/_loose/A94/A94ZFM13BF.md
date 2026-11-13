---
tag: A94ZFM13BF
kind: problem
type: answer
answer: f(x)=1-\frac{x^{2}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113552
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$\mathbf{F 1 8}$ (40-6, Japan) Determine all functions $f: \mathbf{R} \rightarrow \mathbf{R}$, where $\mathbf{R}$ is the set of real numbers, such that for all $x, y \in \mathbf{R}$, the following equation always holds:
$$
f(x-f(y))=f(f(y))+x f(y)+f(x)-1
$$
