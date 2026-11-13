---
tag: 25FFZQMAKT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126708
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $b \in R^{+}$, the sequence $\left\{a_{n}\right\}$ satisfies $a_{1}=b, a_{n}=\frac{n b a_{n-1}}{a_{n-1}+2 n-2}(n \geq 2)$.
(1) Find the general term formula of the sequence $\left\{a_{n}\right\}$;
(2) Prove: For all positive integers $n, a_{n} \leq \frac{b^{n+1}}{2^{n+1}}+1$.
