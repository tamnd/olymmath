---
tag: MH3Y2N9RD5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h281599
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65315
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256788
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
Start with the theorem "If two angles of a triangle are equal, the triangle is isosceles," and the following four statements:

1. If two angles of a triangle are not equal, the triangle is not isosceles.
2. The base angles of an isosceles triangle are equal.
3. If a triangle is not isosceles, then two of its angles are not equal.
4. A necessary condition that two angles of a triangle be equal is that the triangle be isosceles.

Which combination of statements contains only those which are logically equivalent to the given theorem?

$ \textbf{(A)}\ 1, 2, 3, 4
\textbf{(B)}\ 1, 2, 3
\textbf{(C)}\ 2, 3, 4
\textbf{(D)}\ 1, 2
\textbf{(E)}\ 3, 4$
