---
tag: KWS55WG1W4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204880
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_0,a_1,\dots$ be a sequence of positive reals such that
$$ a_{n+2} \leq \frac{2023a_n}{a_na_{n+1}+2023}$$ for all integers $n\geq 0$. Prove that either $a_{2023}<1$ or $a_{2024}<1$.
