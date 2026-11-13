---
tag: VN11MGBK71
kind: problem
type: answer
answer: ^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89837
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all real numbers $a$ for which there exists a function $f: \mathbb{R} \rightarrow \mathbb{R}$ such that

$$
f(x+f(y))=f(x)+a\lfloor y\rfloor
$$

for all real numbers $x$ and $y$.

Note: $\lfloor y\rfloor$ is the greatest integer not greater than $y$. For example, $\lfloor 1.7\rfloor=1,\lfloor-\pi\rfloor=-4,\lfloor 0\rfloor=0$.
