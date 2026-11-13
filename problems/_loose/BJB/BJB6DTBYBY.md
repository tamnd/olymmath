---
tag: BJB6DTBYBY
kind: problem
type: answer
answer: f(x) = 0 \quad \forall x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220316
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all real numbers $x$, we denote by $\lfloor x \rfloor$ the largest integer that does not exceed $x$. Find all functions $f$ that are defined on the set of all real numbers, take real values, and satisfy the equality
$$f(x + y) = (-1)^{\lfloor y \rfloor} f(x) + (-1)^{\lfloor x \rfloor} f(y)$$
for all real numbers $x$ and $y$.

*Navneel Singhal, India*
