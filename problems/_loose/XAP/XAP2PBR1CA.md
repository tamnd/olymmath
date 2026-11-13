---
tag: XAP2PBR1CA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1610154
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16340
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218004
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2018
    source: hf-ai-mo-aops
    label: 2018 Caucasus Mathematical Olympiad
---
By *centroid* of a quadrilateral $PQRS$ we call a common point of two lines through the midpoints of its opposite sides. Suppose that $ABCDEF$ is a hexagon inscribed into the circle $\Omega$ centered at $O$ . Let $AB=DE$ , and $BC=EF$ . Let $X$ , $Y$ , and $Z$ be centroids of $ABDE$ , $BCEF$ ; and $CDFA$ , respectively. Prove that $O$ is the orthocenter of triangle $XYZ$ .
