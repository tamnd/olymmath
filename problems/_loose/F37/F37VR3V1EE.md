---
tag: F37VR3V1EE
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128711
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $t$ be a positive integer greater than 3. Find the minimum value of $t$ such that there exist two positive integers $m, n$ satisfying: $m, n$ both have exactly $t$ positive divisors, and if the positive divisors of $m$ are arranged in ascending order as $c_{1}, c_{2}, \cdots, c_{t}$ (where $c_{1}=1, c_{t}=m$), and the positive divisors of $n$ are arranged in ascending order as $d_{1}, d_{2}, \cdots, d_{t}$ (where $d_{1}=1, d_{t}=n$), then there exists an integer $r(2 \leqslant r \leqslant t-2)$, such that
$$
(-1)^{i}\left(c_{i}-d_{i}\right)\left\{\begin{array}{l}
>0, i=2,3, \cdots, r \\
<0, i=r+1, \cdots, t
\end{array}\right.
$$
