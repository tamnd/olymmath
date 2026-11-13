---
tag: WXRS3413FK
kind: problem
type: answer
answer: a) a_n = 1 + 1/n. b) S = 1 − 1/(n+1)^2, hence S < 1.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=17
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_n)_{n \ge 1}$ be the sequence given by $a_1 = 2$ and $a_{n+1} = 1 + \frac{1}{a_1 a_2 \dots a_n}$, $\forall n \ge 1$.

a) Find the general term of the sequence.

b) Put $S = \sum_{k=1}^{n} \frac{2}{(k^3 + k^2)a_{2k+1}}$ in a close form and show that $S < 1$.
