---
tag: Z652KDPHC5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=144
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Let $n$ be a fixed positive integer. Let $X$ be a finite set and let $f_1, f_2, \dots, f_n$ and $g_1, g_2, \dots, g_n: X \to [0, 1]$ be functions satisfying
$$
\sum_{x \in X} f_i(x) = \sum_{x \in X} g_j(x) = S \text{and} \sum_{x \in X} f_i(x)g_j(x) = |i - j|
$$
for all $1 \le i, j \le n$. Here $[0, 1] = \{0 \le t \le 1\}$ is the unit interval.
(1) Prove that $S \ge n - 1$.
(2) For $S = n - 1$, find an example of a finite set $X$ and functions $f_1, f_2, \dots, f_n$ and $g_1, g_2, \dots, g_n: X \to [0, 1]$ satisfying the condition of the problem.
(Otgonbayar Uuye)
