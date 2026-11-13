---
tag: VSD909RT6D
kind: problem
type: answer
answer: All integer pairs with exactly one even and |a−b|>1; pairs with |a−b|=1 do not work.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=56
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 58th Ukrainian National Mathematical Olympiad
---
Determine all possible pairs of integers $a, b$ so that exactly one of them is even and so that there are non-integer $x, y$, such that both $x+y$ and $ax+by$ are integer?
