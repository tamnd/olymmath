---
tag: 6HY3HXM8AY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=47
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Irska
---
Let $a_1, a_2, a_3, a_4, \dots$ be a sequence of non-negative integers such that
$$
a_{n+2} = \binom{a_{n+1}}{a_n},
$$
where
$$
\binom{m}{k} = \begin{cases} \frac{m!}{k!(m-k)!} & \text{if } m \ge k, \\ 0 & \text{otherwise.} \end{cases}
$$
Prove that such a sequence tends to infinity if and only if $2 \le a_1 \le a_2 - 2$.
