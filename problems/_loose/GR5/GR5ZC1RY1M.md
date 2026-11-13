---
tag: GR5ZC1RY1M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=228
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
For each positive integer $n$, let
$$
C_n = \frac{1}{n+1} \binom{2n}{n},
$$
where, as usual,
$$
\binom{2n}{n} = \frac{(2n)!}{(n!)^2}.
$$
(i) Prove that $C_n$ is an integer for every positive integer $n$.
(ii) Prove that $C_n$ is not a prime number if $n > 3$.
