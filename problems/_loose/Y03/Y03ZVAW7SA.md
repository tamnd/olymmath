---
tag: Y03ZVAW7SA
kind: problem
type: answer
answer: \frac{\sqrt{^{2}+n^{2}}}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161079
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$ and $n$ be coprime odd natural numbers. Rectangle $ABCD$ such that $|AB|=m$ and $|AD|=n$ is divided into $mn$ unit squares. Denote by $A_{1}, A_{2}, \ldots, A_{k}$ the consecutive intersection points of the diagonal $AC$ with the sides of the unit squares $\left(A_{1}=A, A_{k}=C\right)$. Prove that:

$$
\sum_{j=1}^{k-1}(-1)^{j+1}\left|A_{j} A_{j+1}\right|=\frac{\sqrt{m^{2}+n^{2}}}{m n}
$$

(Bulgaria)
