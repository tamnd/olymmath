---
tag: J5PERVB60K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33842
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi$ and $\zeta$ be independent random variables.

(a) Assuming the existence of the expectation $\mathrm{E} \xi$, show that if the random variables $\xi, \zeta$ are identically distributed, then almost surely (a.s.)

$$
\mathrm{E}(\xi \mid \xi+\zeta)=\mathrm{E}(\zeta \mid \xi+\zeta)=\frac{\xi+\zeta}{2}
$$

(b) Assuming the finiteness of $\mathrm{E} \xi^{2}$ and $\mathrm{E} \zeta^{2}$, show that if $\xi \stackrel{d}{=}-\xi$, then almost surely (a.s.)

$$
\mathrm{E}\left((\xi+\zeta)^{2} \mid \xi^{2}+\zeta^{2}\right)=\xi^{2}+\zeta^{2}
$$
