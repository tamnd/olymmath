---
tag: 76RYNDF57M
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131242
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=185
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league
    source: hf-mathnet
    label: China China Mathematical Competition
---
Let the function $f(x)=\left|2-\log _{3} x\right|$, positive real numbers $a, b, c$ satisfy $a<b<c$, and $f(a)=2 f(b)=2 f(c)$. Find the value of $\frac{a c}{b}$.
