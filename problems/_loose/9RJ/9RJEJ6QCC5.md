---
tag: 9RJEJ6QCC5
kind: problem
type: answer
answer: f(n, m) = n \mod m
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243355
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A function $g$ is such that for all integer $n$:
$$g(n)=\begin{cases}
1\hspace{0.5cm} \textrm{if}\hspace{0.1cm} n\geq 1 & \\
0 \hspace{0.5cm} \textrm{if}\hspace{0.1cm} n\leq 0 &
\end{cases}$$

A function $f$ is such that for all integers $n\geq 0$ and $m\geq 0$:
$$f(0,m)=0 \hspace{0.5cm} \textrm{and}$$
$$f(n+1,m)=\Bigl(1-g(m)+g(m)\cdot g(m-1-f(n,m))\Bigr)\cdot\Bigl(1+f(n,m)\Bigr)$$

Find all the possible functions $f(m,n)$ that satisfies the above for all integers $n\geq0$ and $m\geq 0$
