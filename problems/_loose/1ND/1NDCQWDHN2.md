---
tag: 1NDCQWDHN2
kind: problem
type: answer
answer: lim x_n = 0, lim y_n = 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=151
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam VMO
---
Let $(x_n)$, $(y_n)$ be two positive sequences defined by $x_1 = 1$, $y_1 = \sqrt{3}$ and
$$
\begin{cases} x_{n+1}y_{n+1} - x_n = 0 \\ x_{n+1}^2 + y_n = 2 \end{cases}
$$
for all positive integers $n$. Prove that these sequences are convergent and find their limits.
