---
tag: V1H6ERX37Z
kind: problem
type: answer
answer: a_n = n for all n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=384
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
Determine all sequences $(a_n)$ of positive integers such that
$$
\frac{1}{2} < \frac{\gcd(a_r, a_s)}{\gcd(r, s)} < 2,
$$
for all positive integers $r, s$.
