---
tag: 2QNN6SZYAF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146602
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}, a_{1}=1, a_{n}<a_{n+1}$, let $\left\{b_{n}\right\}$ be $b_{n}=\frac{a_{n+1}-a_{n}}{a_{n+1}} \cdot \frac{1}{\sqrt{a_{n-1}}}, S_{n}=b_{1}+b_{2}+$ $\cdots+b_{n}$,
(1) Prove that $b_{n}<2\left(\frac{1}{\sqrt{a_{n}}}-\frac{1}{\sqrt{a_{n+1}}}\right)$;
(2) Prove that $0<S_{n}<2$;
(3) If $\left\{a_{n}\right\}$ is a geometric sequence with common ratio $r \geqslant 3$, then $0<S_{n}<1$;
(4) Prove that when $a_{n}=a^{-2(n-1)}(0<a<1)$ and $\sqrt{\frac{c}{2}}<a<1$, there exists an item $S_{N}$ in the sequence $\left\{S_{n}\right\}$ such that all items after $S_{N}$ are greater than $c$.
