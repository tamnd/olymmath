---
tag: Z5BATMXZS6
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
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=225
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia 51st Mongolian National Mathematical Olympiad
---
Find all maps $f: \mathbb{Z}_{\ge 1} \to \mathbb{Z}_{\ge 1}$ such that for any positive integers $a$ and $b$, the number
$$
af(a)^2 + bf(b)^2 + 3ab(f(a) + f(b))
$$
is a perfect cube.
