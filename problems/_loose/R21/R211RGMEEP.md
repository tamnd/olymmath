---
tag: R211RGMEEP
kind: problem
type: answer
answer: No such function exists.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=262
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way/2019
    source: hf-mathnet
    label: Baltic Way Baltic Way 2019
---
Find all functions $f: \mathbb{R} \to [-2019, 2019]$, for which
$$
2f(f(x)) + f(f(-x)) + 8f(x) + 4f(-x) + 4x = 0
$$
for all real numbers $x$.
