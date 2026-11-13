---
tag: 603QVRBEX9
kind: problem
type: answer
answer: 2+\sqrt{5}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123014
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $a, b(a \leqslant b)$. The sequence $\left\{f_{n}\right\}$ satisfies:
$$
f_{1}=a, f_{2}=b, f_{n+2}=f_{n+1}+f_{n}(n=1,2, \cdots) .
$$

If for any positive integer $n$, we have $\left(\sum_{k=1}^{n} f_{k}\right)^{2} \leqslant \lambda \cdot f_{n} f_{n+1}$, find the minimum value of the real number $\lambda$.
