---
tag: 44XDFFTZDH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequences $\left\{x_{n}\right\}$ and $\left\{y_{n}\right\}$ satisfy
$$
\begin{array}{l}
x_{1}=1, x_{n+1}=x_{n} \sqrt{\frac{1}{2\left(\sqrt{1-x_{n}^{2}}+1\right)}}, \\
y_{1}=0, y_{n+1}=\sqrt{\frac{y_{n}+1}{2}} .
\end{array}
$$

Prove: (1) $x_{n} x_{n+1}+y_{n} y_{n+1}=y_{n+1}$;
(2) If $a_{n}=x_{n}+y_{n}$, then
$$
a_{n} \leqslant \sqrt{2}(n=1,2, \cdots) \text {. }
$$
