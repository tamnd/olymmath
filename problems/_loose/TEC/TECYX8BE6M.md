---
tag: TECYX8BE6M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264011
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$, $b$, $c$, $d$ be positive real numbers. Prove that $d$ is an integer **if and only if** there are positive real numbers $e$, $f$ satisfying $$\left \lfloor \dfrac{\left\lfloor\frac{x + a}{b}\right\rfloor + c} {d} \right\rfloor = \left \lfloor \dfrac{x + e}{f} \right \rfloor$$ for all real numbers $x$. (For a real $y$, $\lfloor y \rfloor$ is the greatest integer less than or equal to $y$.)
