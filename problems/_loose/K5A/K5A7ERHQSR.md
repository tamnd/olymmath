---
tag: K5A7ERHQSR
kind: problem
type: answer
answer: 10(2^{10n}-2^{9n})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100908
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $F$ be the set of all sequences of the form $\left(A_{1}, A_{2}, \cdots, A_{n}\right)$, where $A_{i}$ is a subset of $B=\{1,2, \cdots, 10\}$, and let $|A|$ denote the number of elements in the set $A$. Then $\sum_{F}\left|\bigcup_{i=1}^{n} A_{i}\right|=$ $ $
