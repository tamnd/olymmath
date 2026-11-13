---
tag: B5BQ2MJ4WY
kind: problem
type: answer
answer: "840"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=53
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
a) For each integer $a$ not divisible by $7$, let $N(a)$ denote the least among all positive integers $n$ such that $49$ divides $a^n - 1$. For each positive integer $N$, let $A_N := \{a \in \mathbb{Z} : 0 < a < 49 \text{ and } N(a) = N\}$. Show that
$$
\begin{align*}
|A_1| &= |A_2| = 1, & |A_3| &= |A_6| = 2, \\
|A_7| &= |A_{14}| = 6, & |A_{21}| &= |A_{42}| = 12
\end{align*}
$$
and $A_N = \emptyset$ for all other values of $N$.

b) Find the least positive integer $n$ such that $2009$ divides $a^n - 1$ for all integers $a$ relatively prime to $2009$.
