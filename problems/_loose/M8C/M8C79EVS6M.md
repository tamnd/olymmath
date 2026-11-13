---
tag: M8C79EVS6M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261649
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N_0$ be the set of all non-negative integers. Let $f : N_0 \times N_0 \to N_0$ be a function such that for all non-negative integers $a,b$:
$$f(a,b) = f(b,a),$$
$$f(a,0) = 0,$$
$$f(a+b,b) = f(a,b) +b.$$
Compute $$\sum_{i=0}^{30}\sum_{j=0}^{2^i-1}f(2^i, j)$$
