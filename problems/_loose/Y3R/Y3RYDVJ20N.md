---
tag: Y3RYDVJ20N
kind: problem
type: answer
answer: J > \sqrt{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207962
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ f(x) = 1 - \cos x - x\sin x$.

(1) Show that $ f(x) = 0$ has a unique solution in $ 0 < x < \pi$.

(2) Let $ J = \int_0^{\pi} |f(x)|dx$. Denote by $ \alpha$ the solution in (1), express $ J$ in terms of $ \sin \alpha$.

(3) Compare the size of $ J$ defined in (2) with $ \sqrt {2}$.
