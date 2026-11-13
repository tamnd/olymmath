---
tag: RV3TVKQZ2R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/South_Africa/train/0000.parquet#row=44
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: za-samo
    source: hf-mathnet
    label: South Africa South-Afrika 2011-2013
---
Let $a_1, a_2, \dots, a_n$ be real numbers such that
$$
a_m + a_{m+1} + \dots + a_n \ge m + (m+1) + \dots + n
$$
for every $m = 1, 2, \dots, n$. Prove that
$$
a_1^2 + a_2^2 + \dots + a_n^2 \ge \frac{n(n+1)(2n+1)}{6}.
