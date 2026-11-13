---
tag: DSK83BS7XR
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
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam Vietnamese Mathematical Competitions
---
Find all functions $f: \mathbb{R} \to \mathbb{R}$ satisfying following conditions

i) $\lim_{x \to 0} f(x) = f(0) = 0,$

ii) $f(x)f(x^{1959} + x^{54}) = f(x^{2013} + x)$ for all $x \in \mathbb{R}$.
