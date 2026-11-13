---
tag: HE8BXZGSPK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166548
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's prove that if a line $ e $ is drawn on the plane, we can mark the vertices of a regular pentagon using only a compass, following the steps below (i.e., by the intersection of two arcs or $ e $ and an arc).

- Step 1: Draw a circle $ k_1 $ with a random radius $ r $ around a random point $ P $ on $ e $. The intersection points of $ k_1 $ and $ e $ are $ Q $ and $ R $. The subsequent circles will be briefly given by the center and radius in the following format: $ k_1 = P(r) = P(PQ) $.
- Step 2: $ k_2 = Q(r) $; one intersection point of $ k_1 $ and $ k_2 $ is $ S $.

- Step 3: $ k_3 = Q(QR) $.

- Step 4: $ k_4 = P(QR) $; the intersection points of $ k_3 $ and $ k_4 $ are $ D $ and $ F $, the latter being on the side of $ e $ that does not contain $ S $.
- Step 5: $ k_5 = S(SD) $; this intersects $ e $ at $ A $ and $ B $.
- Step 6: $ k_6 = D(AB) $; this intersects $ k_5 $ at $ C $ and $ E $. Then $ A, B, C, D, E $ are the vertices of a regular pentagon.
- Prove that - allowing the use of a straightedge - $ C $ and $ E $ can also be obtained from $ k_5 $ by intersecting it with the lines $ FB $ and $ FA $.
