---
tag: 3KXNFRZ73N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=69487
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of positive numbers $q_{1}, \ldots, q_{n}, \ldots$, a sequence of polynomials is constructed as follows:

$$
\begin{aligned}
& f_{0}(x)=1 \\
& f_{1}(x)=x \\
& \ldots \\
& f_{n+1}(x)=\left(1+q_{n}\right) x f_{n}(x)-q_{n} f_{n-1}(x)
\end{aligned}
$$

Prove that all real roots of the $n$-th polynomial are contained between -1 and 1.
