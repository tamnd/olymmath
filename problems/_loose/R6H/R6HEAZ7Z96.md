---
tag: R6HEAZ7Z96
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162880
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=255
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
Prove that the inequality

$$
x^{2}+y^{2}+1 \geq 2(x y-x+y)
$$

holds for any pair of real numbers $x$ and $y$. When does equality hold?
