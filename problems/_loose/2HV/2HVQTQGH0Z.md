---
tag: 2HVQTQGH0Z
kind: problem
type: answer
answer: '[5-2\ln2,\mathrm{e}^{2}-1]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100136
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the function $f(x)=\left\{\begin{array}{l}\frac{1}{2} x+\frac{3}{2}, x \leqslant 1 \\ \ln x, x>1\end{array} \right.$ ( $\ln x$ is the natural logarithm with base $\mathrm{e}$, $\left.\mathrm{e}=2.71828 \ldots\right)$, there exist real numbers $m, n(m<n)$, satisfying $f(m)=f(n)$, then the range of $n-m$ is $($ )
(A) $\left(0, \mathrm{e}^{2}+3\right)$
(B) $\left(4, \mathrm{e}^{2}-1\right]$
(C) $\left[5-2 \ln 2, \mathrm{e}^{2}-1\right]$
(D) $[5-2 \ln 2,4)$
