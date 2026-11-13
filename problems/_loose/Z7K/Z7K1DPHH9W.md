---
tag: Z7K1DPHH9W
kind: problem
type: answer
answer: 1+\sqrt{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154360
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\lfloor x\rfloor$ be the greatest integer not exceeding $x$. For instance, $\lfloor 3.4\rfloor=3,\lfloor 2\rfloor=2$, and $\lfloor-2.7\rfloor=-3$. Determine the value of the constant $\lambda>0$ so that $2\lfloor\lambda n\rfloor=1-n+\lfloor\lambda\lfloor\lambda n\rfloor\rfloor$ for all positive integers $n$.
