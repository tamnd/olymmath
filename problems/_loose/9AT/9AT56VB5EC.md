---
tag: 9AT56VB5EC
kind: problem
type: answer
answer: \frac{1}{2}(\sqrt{5}-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89032
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that there does not exist a rational number $x$ such that $\left\{x^{2}\right\}+\{x\}=1$.

Find at least one real number $x$ that satisfies this equation.

The notation $\{x\}$ represents the fractional part of $x$, i.e., $\{x\}=x-\lfloor x\rfloor$ where $\lfloor x\rfloor$ is the greatest integer not greater than $x$. For example, $\lfloor 3.4\rfloor=3,\{3.4\}=0.4$.
