---
tag: F7E88YWM2R
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117236
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequences $\left\{a_{n}\right\}$ and $\left\{b_{n}\right\}$ satisfy:
$$
a_{1}=3, b_{1}=1
$$

and for any $n \in \mathbf{Z}_{+}$, we have
$$
\left\{\begin{array}{l}
a_{n+1}=a_{n}+b_{n}+\sqrt{a_{n}^{2}-a_{n} b_{n}+b_{n}^{2}}, \\
b_{n+1}=a_{n}+b_{n}-\sqrt{a_{n}^{2}-a_{n} b_{n}+b_{n}^{2}} .
\end{array}\right.
$$
(1) Find the general terms of the sequences $\left\{a_{n}\right\}$ and $\left\{b_{n}\right\}$;
(2) Let $[x]$ denote the greatest integer not exceeding the real number $x$, and let $S_{n}=\sum_{i=1}^{n}\left[a_{i}\right], T_{n}=\sum_{i=1}^{n}\left[b_{i}\right]$. Find the smallest $n \in \mathbf{Z}_{+}$ such that
$$
\sum_{k=1}^{n}\left(S_{k}+T_{k}\right)>2017
$$
