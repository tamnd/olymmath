---
tag: AJSCQ056FY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=156
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
For $n \ge 1$, let $P_n(x)$ be the polynomial defined by $P_1(x) = 1$, $P_2(x) = 2x$, and
$$
P_n(x) = 2x P_{n-1}(x) - (x^2 + 1) P_{n-2}(x)
$$
for $n \ge 3$. Prove that we have $|P_n(x)| \le (1 + x^2)^{n/2}$ for any positive integer $n$ and real number $x$, and determine the conditions under which equality holds.
