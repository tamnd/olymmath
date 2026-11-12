---
tag: 3Y7M6MM9SN
kind: problem
type: answer
answer: \frac{8788}{2598}\pi
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20622
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a regular triangular pyramid (not a regular tetrahedron), the area of the base is four times smaller than the area of a lateral face. The height of the pyramid is 130 cm.

Let's construct the following (infinite) sequence of spheres. Let $ S_{1} $ be the inscribed sphere of this pyramid. Then $ S_{2} $ is the sphere that touches the lateral faces of the pyramid and the sphere $ S_{1} $; $ S_{3} $ is the sphere that touches the lateral faces of the pyramid and the sphere $ S_{2} $, not equal to $ S_{1} $, and so on; $ S_{n+1} $ is the sphere that touches the lateral faces of the pyramid and the sphere $ S_{n} $, not equal to $ S_{n-1} $.

Find the total volume of all these spheres.
