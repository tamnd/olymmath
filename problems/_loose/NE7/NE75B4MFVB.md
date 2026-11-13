---
tag: NE75B4MFVB
kind: problem
type: answer
answer: \frac{1}{32}(n^{2}-1)^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120540
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0000.parquet#row=305
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo
    source: hf-mathnet
    label: China Chinese Mathematical Olympiad
---
Given an integer $n \geqslant 3$, real numbers $a_{1}, a_{2}, \cdots, a_{n}$ satisfy $\min _{1 \leqslant i<j \leqslant n} \mid a_{i}-$ $a_{j} \mid=1$. Find the minimum value of $\sum_{k=1}^{n}\left|a_{k}\right|^{3}$.
