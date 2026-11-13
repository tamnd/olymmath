---
tag: E3TGHWA94R
kind: problem
type: answer
answer: All permutations of (4/3, 4/3, -5/3) and (5/3, -4/3, -4/3).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=12
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all triples $(x, y, z)$ of real numbers satisfying:
$$
\begin{aligned}
x^2 - yz &= |y - z| + 1, \\
y^2 - zx &= |z - x| + 1, \\
z^2 - xy &= |x - y| + 1.
\end{aligned}
$$
