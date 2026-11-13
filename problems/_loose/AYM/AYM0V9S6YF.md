---
tag: AYM0V9S6YF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=163
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc/2012
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabia Mathematical Competitions 2012
---
Let $a_1, a_2, \dots$ be a sequence of positive integers such that
$$
a_{n+1} = \begin{cases} \frac{a_n}{2} & \text{if } a_n \text{ is even,} \\ 2^r + \frac{a_n+1}{2} & \text{if } a_n \text{ is odd and } 2^{r-1} \le a_n < 2^r. \end{cases}
$$
Prove that no matter what the value of $a_1$ is, there exists an $N$ such that for all $n > N$, $a_n = a_{n+2}$.
