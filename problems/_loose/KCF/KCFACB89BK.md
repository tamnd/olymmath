---
tag: KCFACB89BK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162903
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=359
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo
    source: hf-mathnet
    label: Slovenia National Math Olympiad
---
Prove that for every pair of real numbers $x$ and $y$, the inequality

$$
|x+y|+|x+1|+|y+1| \geq 2 \text {. }
$$

holds. For which numbers $x$ does there exist a number $y$ such that $|x+y|+|x+1|+|y+1|=2$?
