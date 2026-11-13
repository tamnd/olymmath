---
tag: 831AGJV9ZF
kind: problem
type: answer
answer: f(x) = 0 for all real x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=60
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/2008
    source: hf-mathnet
    label: Ukraine Ukrajina 2008
---
Find all the functions $f: \mathbb{R} \to \mathbb{R}$ so that
$$ f(f(y) + 2 + x) + f(f(y) - x) = y f(y)(x + 1) $$
is true for any real numbers $x$ and $y$.
