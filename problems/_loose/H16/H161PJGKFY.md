---
tag: H161PJGKFY
kind: problem
type: answer
answer: 2^{n}-2^{-\frac{n}{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144282
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the sequence $\left\{a_{n}\right\}$, $a_{1}=t, a_{2}=t^{2}$, where $t \in\left(\frac{1}{2}, 2\right), x=\sqrt{t}$ is an extremum point of the function $f(x)=a_{n-1} x^{3}+3[(t+$ 1) $\left.a_{n}-a_{n+1}\right] x+1(n \geqslant 2)$. Let $b_{n}=\frac{2 a_{n}}{1+a_{n}^{2}}\left(n \in \mathbf{N}^{*}\right)$, prove that: $\sum_{i=1}^{n} \frac{1}{b_{i}}<$ $2^{n}-2^{-\frac{n}{2}}$.
