---
tag: GE9VYA2TAB
kind: problem
type: answer
answer: b
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=174139
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For real numbers $a$ and $b$, when proving the inequality

$$
a^{2}-a b+b^{2} \geq a b,
$$

we move the $a^{2}$ term to the right side:

$$
-a b+b^{2} \geq a b-a^{2}
$$

which simplifies to

$$
b(b-a) \geq a(b-a),
$$

from which we get

$$
b \geq a.
$$

However, if we move the $b^{2}$ term to the right side, we similarly obtain that

$$
a \geq b \text{. }
$$

Where is the mistake?
