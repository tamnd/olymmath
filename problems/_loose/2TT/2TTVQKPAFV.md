---
tag: 2TTVQKPAFV
kind: problem
type: answer
answer: f(x) = a x for all rational x and g(x) = 0 for all rational x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=251
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the functions $f : \mathbb{Q} \to \mathbb{Q}$ and $g : \mathbb{Q} \to \mathbb{Q}$ for which
$$
g(f(x+y)) = f(x) + y g(y) - a x, \forall x, y \in \mathbb{Q},
$$
where $a \in \mathbb{Q}^*$ is given.
