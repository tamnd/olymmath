---
tag: 5AF96V1SCB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252909
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n \geq 2$ reals $x_1 , x_2 , \dots , x_n.$ Show that
$$\prod_{1\leq i < j \leq n} (x_i - x_j)^2 \leq \prod_{i=0}^{n-1} \left(\sum_{j=1}^{n} x_j^{2i}\right)$$
and find all the $(x_1 , x_2 , \dots , x_n)$ where the equality holds.
