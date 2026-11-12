---
tag: W0P7QT9W5J
kind: problem
type: answer
answer: a_{100}\geqslant2^{100}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $a_{0}, a_{1}$, $a_{2}, \ldots, a_{99}, a_{100}$. It is known that $a_{1}>a_{0}, a_{2}=3 a_{1}-2 a_{0}, a_{3}=3 a_{2}-2 a_{1}, \ldots, a_{100}=3 a_{99}-2 a_{98}$. Prove that $a_{100}>2^{99}$.
