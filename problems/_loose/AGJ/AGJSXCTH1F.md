---
tag: AGJSXCTH1F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=174437
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's indulge in the following identity:

$$
n^{2}-n(2 n+1)=(n+1)^{2}-(n+1)(2 n+1)
$$

Add $\left(\frac{2 n+1}{2}\right)^{2}-\mathrm{t}$ to both sides:

$$
n^{2}-n(2 n+1)+\left(\frac{2 n+1}{2}\right)^{2}=(n+1)^{2}-(n+1)(2 n+1)+\left(\frac{2 n+1}{2}\right)^{2}
$$

Now both sides are perfect squares:

$$
\left(n-\frac{2 n+1}{2}\right)^{2}=\left[(n+1)-\frac{2 n+1}{2}\right]^{2}
$$

from which

$$
n-\frac{2 n+1}{2}=(n+1)-\frac{2 n+1}{2}
$$

which simplifies to

$$
n=n+1
$$

which is clearly not true. Where is the mistake?
