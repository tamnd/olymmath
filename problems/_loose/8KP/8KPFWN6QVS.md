---
tag: 8KPFWN6QVS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=74
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam Vietnamese Mathematical Olympiad
---
The sequence of real numbers $(a_n)$ is defined by
$$
a_1 = 5 \text{and} a_n = \sqrt[n]{a_{n-1}^{n-1} + 2^{n-1} + 2 \cdot 3^{n-1}} \text{for all } n \ge 2.
$$
Prove that the sequence $(a_n)$ is decreasing.
