---
tag: 22VR8AW2ZQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=151
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
Let $a_1, a_2, \ldots$ be the sequence given by $a_1 = 1$ and $a_{n+1} = \frac{2n+1}{2n+4} a_n$ for $n \ge 1$.

(1)
Prove that the sequence $b_n = a_n^2 \times n(n+1)^2$ is increasing.

(2)
Prove
$$
\left(\frac{1}{n}\right)^{3/2} \le a_n < \left(\frac{2}{n}\right)^{3/2}
$$
for all $n$.
