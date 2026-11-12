---
tag: 6EFXSHDSGK
kind: problem
type: answer
answer: NP_{1}\cdotNP_{2}=4r^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=35358
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two Projections. Imagine a plane $\Pi_{1}$ tangent to the Earth at the North Pole $N$, and a plane $\Pi_{2}$ tangent to the Earth at the South Pole $S$. We can draw one map by projecting each point on the Earth's surface from $N$ onto $\Pi_{2}$, and another map by projecting each point from $S$ onto $\Pi_{1}$; this is known as the stereographic projection. Now we can fold both planes so that the meridians align. Each point on one map corresponds to a specific point on the other map, thus defining a certain mapping of the plane onto itself. How can this mapping be directly determined?
