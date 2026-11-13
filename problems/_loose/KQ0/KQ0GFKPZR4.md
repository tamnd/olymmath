---
tag: KQ0GFKPZR4
kind: problem
type: answer
answer: \frac{3^{n-1}+1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146073
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A finite sequence of non-negative integers $a_{1}, a_{2}, \cdots, a_{n}\left(a_{1}=0\right)$ satisfies the following conditions:
(a) When $k \geqslant 2$, $a_{k} \leqslant u_{k}+1$. Here, $u_{2}=0$; when $k \geqslant 3$, $u_{k}$ is the number of elements in the set $\left\{i \mid a_{i}<a_{i+1}, 1 \leqslant i \leqslant\right.$ $k-2\}$.
(b) There do not exist $i, j, k(1 \leqslant i<j<k \leqslant n)$ such that $a_{j}<a_{i}<a_{k}$.
Find the number of such sequences.
