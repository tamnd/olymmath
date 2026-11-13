---
tag: CGMKM2F8ZC
kind: problem
type: answer
answer: G_{2}\geq0.610G_{1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182093
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the approximate calculation of the volume of bodies in the form of truncated pyramids and cones, which often occur in technology, the rule of thumb

$$
V \approx V_{N}=\frac{h}{2}\left(G_{1}+G_{2}\right)
$$

is often applied. Here, $h$ denotes the height of the truncated body, and $G_{1}$ and $G_{2}$ denote the areas of the two parallel boundary surfaces that are perpendicular to the height $h$.

When there are large percentage differences between the parallel boundary surfaces, the error in using this formula can be significant (up to 50%). Therefore, solving the following problem is important:

By how many percent may the difference in the sizes of $G_{1}$ and $G_{2}$ at most be, so that the error of the approximation formula does not exceed 1% or $n\%$?
