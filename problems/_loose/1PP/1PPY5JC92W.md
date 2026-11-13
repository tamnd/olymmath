---
tag: 1PPY5JC92W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=113
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
連續正整數的等幂次方和的定義是
$$
S_m(N) = \sum_{k=1}^{N-1} k^m
$$
特別是
$$
S_1(N) = 1 + 2 + \cdots + (N-1) = \frac{N(N-1)}{2}
$$
$$
S_2(N) = 1^2 + 2^2 + \cdots + (N-1)^2 = \frac{N(N-1)(2N-1)}{6}
$$
$$
S_3(N) = 1^3 + 2^3 + \cdots + (N-1)^3 = \frac{N^2(N-1)^2}{4}
$$
證明
$$
S_2(N)S_3(N) = \frac{7}{12}S_6(N) + \frac{5}{12}S_4(N)
$$
