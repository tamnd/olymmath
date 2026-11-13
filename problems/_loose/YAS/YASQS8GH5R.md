---
tag: YASQS8GH5R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129383
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(2003 Beijing College Entrance Examination for Science) Let $y=f(x)$ be a function defined on the interval $[-1,1]$, and satisfies the following conditions: (1) $f(-1)=f(1)=0$; (2) For any $u, v \in[-1,1]$, we have $|f(u)-f(v)| \leqslant|u-v|$.
(1) Prove: For any $x \in[-1,1]$, we have $x-1 \leqslant f(x) \leqslant 1-x$;
(2) Prove: For any $u, v \in[-1,1]$, we have $|f(u)-f(v)| \leqslant 1$;
(3) Does there exist an odd function $y=f(x)$ on the interval $[-1,1]$ that satisfies the given conditions and also satisfies
$$
\left\{\begin{array}{l}
|f(u)-f(v)|<|u-v|, u, v \in\left[0, \frac{1}{2}\right] ; \\
|f(u)-f(v)|=|u-v|, u, v \in\left[\frac{1}{2}, 1\right] .
\end{array}\right.
$$
If it exists, please provide an example; if not, please explain the reason.
