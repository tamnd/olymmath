---
tag: KENS3FNKN9
kind: problem
type: answer
answer: "7938"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154105
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=238
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 13th Philippine Mathematical Olympiad
---
Let $a=\frac{\sqrt{5}+\sqrt{3}}{\sqrt{5}-\sqrt{3}}$ and $b=\frac{\sqrt{5}-\sqrt{3}}{\sqrt{5}+\sqrt{3}}$. Find the value of $a^{4}+b^{4}+(a+b)^{4}$.
