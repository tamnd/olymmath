---
tag: 7S1YE7BC2G
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246834
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let be two distinct natural numbers $ k_1 $ and $ k_2 $ and a sequence $ \left( x_n \right)_{n\ge 0} $ which satisfies
$$ x_nx_m +k_1k_2\le k_1x_n +k_2x_m, \forall m,n\in\{ 0\}\cup\mathbb{N}. $$

Calculate $ \lim_{n\to\infty}\frac{n!\cdot (-1)^{1+n}\cdot x_n^2}{n^n} . $
