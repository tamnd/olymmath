---
tag: SFK5EBCQ4M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210257
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=109
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c$ be the side-lengths of a triangle, $r$ be the inradius and $r_a, r_b, r_c$ be the corresponding exradius. Show that
$$ \frac{a+b+c}{\sqrt{a^2+b^2+c^2}} \leq 2 \cdot \frac{\sqrt{{r_a}^2+{r_b}^2+{r_c}^2}}{r_a+r_b+r_c-3r} $$
