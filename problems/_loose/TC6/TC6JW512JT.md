---
tag: TC6JW512JT
kind: problem
type: answer
answer: b_{n}<3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130518
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $b_{1}=1$, for positive integers $n$ greater than 1, let
$$
b_{n}=b_{n-1} \cdot n^{f(n)}, f(n)=2^{1-n}.
$$

Prove: For all positive integers $n, b_{n}<3$.
