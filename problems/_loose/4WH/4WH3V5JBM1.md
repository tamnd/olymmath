---
tag: 4WH3V5JBM1
kind: problem
type: answer
answer: "2071"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265051
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the function $f(x) = \lfloor x \rfloor + \lfloor \sqrt{x} \rfloor + \lfloor \sqrt{\sqrt{x}} \rfloor$ for all positive real numbers $x$. How many integers from $1$ to $2023$ inclusive are in the range of $f(x)$? Note that $\lfloor x\rfloor$ is known as the $\textit{floor}$ function, which returns the greatest integer less than or equal to $x$.

*Proposed by Harry Kim*
