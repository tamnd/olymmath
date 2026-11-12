---
tag: 7RA1Z4WARE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33554
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The conditional variance of a random variable $\xi$ with respect to a partition $\mathscr{D}$ is the random variable

$$
\mathrm{D}(\xi \mid \mathscr{D})=\mathrm{E}\left[(\xi-\mathrm{E}(\xi \mid \mathscr{D}))^{2} \mid \mathscr{D}\right] .
$$

Show that

$$
\mathrm{D} \xi=\mathrm{ED}(\xi \mid \mathscr{D})+\mathrm{DE}(\xi \mid \mathscr{D})
$$
