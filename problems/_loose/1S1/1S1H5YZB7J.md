---
tag: 1S1H5YZB7J
kind: problem
type: answer
answer: b_{n}=2^{2-\frac{1}{2^{n-1}}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98408
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left\{a_{n}\right\}$ with all terms being positive numbers satisfy $a_{1}=2, a_{n}=a_{n}^{+}+1 a_{n+2}\left(n \in \mathbf{N}^{*}\right)$, and let $b_{n}=$ $a_{1} a_{2} \cdots a_{n}$, and $b_{n}^{3} \geqslant 2 \sqrt{2}$ for $n \geqslant 2$ always holds, find the general term formula of the sequence $\left\{b_{n}\right\}$.
