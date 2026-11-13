---
tag: Y06WB4PV6D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165749
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's denote the greatest common divisor of integers $a$ and $b$ by $a * b$, and the least common multiple by $a \circ b$. Show that for any natural numbers $a, b, c$, the following holds:

$$
a *(b \circ c)=(a * b) \circ(a * c)
$$

and

$$
a \circ(b * c)=(a \circ b) *(a \circ c)
$$
