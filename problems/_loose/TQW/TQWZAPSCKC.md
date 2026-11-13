---
tag: TQWZAPSCKC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188480
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=264
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mk-mo
    source: hf-mathnet
    label: North Macedonia Junior Macedonian Mathematical Olympiad
---
Let $a, b$, and $c$ be positive real numbers such that $abc=1$. Prove that

$$
\frac{1}{2}(\sqrt{a}+\sqrt{b}+\sqrt{c})+\frac{1}{1+a}+\frac{1}{1+b}+\frac{1}{1+c} \geq 3
$$

When does equality hold?
