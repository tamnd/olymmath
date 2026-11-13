---
tag: 9WQSMB5GKN
kind: problem
type: answer
answer: \frac{365}{999}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93225
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $0 \leqslant a_{k} \leqslant 9, a=0 . a_{1} a_{2} a_{3} \cdots a_{n} \cdots$ (i.e., $a=\frac{a_{1}}{10}+\frac{a_{2}}{10^{2}}+\frac{a_{3}}{10^{3}}+\cdots+\frac{a_{n}}{10^{n}}+\cdots$). If there are infinitely many $a_{1}, a_{2}, a_{3}, \cdots, a_{n}, \cdots$ that are not 0, then $a$ is called a decimal infinite fraction.
If $a$ is a decimal infinite fraction, and there exist natural numbers $n, k$ such that $a_{n+i}=a_{n+k+i}$ for any natural number $i$, then $a$ is called a repeating decimal; otherwise, $a$ is called a non-repeating decimal. For example, $0.19898 \cdots 98 \cdots$ and $0.8=0.799 \cdots 9 \cdots$ are repeating decimals, $\frac{\pi}{10}=0.314159 \cdots$ is a non-repeating decimal.
It is known that every number in $(0,1]$ corresponds one-to-one with a decimal infinite fraction.
(1) Prove that if $(a, b) \subset(0,1)$, then there exists a repeating decimal $c \in(a, b)$. That is, repeating decimals are dense in $(0,1)$.
(2) Prove that all numbers in $(0,1]$ cannot be arranged into a sequence $\alpha_{1}, \alpha_{2}, \alpha_{3}, \cdots, \alpha_{n}, \cdots$. That is, $(0,1]$ is an uncountable set.
(3) Express the repeating decimal $a=0.365365 \cdots 365 \cdots$ as a fraction.
