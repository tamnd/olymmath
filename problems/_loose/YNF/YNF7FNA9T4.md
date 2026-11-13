---
tag: YNF7FNA9T4
kind: problem
type: answer
answer: abcd ≤ 1/81, with equality only when a = b = c = d = 1/3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=102
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Ireland
---
Suppose $a$, $b$, $c$, $d$ are positive numbers such that
$$
1 = 3abcd + 2(abc + bcd + dca + dab) + (ab + bc + cd + da + ac + bd).
$$
Prove that
$$
abcd \le \frac{1}{81},
$$
and that the inequality is strict unless $a = b = c = d = 1/3$.
