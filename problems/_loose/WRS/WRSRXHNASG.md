---
tag: WRSRXHNASG
kind: problem
type: answer
answer: "37"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265861
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A $39$-tuple of real numbers $(x_1,x_2,\ldots x_{39})$ satisfies
$$2\sum_{i=1}^{39} \sin(x_i) = \sum_{i=1}^{39} \cos(x_i) = -34.$$
The ratio between the maximum of $\cos(x_1)$ and the maximum of $\sin(x_1)$ over all tuples $(x_1,x_2,\ldots x_{39})$ satisfying the condition is $\tfrac ab$ for coprime positive integers $a$, $b$ (these maxima aren't necessarily achieved using the same tuple of real numbers). Find $a + b$.

*Proposed by Evan Chang*
