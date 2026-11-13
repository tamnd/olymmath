---
tag: PFNTYCR08N
kind: problem
type: answer
answer: \operatorname{Re}(z)=\operatorname{Im}(z)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190327
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the complex number $z \neq-3+2 i$, it holds that $\left|\frac{z-2+3 i}{z+3-2 i}\right|=1$. Prove that

$$
\operatorname{Im}(z)=\operatorname{Re}(z)
$$