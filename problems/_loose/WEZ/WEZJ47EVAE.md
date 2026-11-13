---
tag: WEZJ47EVAE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78144
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any real number $x$, we denote $\lfloor x\rfloor$ as the integer part of $x$, which is the greatest integer less than or equal to $x$. We denote $\{x\}$ as its decimal part, which is $\{x\}=x-\lfloor x\rfloor$. For example, we have $\lfloor 3.1\rfloor=3$ and $\{3.1\}=3.1-3=0.1$. We also have $\lfloor-2.7\rfloor=-3$ and $\{-2.7\}=-2.7-(-3)=0.3$.

Find all real numbers $x$ such that $\lfloor x\rfloor \times\{x\}=2019 \times x$.
