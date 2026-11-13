---
tag: TXS6D5BRRQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=64
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia 46th Mongolian Mathematical Olympiad
---
Let $k, n$ be positive integers. Given $A_0, A_1, \dots, A_n$ points and edges that connect them are colored with $k$ colors. $S(n, k)$ is the maximum number of angles, whose sides are colored with different colors. Prove that
$$
S(n, k) > \binom{k}{2} \cdot \left[\frac{n}{k}\right]^2 \cdot n.
$$
