---
tag: V19QR65BVW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=11325
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is not difficult to show that for a fixed sum of two numbers, their product is maximal if and only if these numbers are equal. Thus, it is clear that it makes sense to consider suitcases whose base is a square.

In the case where the more significant condition is the sum of all three dimensions, the symmetry of the problem implies that the suitcase should have the shape of a cube. In this case, its volume will be $(150 / 3)^{3}=50^{3}$ cm ${ }^{3}$.

The largest oversized suitcase has dimensions $220 / k, 220 / k$, 220, which corresponds to a volume of $220^{3} / k^{2}$.

Thus, the cubic suitcase will have a larger volume than the oversized one if $50^{3}>220^{3} / k^{2}$, that is, $k>(4.4)^{3 / 2} \approx 9.23$.

For the values of $k$ given in the problem, we get
