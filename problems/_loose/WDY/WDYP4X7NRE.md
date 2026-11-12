---
tag: WDYP4X7NRE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33557
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \ldots, \xi_{n}, \tau-$ be independent random variables, where $\xi_{1}, \ldots, \xi_{n}$ are identically distributed, and $\tau$ takes values $1, \ldots, n$. Show that if $S_{\tau}=\xi_{1}+\ldots+\xi_{\tau}-$ is the sum of a random number of random variables, then

$$
\mathrm{E}\left(S_{\tau} \mid \tau\right)=\tau \mathrm{E} \xi_{1}, \mathrm{D}\left(S_{\tau} \mid \tau\right)=\tau \mathrm{D} \xi_{1}
$$

and

$$
\mathrm{E} S_{\tau}=\mathrm{E} \tau \cdot \mathrm{E} \xi_{1}, \mathrm{D} S_{\tau}=\mathrm{E} \tau \cdot \mathrm{D} \xi_{1}+\mathrm{D} \tau \cdot\left(\mathrm{E} \xi_{1}\right)^{2}
$$
