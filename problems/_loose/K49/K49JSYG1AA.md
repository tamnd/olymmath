---
tag: K49JSYG1AA
kind: problem
type: answer
answer: \sqrt{26}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $O$ be the center of the circle, $R$ its radius, $AC$ and $BD$ the considered chords intersecting at point $K$. Denote $AK=6x, CK=x$, $BK=2y, DK=3y$.

By the intersecting chords theorem, $6x^2 = 6y^2$. Draw the perpendicular bisectors $OM$ and $ON$ to the chords $AC$ and $BD$ respectively. Then $MK = 6x - \frac{7x}{2} = \frac{5x}{2}, NK = 3x - \frac{5x}{2} = \frac{x}{2}, OK^2 = \frac{26x^2}{4}$.
Thus, $6x^2 + \frac{26x^2}{4} = R^2 = 50$, from which $x = 2, OK = \sqrt{26}$.
