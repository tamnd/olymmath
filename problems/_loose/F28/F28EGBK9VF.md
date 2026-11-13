---
tag: F28EGBK9VF
kind: problem
type: answer
answer: R' = \frac{1}{2r} \sqrt{2R(2R - h_a)(2R - h_b)(2R - h_c)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207425
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=216
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A'\in(BC),$ $B'\in(CA),C'\in(AB)$ be the points of tangency of the excribed circles of triangle $\triangle ABC$ with the sides of $\triangle ABC.$ Let $R'$ be the circumradius of triangle $\triangle A'B'C'.$ Show that $$
R'=\frac{1}{2r}\sqrt{2R\left(2R-h_{a}\right)\left(2R-h_{b}\right)\left(2R-h_{c}\right)}$$
where as usual, $R$ is the circumradius of $\triangle ABC,$ r is the inradius of $\triangle ABC,$ and $h_{a},h_{b},h_{c}$ are the lengths of altitudes of $\triangle ABC.$
