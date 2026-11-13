---
tag: TYMTT6722V
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115467
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the maximum value of the positive real number $k$ such that for any positive real numbers $a, b$, we have
$$
\sqrt{a^{2}+k b^{2}}+\sqrt{b^{2}+k a^{2}} \geq a+b+(k-1) \sqrt{a b}
$$
