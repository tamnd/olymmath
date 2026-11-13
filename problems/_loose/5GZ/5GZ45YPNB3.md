---
tag: 5GZ45YPNB3
kind: problem
type: answer
answer: x_{2n} = 2^n + floor(2^n * sqrt(2)) and x_{2n+1} = 2^{n+1} + floor(2^n * sqrt(2)) for all n.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=135
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
The sequence $(x_n)$ is defined by
$$
x_0 = 2,\ x_{n+1} = [\sqrt{2x_n(x_n+1)}],\ \forall n \in \mathbb{N}^*
$$
Prove that $x_{2n} = 2^n + [2^n\sqrt{2}]$ and $x_{2n+1} = 2^{n+1} + [2^n\sqrt{2}]$ for all $n \in \mathbb{N}^*$.
