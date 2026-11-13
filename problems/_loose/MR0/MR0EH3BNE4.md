---
tag: MR0EH3BNE4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269076
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_n)_{n\geq 1}$ be a positive real sequence given by $a_n=\sum \limits_{k=1}^n \frac{1}{k}$. Compute $$\lim \limits_{n \to \infty}e^{-2a_n} \sum \limits_{k=1}^n \left \lfloor \left(\sqrt[2k]{k!}+\sqrt[2(k+1)]{(k+1)!}\right)^2 \right \rfloor$$where we denote by $\lfloor x\rfloor$ the integer part of $x$.
