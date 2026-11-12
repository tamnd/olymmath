---
tag: DF1HWKVDMB
kind: problem
type: answer
answer: -1\leqx\leq0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4777
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The domain of definition is $x \neq 1$. Since the denominator is negative in the domain of definition, the inequality reduces to:

$$
\sqrt{x^{2}-2 x+2} \geq -\sqrt{5} x
$$

For $x \geq 0$, this inequality holds true. For $x < 0$, we get:

$$
x^{2}-2 x+2 \geq 5 x^{2}
$$
