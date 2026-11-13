---
tag: KFHFFWJYNG
kind: problem
type: answer
answer: \frac{1}{n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107461
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Proof: For any $m, n, k \in \mathbf{N}_{+}$, when $k \leqslant m \leqslant n$, we have
$$
\sum_{i=0}^{n}(-1)^{i} C_{m}^{i} C_{m+n+i}^{n+1} \cdot \frac{1}{n+k+i}=\frac{1}{n+1} .
$$
