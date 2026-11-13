---
tag: 6W3J5EEGGV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110964
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$f(x)$ is a real-valued function defined on the set of real numbers $\mathbf{R}$, and satisfies: for any real numbers $x, y$,
$$
f(x+y)+f(x-y)+f(2 x)=4 f(x) f\left(\frac{x+y}{2}\right) f\left(\frac{y-x}{2}\right)-1
$$

and $f(1)=0$.
(1) Prove that $f(x)$ is an even function;
(2) Prove that $f(x)$ is a periodic function and find its period;
(3) For any integer, find $f(n)$.
