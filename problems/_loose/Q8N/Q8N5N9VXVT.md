---
tag: Q8N5N9VXVT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=78
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Irish Mathematical Olympiad
---
The functions $f(n) = n^2$ and $f(n) = -n^2$ both satisfy the following equations:
$$
f(f(n) + 1) - f(f(n) - 1) = 4n^2
$$
Either show that there is no other function $f : \mathbb{Z} \to \mathbb{Z}$ satisfying the above equation for all $n \in \mathbb{Z}$, or prove that another such function exists.
