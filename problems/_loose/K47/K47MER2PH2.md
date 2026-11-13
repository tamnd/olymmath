---
tag: K47MER2PH2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241854
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{R} \to \mathbb{R}$, such that
$$ f(x^2+xy^2+y^2)=2x^2f(y)+2xf(f(y))+f(-x^2-xy^2)+f(y^2) $$
holds for any real number $x$ and $y$.
