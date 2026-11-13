---
tag: TMPRVXW9A8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=277
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Irish
---
Let $n$ be a positive integer and define
$$
f(j) = \binom{2j}{j} \cdot \binom{2n-2j}{n-j}, j = 0, 1, \dots, n.
$$
Prove that
(a) $f(j) \ge f(j+1)$, if $0 \le j < n/2$;
(b) $f$ is strictly convex, i.e.,
$$
f(j+1) + f(j-1) > 2f(j), j = 1, 2, \dots, n-1.
$$
