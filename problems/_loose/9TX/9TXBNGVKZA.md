---
tag: 9TXBNGVKZA
kind: problem
type: answer
answer: \frac{\text{Area}(KLMN)}{\text{Area}(ABCD)} < \frac{8}{27}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254418
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $K$ be the intersection of the diagonals of a convex quadrilateral $ABCD$. Let $L\in [AD]$, $M \in [AC]$, $N \in [BC]$ such that $KL\parallel AB$, $LM\parallel DC$, $MN\parallel AB$. Show that $$\dfrac{Area(KLMN)}{Area(ABCD)} < \dfrac {8}{27}.$$
