---
tag: REYEPJMXWR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246033
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ and $k$ are integers with $n>0$. Prove that $$-\frac{1}{2n}\sum^{n-1}_{m=1}\cot \frac{\pi m}{n}\sin \frac{2\pi km}{n}= \begin{cases}\tfrac{k}{n}-\lfloor\tfrac{k}{n}\rfloor-\frac12 & \text{if }k|n \\ 0 & \text{otherwise}\end{cases}.$$
