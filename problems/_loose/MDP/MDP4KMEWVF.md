---
tag: MDP4KMEWVF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=219
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
Let $d_n = \sum_{k=0}^{2n} \frac{(-1)^k}{n+k} = \frac{1}{n} - \frac{1}{n+1} + \frac{1}{n+2} - \dots + \frac{1}{3n}$ for $n \ge 1$.
Prove that
$$
\frac{2}{3n+1} < d_n < \frac{2}{3n-2}.
$$
(Otgonbayar Uuye)
