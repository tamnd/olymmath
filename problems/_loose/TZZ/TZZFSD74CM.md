---
tag: TZZFSD74CM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221786
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f\colon \mathbb Z \to \mathbb Z$ for which
$$ f(x)+f(y)+xy \text{divides} xf(x)-y^3 $$
for all pairs of integers $(x, y)$. Here, we use the convention that $a$ divides $b$ if and only if there exists some integer $c$ such that $ac=b$.

*Dennis Chen and Andrew Wen*
