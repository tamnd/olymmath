---
tag: MNGVBDWYN1
kind: problem
type: answer
answer: f(x) = x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Find all continuous functions $f : \mathbb{R} \to \mathbb{R}$ that satisfy conditions:
$f(0) = 0$ and $\forall x \in \mathbb{R}: f(2x) \geq x + f(x)$, $f(3x) \leq 2x + f(x)$.
