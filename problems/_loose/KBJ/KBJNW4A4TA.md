---
tag: KBJNW4A4TA
kind: problem
type: answer
answer: \frac{2}{+b}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168607
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For two positive numbers, say $a$ and $b$, their harmonic mean is understood as the (1) number. Show that if the lengths of two segments are $a$ and $b$, then the following construction yields a segment of length $h$.

On the two sides of an angle, measure $a$ and $b$, connect the endpoints of these measurements with a straight line, intersect this line with the angle bisector, and finally erect a perpendicular to the angle bisector at the intersection point. This perpendicular cuts off a segment of length $h$ from the sides of the angle.

$$
h=\frac{2 a b}{a+b}, \text { that is } \frac{1}{h}=\frac{1}{2}\left(\frac{1}{a}+\frac{1}{b}\right)
$$
