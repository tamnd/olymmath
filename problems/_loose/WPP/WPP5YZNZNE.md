---
tag: WPP5YZNZNE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135933
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Proof: The area formula for a circumscribed quadrilateral: $ S = \sqrt{a b c d} \sin \frac{A+C}{2} $; and the area formula for a convex quadrilateral:

$ S = \sqrt{(p-a)(p-b)(p-c)(p-d) - a b c d \cos^2 \varphi} $.

Here, $ a, b, c, d $ are the lengths of the four sides, $ p $ is the semiperimeter, and $ 2 \varphi $ is the sum of the opposite angles. (Note: Consider the special cases when $ \varphi = 90^\circ $ and when $ \varphi = 0^\circ $.)
