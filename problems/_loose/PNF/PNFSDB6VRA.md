---
tag: PNFSDB6VRA
kind: problem
type: answer
answer: D_{n}=n!(1-\frac{1}{1!}+\frac{1}{2!}+\cdots+\frac{(-1)^{n}}{n!})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94802
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Derangement) If a permutation $\left\{i_{1}, i_{2}, \cdots, i_{n}\right\}$ of $\{1,2, \cdots, n\}$ satisfies $i_{1} \neq 1, i_{2} \neq 2, \cdots$, $i_{n} \neq n$, then $\left\{i_{1}, i_{2}, \cdots, i_{n}\right\}$ is called a derangement of $\{1,2, \cdots, n\}$. Try to find the number of all derangements $D_{n}$ of $\{1,2, \cdots, n\}$.
