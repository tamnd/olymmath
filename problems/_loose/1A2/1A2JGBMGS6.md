---
tag: 1A2JGBMGS6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98414
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
8 From any $n(n \geqslant 2)$ given positive numbers $a_{1}, a_{2}, \cdots, a_{n}$, each time take $k$ numbers to form a product, the $k$-th root of the arithmetic mean of all such products is called the $k$-th symmetric mean of these $n$ numbers, denoted as $A_{k}$, that is,
$$
A_{k}=\left(\frac{a_{1} a_{2} \cdots a_{k}+a_{1} a_{3} \cdots a_{k+1}+\cdots+a_{n-k+1} \cdots a_{n-1} a_{n}}{C_{n}^{k}}\right)^{\frac{1}{k}} .
$$

Prove: If $1 \leqslant k_{1}<k_{2} \leqslant n$, then $A_{k_{1}} \geqslant A_{k_{2}}$.
