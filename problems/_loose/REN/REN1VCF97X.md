---
tag: REN1VCF97X
kind: problem
type: answer
answer: k = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243331
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the greatest positive real number $ k$ such that the inequality below holds for any positive real numbers $ a,b,c$:
$$ \frac ab + \frac bc + \frac ca - 3 \geq k \left( \frac a{b + c} + \frac b{c + a} + \frac c{a + b} - \frac 32 \right).
$$
