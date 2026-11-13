---
tag: 6R1PPXXHZF
kind: problem
type: answer
answer: b_{n}=\frac{(v-a_{1})(v-a_{2})(v-a_{3})\ldots(v-a_{n})}{v^{n-1}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=173254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A barrel contains $v$ liters of wine. From this, we successively draw $a_{1}, a_{2}, \ldots, a_{n}$ liters, always replacing the removed amount with water. How much wine remains in the barrel after the $n$-th draw?
