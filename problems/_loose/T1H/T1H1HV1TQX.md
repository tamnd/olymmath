---
tag: T1H1HV1TQX
kind: problem
type: answer
answer: \frac{3}{292}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184359
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The volume of a wooden pole for telegraph lines is calculated using the following formula:

$$
V=\frac{\pi h}{12}\left(d_{1}^{2}+d_{1} d_{2}+d_{2}^{2}\right)
$$

Here, $h$ is the height, $d_{1}$ is the lower diameter, and $d_{2}$ is the upper diameter. In practice, however, the following approximate formula is often used:

$$
V^{\prime}=\frac{\pi h}{4} d^{2}
$$

where $d$ is the average diameter of the wooden pole:

$$
d=\frac{d_{1}+d_{2}}{2}
$$

a) Calculate the volume of a wooden pole for which the following values are given, using both the exact and the approximate formula:

$h=10 \mathrm{~m}, d_{1}=20 \mathrm{~cm}, d_{2}=14 \mathrm{~cm}!$

b) What percentage is the error when using the approximate formula?

c) Derive a formula for $\frac{V-V^{\prime}}{V}$ by setting $d_{1}=d+\delta$ and $d_{2}=d-\delta$!

What value does this expression yield when using the values given in part a)?
