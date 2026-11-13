---
tag: PFDSSWAS2H
kind: problem
type: answer
answer: \frac{}{\operatorname{tg}\alpha-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87593
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a right-angled triangle $ABC$, the length of the hypotenuse $\overline{AB}$ is $c$, and at vertex $A$ there is a larger acute angle of measure $\alpha$. The perpendicular to the hypotenuse at point $A$ intersects line $BC$ at point $D$. The perpendicular at point $D$, to the previously drawn perpendicular $AD$, intersects line $AC$ at point $E$. In the obtained point $E$, we draw another perpendicular to the previous perpendicular $DE$, and its intersection with line $DC$ is marked as $F$. If we continue to draw "perpendiculars to perpendiculars" as described, we will obtain a sequence of segments $\overline{AD}, \overline{DE}, \overline{EF}, \ldots$ Determine the sum of their lengths.
