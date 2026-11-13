---
tag: XJECPAJ95W
kind: problem
type: answer
answer: \frac{11 - \sqrt{37}}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213428
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABC$ be a triangle. Points $D$, $E$, and $F$ are respectively on the sides $\overline{BC}$, $\overline{CA}$, and $\overline{AB}$ of $\triangle ABC$. Suppose that
$$
\frac{AE}{AC} = \frac{CD}{CB} = \frac{BF}{BA} = x
$$
for some $x$ with $\frac{1}{2} < x < 1$. Segments $\overline{AD}$, $\overline{BE}$, and $\overline{CF}$ cut the triangle into 7 nonoverlapping regions: 4 triangles and 3 quadrilaterals. The total area of the 4 triangles equals the total area of the 3 quadrilaterals. Compute the value of $x$.
