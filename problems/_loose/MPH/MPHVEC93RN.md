---
tag: MPHVEC93RN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138174
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies:
$$
\begin{array}{l}
a_{1}=\frac{\pi}{3}, 0<a_{n}<\frac{\pi}{3}, \\
\sin a_{n+1} \leqslant \frac{1}{3} \sin 3 a_{n}(n \geqslant 2) . \\
\text { Prove: } \sin a_{n}<\frac{1}{\sqrt{n}} .
\end{array}
$$
