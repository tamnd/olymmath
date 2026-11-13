---
tag: CS93C2NMPM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $t$ be a given real number, and let $f$ be a function defined on the set of real numbers such that

$$
f(0)=\frac{1}{2} \text { and } f(x+y)=f(x) \cdot f(t-y)+f(y) \cdot f(t-x)
$$

for all real $x$ and $y$. Prove that the function $f$ is constant.
