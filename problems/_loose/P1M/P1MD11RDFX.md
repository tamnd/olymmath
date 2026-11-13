---
tag: P1MD11RDFX
kind: problem
type: answer
answer: 2020\cdot2021
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187383
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\alpha_{i} \in(0,1), i=1,2, \ldots, 2021$ and $x \in\left(0, \frac{\pi}{4}\right)$. Prove that for the expression

$$
A=\frac{2021 \sin \left(\alpha_{1} x\right) \sin \left(\alpha_{2} x\right) \ldots \sin \left(\alpha_{2021} x\right)}{\cos \left(\alpha_{1} x\right)+\cos \left(\alpha_{2} x\right)+\ldots+\cos \left(\alpha_{2021} x\right)}
$$

the inequality holds:

$$
\log _{\cos \left(\alpha_{1} x\right)} A+\log _{\cos \left(\alpha_{2} x\right)} A+\ldots+\log _{\cos \left(\alpha_{2021} x\right)} A \geq 2020 \cdot 2021
$$
