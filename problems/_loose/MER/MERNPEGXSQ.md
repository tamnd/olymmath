---
tag: MERNPEGXSQ
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178026
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathcal{F}$ be the set of continuous functions $f:[0,1] \rightarrow \mathbb{R}$, which satisfy the condition $\max _{0 \leq x \leq 1}|f(x)|=1$, and let $I: \mathcal{F} \rightarrow \mathbb{R}$,

$$
I(f)=\int_{0}^{1} f(x) \mathrm{d} x-f(0)+f(1)
$$

(a) Show that $I(f)<3$, for any $f \in \mathcal{F}$.

(b) Determine $\sup \{I(f) \mid f \in \mathcal{F}\}$.
