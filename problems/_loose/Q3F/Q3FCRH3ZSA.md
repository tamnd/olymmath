---
tag: Q3FCRH3ZSA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 BMT Spring
    url: https://artofproblemsolving.com/community/c6h1841224
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70146
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2019
    source: hf-ai-mo-aops
    label: 2019 BMT Spring
---
Let $ ABCD $ be a tetrahedron with $ \angle ABC = \angle ABD = \angle CBD = 90^\circ $ and $ AB = BC $ . Let $ E, F, G $ be points on $ \overline{AD} $ , $ BD $ , and $ \overline{CD} $ , respectively, such that each of the quadrilaterals $ AEFB $ , $ BFGC $ , and $ CGEA $ have an inscribed circle. Let $ r $ be the smallest real number such that $ \dfrac{[\triangle EFG]}{[\triangle ABC]} \leq r $ for all such configurations $ A, B, C, D, E, F, G $ . If $ r $ can be expressed as $ \dfrac{\sqrt{a - b\sqrt{c}}}{d} $ where $ a, b, c, d $ are positive integers with $ \gcd(a, b) $ squarefree and $ c $ squarefree, find $ a + b + c + d $ .

Note: Here, $ [P] $ denotes the area of polygon $ P $ . (This wasn't in the original test; instead they used the notation $ \text{area}(P) $ , which is clear but frankly cumbersome. :P)
