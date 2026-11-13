---
tag: NR0FXR57M1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246088
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $f:\mathbb{N}\rightarrow \mathbb{N}$ is **peruvian** if it satifies the following two properties:
$\triangleright f$ is strictly increasing.
$\triangleright$ The numbers $a_1,a_2,a_3,\dots$ where $a_1=f(1)$ and $a_{n+1}=f(a_n)$ for every $n\geq 1$, are in arithmetic progression.
Determine all peruvian functions $f:\mathbb{N}\rightarrow \mathbb{N}$ such that $f(1)=3$.
