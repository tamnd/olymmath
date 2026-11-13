---
tag: N3FH5SQ1BT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179424
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=253
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2018
    source: hf-mathnet
    label: Romania 2018 Romanian Mathematical Olympiad
---
a) Consider the non-zero natural numbers $a, b, c$ such that $a<b<c$ and $a^{2}+b^{2}=c^{2}$. Prove that if $a_{1}=a^{2}, a_{2}=a b, a_{3}=b c, a_{4}=c^{2}$, then $a_{1}^{2}+a_{2}^{2}+a_{3}^{2}=a_{4}^{2}$ and $a_{1}<a_{2}<a_{3}<a_{4}$.

b) Prove that for any $n \in \mathbb{N}, n \geq 3$, there exist non-zero natural numbers $a_{1}, a_{2}, \ldots, a_{n}$ that satisfy the relations $a_{1}^{2}+a_{2}^{2}+\ldots+a_{n-1}^{2}=a_{n}^{2}$ and $a_{1}<a_{2}<\ldots<a_{n-1}<a_{n}$.
