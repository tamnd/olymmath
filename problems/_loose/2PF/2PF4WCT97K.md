---
tag: 2PF4WCT97K
kind: problem
type: answer
answer: \frac{1}{+2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102514
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
9・168 Let $f_{a}(x, y)=x^{2}+a x y+y^{2}$, where $0 \leqslant a \leqslant 2$. For any $(x, y)$, let
$$
\overline{f_{a}}(x, y)=\min _{m, n \in \mathbb{Z}} f_{a}(x-m, y-n) .
$$
(1) Prove that $\overline{f_{1}}(x, y)<\frac{1}{2}$;
(2) Prove that $\overline{f_{1}}(x, y) \leqslant \frac{1}{3}$, and find all $(x, y)$ such that $\overline{f_{a}}(x, y)=\frac{1}{3}$;
(3) For any fixed $a \in[0,2]$, find the smallest positive number $c$ such that for any $(x, y)$, $ \overline{f_{a}}(x, y) \leqslant c$.
