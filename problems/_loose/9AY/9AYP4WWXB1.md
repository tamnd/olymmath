---
tag: 9AYP4WWXB1
kind: problem
type: answer
answer: 36+\frac{2+\sqrt{2}}{6}+2\sqrt{36^2+36}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186006
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $T = ABCD$ is a tetrahedron, let $s$ be the sum of all edge lengths of $T$.

In this task, each edge length (measurable in centimeters) is given only by its numerical value.

Determine whether there exists a tetrahedron $T$ among all tetrahedra $T$ with the following properties (1), (2), (3) for which $s$ attains its maximum value.

If this is the case, determine this maximum value of $s$.

The required properties are:

(1) $\angle BDC = \angle CDA = \angle ADB = 90^{\circ}$.

(2) All edge lengths of $T$ are not less than $\frac{1}{6}$.

(3) The volume of $T$ is equal to $\frac{1}{6}$.
