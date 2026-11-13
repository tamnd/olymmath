---
tag: CYWQB343CY
kind: problem
type: answer
answer: x\geq\frac{1}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78478
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We write the number 1, $n$ times. At each step, we replace 2 of the written numbers $a$ and $b$ with $\frac{a+b}{4}$ (thus $a$ and $b$ are then erased). After $n-1$ steps, only one number remains, denoted as $x$. Show that $x \geq \frac{1}{n}$.
