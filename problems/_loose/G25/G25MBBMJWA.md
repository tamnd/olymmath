---
tag: G25MBBMJWA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=24719
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Construct schemes corresponding to the 7 arithmetic fractional-linear functions

$$
\frac{4 x+1}{2 x+3}, \frac{2 x+1}{3 x+2}, \frac{3 x-1}{x+1}
$$

Consider two fractional-linear functions

$$
f(x)=\frac{a x+b}{c x+d} \text{and} g(x)=\frac{-d x+b}{c x-a}
$$

It is not hard to see that if $f(x)$ maps a number $m$ to a number $n$, i.e., $f(m)=n$, then $g(x)$ maps $n$ back to $m$, $g(n)=m$. The scheme of the function $g(x)$ is obtained from the scheme of the function $f(x)$ by simply reversing the direction of all arrows.

Such a function $g(x)$ is called the inverse of $f(x)$ (the function $f(x)$, in turn, is the inverse of $g(x)$). The function inverse to $f(x)$ will be denoted by $f_{-1}(x)$.
