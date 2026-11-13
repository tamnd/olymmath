---
tag: SK6HV6GD66
kind: problem
type: answer
answer: f(n) = n for all positive integers n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 66th ROMANIAN MATHEMATICAL OLYMPIAD
---
Find all functions $f : \mathbb{N}^* \to \mathbb{N}^*$ fulfilling the relation
$$
d(x, f(y)) \cdot m(f(x), y) = d(x, y) \cdot m(f(x), f(y)), \text{ for every } x, y \in \mathbb{N}^*,
$$
where $d(a, b)$ and $m(a, b)$ signify the greatest common divisor, respectively the lowest common multiple of the positive integers $a$ and $b$.
