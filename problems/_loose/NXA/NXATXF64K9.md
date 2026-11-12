---
tag: NXATXF64K9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=44424
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that a convex polyhedral angle can be divided into trihedral angles by planes passing through its non-adjacent edges.

$33^{*}$. The magnitude of the polyhedral angle $S A_{1} A_{2} \ldots A_{n}$ is defined as the difference between the sum of the magnitudes of all its dihedral angles and the sum of the magnitudes of the interior angles of the polygon $A_{1} A_{2} \ldots A_{n}$ obtained by sectioning the polyhedral angle with a plane (note that the latter sum is equal to $\pi(n-2)$ for any choice of section). Prove that this magnitude is always positive and additive, i.e., if the given polyhedral angle is the union of two polyhedral angles sharing a common face, then the magnitude of the given angle is equal to the sum of the magnitudes of the angles composing it.
