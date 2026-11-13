---
tag: 2KPCF2PF84
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235844
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A real-valued function $ f$ satisfies for all reals $ x$ and $ y$ the equality
$$ f (xy) = f (x)y + x f (y).
$$
Prove that this function satisfies for all reals $ x$ and $ y \ne 0$ the equality
$$ f\left(\frac{x}{y}\right)=\frac{f (x)y - x f (y)}{y^2}
$$
