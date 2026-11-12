---
tag: VR3PTZ3Y1V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33937
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \ldots, \xi_{n}$ be i.i.d. random variables with skewness parameter

$$
\operatorname{skw}\left(\xi_{1}\right)=\frac{\mathrm{E}\left(\xi_{1}-\mathrm{E} \xi_{1}\right)^{3}}{\left(\mathrm{D} \xi_{1}\right)^{3 / 2}}
$$

and kurtosis parameter

$$
\operatorname{kur}\left(\xi_{1}\right)=\frac{\mathrm{E}\left(\xi_{1}-\mathrm{E} \xi_{1}\right)^{4}}{\left(\mathrm{D} \xi_{1}\right)^{2}}
$$

Show that

$$
\operatorname{skw}\left(\xi_{1}+\ldots+\xi_{n}\right)=\frac{\operatorname{skw}\left(\xi_{1}\right)}{\sqrt{n}}
$$

and

$$
\operatorname{kur}\left(\xi_{1}+\ldots+\xi_{n}\right)=3+\frac{\operatorname{kur}\left(\xi_{1}\right)-3}{n}
$$
